document.getElementById("openWebsite").addEventListener("click", function () {
  // Replace the URL with the website you want to open.
  chrome.tabs.create({ url: "http://www.brave.com" });
});
