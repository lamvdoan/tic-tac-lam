const gridIsCat = [
    'X', 'O', 'O',
    'O', 'X', 'X',
    'X', 'O', 'O'];

const gridIsCatAgain = [
    'X', 'O', 'X',
    'O', 'O', 'X',
    'X', 'X', 'O'];

const gridHorizontalXWin = [
    'X', 'X', 'X',
    'X', 'O', 'O',
    'O', 'X', 'O'];

const gridVerticalOWin = [
    'O', 'X', 'O',
    'O', 'O', 'X',
    'O', 'X', 'X'];

const gridDiagonalXWin = [
    'O', 'X', 'X',
    'X', 'X', 'O',
    'X', 'O', 'O'];

const gridPartiallyFilled = [
    'O', 'X', 'X',
    'X', '', 'O',
    'X', 'O', ''];

const gridBarelyFilled = [
    '', '', '',
    '', '', 'O',
    'X', '', ''];

export {
    gridIsCat,
    gridIsCatAgain, 
    gridHorizontalXWin, 
    gridVerticalOWin, 
    gridDiagonalXWin, 
    gridPartiallyFilled, 
    gridBarelyFilled
};
