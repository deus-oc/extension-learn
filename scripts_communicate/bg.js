const notification = (data) => {
    browser.notifications.create({
        "type": "basic",
        "title": "PING",
        "message": "Sent a message to background js file"
    });
}
browser.runtime.onMessage.addListener(notification);

browser.tabs.onUpdated.addListener((tabId) => {
    browser.pageAction.show(tabId);
})  

browser.pageAction.onClicked.addListener((tab) => {
    browser.tabs.sendMessage(tab.id,{data: "dummyData"});
})