document.getElementById('myChoice').addEventListener('click', () => {
    // alert(document.getElementById('myColor').value);
    browser.storage.local.set({mycolor: document.getElementById('myColor').value});
}); 