 document.getElementById('myButton').addEventListener('click', () => {
    document.getElementById('myLabel').textContent = "Converted";
});

//because storage is asynchronous
const getColor = browser.storage.local.get('mycolor');
//this will return a promise
getColor.then(res => {
    const myColor = res.mycolor;
    console.log(myColor);
    if(myColor){
        document.getElementById("myButton").style.background = myColor;
    }
});