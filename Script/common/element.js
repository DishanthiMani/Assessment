
function elementById(id) {

    return document.getElementById(id);
}

function elementByName(name) {

    return document.getElementById(name);
}

function setValueById(id,value) {

    var element = elementById(id);

    if (element != null) {

        element.value = value;
    }
}

function setValueByName(name, value) {

    var element = elementByName(name);

    if(element != null) {

        element.value = value;
    }
}

