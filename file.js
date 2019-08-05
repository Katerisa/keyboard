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
var currentChar = [0, 0];
var tvRemote = function(words) {
    var result = 0;
    var caps = false;
    for (var i = 0; i < words.length; i++){
        var nextChar = words[i];
        if (nextChar === nextChar.toUpperCase() !== caps){
            result += getPath(currentChar, 'caps');
            caps = !caps;
            currentChar = [5, 0];
        }
        result += getPath(currentChar, nextChar);
    }
    return result;
};
function getPath(start, target) {
    var path = 0;
    var newPosition = [];
    for (var row = 0; row < countOfRow; row++) {
        var column = keyboard[row].indexOf(target.toLowerCase());
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
    return path + 1;
}
