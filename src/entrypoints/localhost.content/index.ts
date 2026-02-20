export default defineContentScript({
  matches: ['*://localhost/*', '*://127.0.0.1/*'],
  async main(ctx) {
    console.log('Hello content.');
    console.log("Injecting script...");

    window.addEventListener('message', (event) => {
      // only accept messages from the current tab
      if (event.source != window || !event.data.type) return;
      console.log('message:', event.data.type)
    }, {signal: ctx.signal})

    await injectScript("/injected.js", {
      keepInDom: true,
    });
  },
});
