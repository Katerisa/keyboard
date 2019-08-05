const keyboard = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
    ['caps', ' ', '', '', '', '', '', ''],
];
const countOfRow = keyboard.length;
const countOfColumn = keyboard[0].length;
let currentChar;
var tvRemote = function(words) {
    let result = 0;
    let caps = false;
    currentChar = [0, 0];
    for (let i = 0; i < words.length; i++){
        let nextChar = words[i];
        if (nextChar === nextChar.toUpperCase() !==  caps){
            console.log("Im here");
            result += getPath(currentChar, 'caps');
            caps = !caps;
        }
        result += getPath(currentChar, nextChar);
    }
    return result;
};
function getPath(start, target) {
    let path = 0;
    let newPosition = [];
    for (let row = 0; row < countOfRow; row++) {
        let column = keyboard[row].indexOf(target.toLowerCase());
        if (column !== -1) {
            newPosition = [row, column];
            break;
        }
    }
    path += Math.min(Math.abs(start[0] - newPosition[0]),
        (start[0] > newPosition[0]) ? countOfRow - start[0] + newPosition[0] : start[0] + countOfRow - newPosition[0]);

    path += Math.min(Math.abs(start[1] - newPosition[1]),
        (start[1] > newPosition[1]) ? countOfColumn - start[1] + newPosition[1] : start[1] + countOfColumn - newPosition[1]);
    currentChar = newPosition.slice();
    console.log(path + 1);
    return path + 1;
}
tvRemote("0hrp");
