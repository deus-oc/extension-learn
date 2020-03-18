Just a simple cross browser extension to understand content script
In order to test the add-on, load mainfest.json and use it as temp extensions through debugging mode and then run the websites where actions are being taken

for making the contextMenu extension permissions are required and background work too is done, so certain browser APIs are required to make this functional.

for sidebar we put the extension logo on the side panel, putting some html and js content

pageAction is basically the button like bookmark the page (star button) in the url input box  which when clicked will trigger some response. 
So it will need to have set of icon, title and popup details(here the document which needs to popup should be defined)

for notifications, add permissions in manifest.json which takes array/list and as the work will be done in background, thus we will need to create a script to interact with browser API's.


for options page we use option_ui for key having an object and page in the object as key for value with an html page

in order to store a value, we need the storage API extension and this local storage accepts the values as objects and array. 
In web extensions, Storage is asynchronous.

