document.getElementById('notify').addEventListener('click', () => {
     // alert("Clicked on notify me")
     browser.runtime.sendMessage({
          action: "notfiy"
     })
});