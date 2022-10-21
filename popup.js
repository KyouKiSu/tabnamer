var tab_name_selector  = document.getElementById('tab_name_selector');
function callback(tabs) {
    var currentTab = tabs[0];
    console.log(currentTab);
  }
tab_name_selector.addEventListener('search', () => {
    
    chrome.runtime.sendMessage({ "tab_name": tab_name_selector.value });
    window.close();
});