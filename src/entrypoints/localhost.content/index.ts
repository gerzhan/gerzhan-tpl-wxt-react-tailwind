import "~/assets/tailwind.css";

export default defineContentScript({
  matches: ['*://localhost/*', '*://127.0.0.1/*'],
  cssInjectionMode: "ui",
  async main(ctx) {
    console.log('Hello content.');
    console.log("Injecting script...");

    window.addEventListener('message', (event) => {
      // only accept messages from the current tab
      if (event.source != window || !event.data.type) return;
      console.log('message:', event.data.type)
    }, {signal: ctx.signal})

    /**
     * @description Inject JS Script into Tab
     */
    await injectScript("/injected.js", {
      keepInDom: true,
    });

    const ui = await createUi(ctx);
    ui.mount()
  },
});

/**
 * @description создание простого
 * @param cxt
 * @returns
 */
function createUi(cxt, archor = 'body') {
  return createShadowRootUi(cxt, {
    name: "gerzhan-shadow-root",
    position: "inline",
    anchor: archor,
    append: "last",
    onMount(uiContainer, shadow, shadowHost) {
      const div = document.createElement('p')
      div.classList.add("text-lg", "text-red-500", "font-bold", "p-8");
      div.textContent = "Shadow root with TailwindCSS";
      uiContainer.append(div)
      return div
    },
    onRemove(mounted) {
      mounted?.remove()
    },
  })
}
