const initialize = (tabId) => {
    browser.pageAction.setIcon({
        tabId: tabId,
        path: "./icons/icon.png"
    });
    browser.pageAction.setTitle({
        tabId: tabId,
        title: "MY ACTION"
    });
    browser.pageAction.show(tabId);
    //tells browser there is popup and binds popup with the click
    browser.pageAction.setPopup({
        tabId: tabId,
        popup: "./index.html"
    })
}
browser.tabs.onUpdated.addListener((tabId) => {
    initialize(tabId);
});

