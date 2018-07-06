rainbow = new Array(7);
rainbow[0] = "#f00";
rainbow[1] = "#ff6300";
rainbow[2] = "#ffff00";
rainbow[3] = "#008000";
rainbow[4] = "#0000ff";
rainbow[5] = "#4b0082";
rainbow[6] = "#bd31ff";

for (let i = 0; i < rainbow.length; i++) {

    targetDiv = new Array(7);
    targetDiv[0] = document.getElementById('r');
    targetDiv[1] = document.getElementById('o');
    targetDiv[2] = document.getElementById('y');
    targetDiv[3] = document.getElementById('g');
    targetDiv[4] = document.getElementById('b');
    targetDiv[5] = document.getElementById('i');
    targetDiv[6] = document.getElementById('v');

    targetDiv[i].style.backgroundColor = rainbow[i];
}