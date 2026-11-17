/**
 * Sends a Google Analytics event. Safe to call anywhere: it does nothing on the
 * server, and if gtag.js hasn't loaded yet (it loads lazily) the event waits in
 * dataLayer until it does. Outside production GA never loads, so nothing is sent.
 */
export function track(name: string, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  const gtag =
    w.gtag ||
    function () {
      // gtag.js only reads the `arguments` object, not a plain array.
      w.dataLayer!.push(arguments);
    };
  gtag("event", name, params);
}
