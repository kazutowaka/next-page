chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == 'change_title')) {
    var url = document.querySelector('#pnnext').getAttribute('href');
    sendResponse(url);
  }
});