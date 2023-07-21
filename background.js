console.log("I am background script!");

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.create({
      url: "onboarding.html",
    });
  }
});

// chrome.tabs.getCurrent(function(tab) {
//   chrome.tabs.remove(tab.id, function() { });
// });
