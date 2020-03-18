const handleClick = () => {
    browser.notifications.create({
        "type": "basic",
        "iconUrl": "./icons/icon.jpeg",
        //name of the notification
        "title": "myNotification",
        //content of the notification 
        "message": "content of the notifications"
    });
}
browser.browserAction.onClicked.addListener(handleClick);