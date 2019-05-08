const boardIsCat = [
    'X', 'O', 'O',
    'O', 'X', 'X',
    'X', 'O', 'O'];

const boardIsCatAgain = [
    'X', 'O', 'X',
    'O', 'O', 'X',
    'X', 'X', 'O'];

const boardHorizontalXWin = [
    'X', 'X', 'X',
    'X', 'O', 'O',
    'O', 'X', 'O'];

const boardVerticalOWin = [
    'O', 'X', 'O',
    'O', 'O', 'X',
    'O', 'X', 'X'];

const boardPartiallyFilled = [
    'O', 'X', 'O',
    'O', 'O', 'X',
    'X', '', 'X'];

export {
    boardIsCat,
    boardIsCatAgain, 
    boardHorizontalXWin, 
    boardVerticalOWin, 
    boardPartiallyFilled
};
