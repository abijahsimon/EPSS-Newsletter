// Department Google Analytics tag supplied by Daniel Chung, October 21, 2026.
// Keep local development and alternate preview hosts out of the readership data.
if (window.location.hostname === "newsletter.epss.ucla.edu") {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "G-VBHJXC9RMG");

  const tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=G-VBHJXC9RMG";
  document.head.appendChild(tag);
}
