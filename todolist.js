function addItem() {
    let inputText = document.getElementById('inputText');
    let ul = document.getElementById('ull');

    if(inputText .value== '') {
        alert('You have to write anything');
    }
    else {
        let li = "<li><div class='text'>" + inputText.value + "</div> <div class='icon'><img src='macos-close.png' onclick='removeItem(this)'></div>" + "</li>";
        ul.innerHTML += li;
    }
    
    inputText.value = "";
}

function removeItem(obj) {
    obj.parentElement.parentElement.remove();
}
//<div class='icon'><a href='#' onclick='removeItem(this)'>&#10006</a></div>