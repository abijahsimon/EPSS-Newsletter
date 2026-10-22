// The imported article galleries mount their lightboxes after the page loads.
let activeDialog: HTMLElement | null = null;
let galleryOpener: HTMLElement | null = null;

const controls = (dialog: HTMLElement) => Array.from(dialog.querySelectorAll<HTMLElement>(
  'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
)).filter((element) => element.getClientRects().length > 0);

const closeControl = (dialog: HTMLElement) => controls(dialog).find((element) =>
  /^close\b/i.test(element.getAttribute("aria-label") ?? element.textContent?.trim() ?? ""),
);

const syncDialog = () => {
  const dialog = Array.from(document.querySelectorAll<HTMLElement>('[role="dialog"][aria-modal="true"]'))
    .find((element) => element.getClientRects().length > 0) ?? null;
  if (dialog === activeDialog) return;
  if (!dialog) {
    activeDialog = null;
    if (galleryOpener?.isConnected) galleryOpener.focus({ preventScroll: true });
    galleryOpener = null;
    return;
  }
  if (!activeDialog) galleryOpener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  activeDialog = dialog;
  (closeControl(dialog) ?? controls(dialog)[0])?.focus({ preventScroll: true });
};

new MutationObserver(syncDialog).observe(document.body, { childList: true, subtree: true });
syncDialog();

document.addEventListener("keydown", (event) => {
  if (!activeDialog) return;
  if (event.key === "Escape") {
    const close = closeControl(activeDialog);
    if (close) {
      event.preventDefault();
      event.stopPropagation();
      close.click();
    }
  }
  if (event.key !== "Tab") return;
  const items = controls(activeDialog);
  const first = items[0], last = items.at(-1);
  if (!first || !last) return;
  if (!activeDialog.contains(document.activeElement) || (event.shiftKey && document.activeElement === first)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

export {};
