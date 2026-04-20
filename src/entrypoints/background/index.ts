import { AppServiceWorker } from './app.service-worker';

let serviceWorker: AppServiceWorker | null = null;

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  // ============================================================================
  // Service Worker Lifecycle
  // ============================================================================

  /**
   * @description Initialize on Service Worker install
   */
  browser.runtime.onInstalled.addListener(async details => {
    console.log('[Service Worker] Extension installed:', details.reason);

    serviceWorker = AppServiceWorker.getInstance();
    await serviceWorker.initialize();
  });

  /**
   * @description Initialize on Service Worker startup
   */
  browser.runtime.onStartup.addListener(async () => {
    console.log('[Service Worker] Extension started');

    if (!serviceWorker) {
      serviceWorker = AppServiceWorker.getInstance();
      await serviceWorker.initialize();
    }
  });

  /**
   * @description Handle Service Worker suspend
   */
  browser.runtime.onSuspend.addListener(async () => {
    console.log('[Service Worker] suspending...');

    if (serviceWorker) {
      await serviceWorker.shutdown();
      serviceWorker = null;
    }
  });
});
