chrome.tabs.query({
  active: true,
  currentWindow: true
}, ([currentTab]) => {
  console.log(currentTab.id);
});

function changeTabName(name) {
  try{
    document.title = name;
  }
  catch(e){
    console.log("Couldn't change tab name: "+e)
  }
  
}
chrome.runtime.onMessage.addListener((msg, sender, res) => {
  if (msg['tab_name'] != null) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, ([tab]) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: changeTabName,
        args: [msg['tab_name']],
      });
    });
  }
});


