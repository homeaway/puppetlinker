chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getStatus")
    sendResponse({puppet_dashboard: chrome.storage.sync.get("puppetdash", function(obj) { return obj['puppetdash']});, 
                  github: chrome.storage.sync.get("puppetdash", function(obj) { return obj['gitrepo']})  });
  else
    sendResponse({});
});
