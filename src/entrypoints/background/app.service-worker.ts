/**
 * @namespace background
 * @name AppServiceWorker
 * @description Application Core
 */
export class AppServiceWorker {
  static #instance: AppServiceWorker | null = null;
  #initialized: boolean = false;
  private logger;

  private constructor() {
    this.logger = console;
  }
  /**
   * @static
   * @method getInstance
   * @returns AppServiceWorker
   */
  static getInstance(): AppServiceWorker {
    if (!AppServiceWorker.#instance) {
      AppServiceWorker.#instance = new AppServiceWorker();
    }
    return AppServiceWorker.#instance;
  }

  async initialize(): Promise<void> {
    if (this.initialized) {
      this.logger.warn('App Service Worker already initialized');
      return;
    }
    this.#initialized = true;
    this.logger.info('App Service Worker initialized successfully');
  }

  async shutdown(): Promise<void> {
    this.logger.info('Shutting down App Service Worker...');
    // TODO: добавить вызов действий при завершении(отключении) App Service Worker
    this.#initialized = false;
  }

  /**
   * Shutdown Service Worker
   */
  async shutdown(): Promise<void> {
    this.logger.info('Shutting down ChatBookmark Service Worker...');
    await this.plugin.dispose();
    this.initialized = false;
  }
}
