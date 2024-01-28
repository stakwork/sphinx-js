import browser from "webextension-polyfill";

import injectScript from "./inject-script";

injectScript();

window.addEventListener("message", async (event) => {
  if (event.source !== window) return;
  if (event.data.type !== "SPHINX_PROVIDER") return;

  if (event.data.type) {
    console.log("Content script received: ", event.data.text);
    const response = await browser.runtime.sendMessage({
      type: "SPINX_CONTENT_SCRIPT",
      text: event.data.text,
    });

    console.log(response);
  }
});

export {};
