let board = [
    '', '', '',
    '', '', '',
    '', '', ''
]

let cases = [
    {
        one: 0,
        two: 4,
        three: 8
    },
    {
        one: 2,
        two: 4,
        three: 6
    },
    {
        one: 0,
        two: 1,
        three: 2
    },
    {
        one: '3',
        two: '4',
        three: '5'
    },
    {
        one: '6',
        two: '7',
        three: '8'
    },
    {
        one: '0',
        two: '3',
        three: '6'
    },
    {
        one: '1',
        two: '4',
        three: '7'
    },
    {
        one: '2',
        two: '5',
        three: '8'
    },
];

let marker = 'X';
let x = 0;
let o = 0;
let moveCount = 0;
let xScore = document.getElementById('x-score');
let oScore = document.getElementById('o-score');

function mark(button) {
    if(button.innerHTML === '&nbsp;')
    {
        board[button.getAttribute('id')] = marker;
        button.innerHTML = marker;
        
        if (marker === 'X')
            marker = 'O';
        else
            marker = 'X';
        
        moveCount++;
        console.log(moveCount);
        if (moveCount >= 9) {
            checkWin();
            reset();
            moveCount = 0;
        }
        
        checkWin();
    }
}

function checkWin()
{
    for (let i = 0; i < cases.length; i++) {
        if (board[cases[i].one] === board[cases[i].two] && board[cases[i].two] === board[cases[i].three])
        {
            if (checkValid(board[cases[i].one], board[cases[i].two], board[cases[i].three]))
            {
                reset();
            }
        }
    }
    
}

function checkValid(numOne, numTwo, numThree) {
    if (numOne === "X" && numTwo === "X" && numThree === "X")
    {
        alert("X is the winner");
        x++;
        xScore.innerHTML = "X Score: " + x;
        return true;
    }
    
    if (numOne === "O" && numTwo === "O" && numThree === "O")
    {
        alert("O is the winner");
        o++;
        oScore.innerHTML = "O Score: " + o;
        return true;
    }
    return false;
}

function reset()
{
    for (let i = 0; i < board.length; i++) {
        board[i] = "&nbsp;";
        document.getElementById(i.toString()).innerHTML = "&nbsp;";
    }
}