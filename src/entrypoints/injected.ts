export default defineUnlistedScript(() => {
  console.log("injected.ts in MAIN World");
  setTimeout(() => {
    window.postMessage({type: 'init'})
  }, 500);

});