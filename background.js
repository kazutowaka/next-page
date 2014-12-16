chrome.contextMenus.create({
  title: "次へ",
  onclick: function(info, tab){
    chrome.tabs.sendMessage(tab.id, {
      command: "change_title",
      title: "hoge"
    },
    function(msg) {
      console.log(tab, msg);
      chrome.tabs.update({url:'https://www.google.co.jp' + msg});
    });
  }
});
