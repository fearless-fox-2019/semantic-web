var items = document.getElementById('list');
var list = []


function displayList() {
    var data = '';
    if (list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            data += "<li class='list-group-item'><button class='pull-right' onclick='removeItem(" + i + ")'><span class='glyphicon glyphicon-trash text-danger'></span></button> " + list[i] + "</li>";
        }
    }

    document.getElementById('list').innerHTML = data;
}

function addItem() {
    var item = document.getElementById('item');
    var val = item.value;
    if (val == "") {
        alert("Please enter something first!");
    } else {
        list.push(val.trim());
        item.value = '';
        displayList();
    }

}


function removeItem(item) {
    list.splice(item, 1);
    displayList();
}