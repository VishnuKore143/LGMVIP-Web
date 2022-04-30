function newElement() {
    var lst1 = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
    lst1.appendChild(text);
    if (inputValue === '') {
        alert("Please Input Some Text!");
    } else {
        document.getElementById("myUL").appendChild(lst1);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var text2 = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text2);
    lst1.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var list2 = document.querySelector('ul');
list2.addEventListener('click', function (ms) {
    if (ms.target.tagName === 'LI') {
        ms.target.classList.toggle('checked');
    }
}, false);

var Nodelist = document.getElementsByTagName("LI");

for (var i = 0; i < Nodelist.length; i++) {
    var span = document.createElement("SPAN");
    var text3 = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text3);
    Nodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


