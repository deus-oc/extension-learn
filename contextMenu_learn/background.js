//create a context menu
browser.contextMenus.create({
    id: "ddg",
    title: "Search on duckduckGo",
    contexts: ["selection"]
});

const contextMenuAction = (info,tab) => {
    const url = `https://duckduckgo.com/?q=${info.selectionText}`;
    //here info.selectionText only works because contexts in create contextMenu is pre-defined.
    browser.tabs.create({url: url});
}

//action listener to context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

