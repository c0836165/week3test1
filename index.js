const validateAdjacentCell = e => {
    let targetElem = document.getElementById(e.target.id);
    let targetNum = parseInt(targetElem.id);
    if (
        targetNum - 4 > 0 &&
        document.getElementById(targetNum - 4).innerHTML === ""
    ) {
        let elem = document.getElementById(targetNum - 4);
        moveCell(elem, targetNum);
    } else if (
        targetNum + 4 <= 16 &&
        document.getElementById(targetNum + 4).innerHTML === ""
    ) {
        let elem = document.getElementById(targetNum + 4);
        moveCell(elem, targetNum);
    } else if (
        targetNum % 4 != 0 &&
        document.getElementById(targetNum + 1).innerHTML === ""
    ) {
        let elem = document.getElementById(targetNum + 1);
        moveCell(elem, targetNum);
    } else if (
        targetNum % 4 != 1 &&
        document.getElementById(targetNum - 1).innerHTML === ""
    ) {
        let elem = document.getElementById(targetNum - 1);
        moveCell(elem, targetNum);
    } else if (
        targetNum % 4 != 1 &&
        targetNum % 4 != 0 &&
        document.getElementById(targetNum + 1).innerHTML === ""
    ) {
        let elem = document.getElementById(targetNum - 1);
        moveCell(elem, targetNum);
    } else if (
        targetNum % 4 != 0 &&
        targetNum % 4 != 1 &&
        document.getElementById(targetNum + 1).innerHTML === ""
    ) {
        let elem = document.getElementById(targetNum + 1);
        moveCell(elem, targetNum);
    }
};

/*
 * function which move the pointed element to empty cell.
 * empty the pointed cell.
 */
const moveCell = (elem, targetNum) => {
    elem.innerHTML = document.getElementById(targetNum).innerHTML;
    elem.classList.add("non-empty-cell");
    document.getElementById(targetNum).innerHTML = "";
    document.getElementById(targetNum).classList.remove("non-empty-cell");
};

/*
 * Function for keyboard navigations (arrow keys)
 */
document.onkeydown = function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
        // up arrow
        let getEmptyCellId = checkEmptyCell();
        let isElem = document.getElementById(`${getEmptyCellId + 4}`);
        if (isElem.innerHTML != "" && isElem.id <= 16) {
            let elem = document.getElementById(getEmptyCellId);
            moveCell(elem, getEmptyCellId + 4);
        }
    } else if (e.keyCode == "40") {
        // down arrow
        let getEmptyCellId = checkEmptyCell();
        let isElem = document.getElementById(`${getEmptyCellId - 4}`);
        if (isElem.innerHTML != "") {
            let elem = document.getElementById(getEmptyCellId);
            moveCell(elem, getEmptyCellId - 4);
        }
    } else if (e.keyCode == "37") {
        // left arrow
        let getEmptyCellId = checkEmptyCell();
        let isElem = document.getElementById(`${getEmptyCellId + 1}`);
        if (isElem.innerHTML != "" && getEmptyCellId % 4 != 0) {
            let elem = document.getElementById(getEmptyCellId);
            moveCell(elem, getEmptyCellId + 1);
        }
    } else if (e.keyCode == "39") {
        // right arrow
        let getEmptyCellId = checkEmptyCell();
        let isElem = document.getElementById(`${getEmptyCellId - 1}`);
        if (
            getEmptyCellId - 1 > 0 &&
            isElem.innerHTML != "" &&
            isElem.id % 4 >= 1
        ) {
            let elem = document.getElementById(getEmptyCellId);
            moveCell(elem, getEmptyCellId - 1);
        }
    }
};

var arr = [];
var arr1 = JSON.parse(localStorage.name || null) || {};
console.log(arr1[0]);
console.log(arr1[1]);


const checkEmptyCell = () => {
    for (let i = 1; i <= 16; i++) {
        let emptyCell = document.getElementById(`${i}`).innerHTML;
        if (emptyCell == "") {
            return i;
        }
    }
}

var myInterval = setInterval(function() {

}, 1);

var time = 0;
var downloadTimer = setInterval(function() {

    time += 1;
    document.getElementById("h1").innerHTML = time;



}, 1000);





function pause() {
    var t = time;
    arr.push(t);
    localStorage.name = JSON.stringify(arr);
    location.reload();
}


function list() {


    document.getElementById('h2').innerHTML = arr1 + "second";

}