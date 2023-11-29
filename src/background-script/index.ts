chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message", message);
  console.log("sender", sender);
  console.log("sendResponse", sendResponse);
  return;
});

export {};
