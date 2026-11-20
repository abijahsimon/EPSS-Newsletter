// DC mounts its visible article after the browser's initial fragment pass.
// Re-align while that layout settles, without changing URL/history or focus.
let cancelAlignment = () => {};
function alignFragment() {
  cancelAlignment();
  let id: string;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  if (!id) return;
  let frame = 0;
  const align = () => {
    frame = 0;
    const target = [...document.querySelectorAll<HTMLElement>("[id]")]
      .find((node) => node.id === id && node.getClientRects().length > 0);
    if (!target) return;
    const header = [...document.querySelectorAll<HTMLElement>("header")]
      .find((node) => node.getClientRects().length > 0 && ["sticky", "fixed"].includes(getComputedStyle(node).position));
    const lead = Number(target.dataset.anchorLead) || 0;
    const offset = (header?.getBoundingClientRect().height ?? 0) + 16 + lead;
    const top = target.getBoundingClientRect().top;
    if (Math.abs(top - offset) > 1) window.scrollBy({ top: top - offset, behavior: "instant" });
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(align); };
  const mutations = new MutationObserver(schedule);
  mutations.observe(document.body, { childList: true, subtree: true });
  const resize = new ResizeObserver(schedule);
  resize.observe(document.body);
  document.addEventListener("load", schedule, true);
  const stop = () => {
    mutations.disconnect();
    resize.disconnect();
    cancelAnimationFrame(frame);
    clearTimeout(timeout);
    document.removeEventListener("load", schedule, true);
    for (const event of ["wheel", "touchstart", "pointerdown", "keydown"]) window.removeEventListener(event, stop);
  };
  // Never fight a reader who starts navigating or scrolling themselves.
  for (const event of ["wheel", "touchstart", "pointerdown", "keydown"]) window.addEventListener(event, stop, { passive: true });
  const timeout = window.setTimeout(stop, 10000);
  cancelAlignment = stop;
  void document.fonts.ready.then(schedule);
  schedule();
}
window.addEventListener("hashchange", alignFragment);
alignFragment();
