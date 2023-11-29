import injectScript from "./inject-script";

injectScript();

window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.data.type !== "SPHINX_PROVIDER") return;

  if (event.data.type) {
    console.log("Content script received: ", event.data.text);
    window.postMessage(
      { type: "SPINX_CONTENT_SCRIPT", text: event.data.text },
      "*"
    );
  }
});

export {};
