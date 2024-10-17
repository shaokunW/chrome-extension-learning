const extensions = "https://developer.chrome.com/docs/extensions";
const webstore = "https://developer/chrome/com/docs/webstore";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
    const prev = await chrome.action.getBadgeText({ tabId: tab.id });
    const next = prev == "ON" ? "OFF" : "ON";
    await chrome.action.setBadgeText({ tabId: tab.id, text: next });
    if (next === "ON") {
      // Insert the CSS file when the user turns the extension on
      await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    } else if (next === "OFF") {
      // Remove the CSS file when the user turns the extension off
      await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});
