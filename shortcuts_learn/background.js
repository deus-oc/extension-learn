browser.commands.onCommand.addListener((name) => {
    if(name == "my-shortcut"){
        browser.notifications.create({
            "type": "basic",
            "title": "shortcut",
            "message": "Notification due to shortcut trigger"
        })
    }
});