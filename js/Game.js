class Game{
    constructor(){
        this.inProgress = true;
        this.winner = null; // 'O' or 'X' 
        this.currentTurn = Game.O; // 'O' or 'X' 
        this.empty = Game.undo;
        this.movesMade = 0;
        this.squares = new Array(9).fill().map(s => new Square());
        this.history = [];
        this.myTrack = new Audio ('../assets/click.mp3');
        this.gameWithAI = false;
    }
    
    makeMove(i){
        if( this.inProgress && !this.squares[i].value && this.gameWithAI == false){
            this.squares[i].value = this.currentTurn;

            this.history.push(i)
            this.movesMade++;
            this.checkForWinner();
            this.currentTurn = (this.currentTurn === Game.O) ? Game.X : Game.O;

        }else if(this.inProgress && !this.squares[i].value && this.gameWithAI == true){
            this.currentTurn = Game.O;
            this.squares[i].value = this.currentTurn;
            this.history.push(i)
            this.movesMade++;
            this.checkForWinner();

            for (let index = 0; index < this.squares.length; index++) {
                if (this.squares[index].value === null) {
                    this.currentTurn = Game.Ai;
                    this.checkForWinner();
                    this.squares[index].value = this.currentTurn;
                    this.movesMade++;
                    this.history.push(index)
                    break
                }
            }

        }
    }

    playSound(){
        if (this.inProgress === true) {
            this.myTrack.play();
        }
    }
    
    undoMovement(){
        if( this.history.length > 0 && this.inProgress === true){
            this.squares[this.history[this.history.length - 1]].value = this.empty;
            this.movesMade--;
            this.history.pop();
            this.currentTurn = (this.currentTurn === Game.O) ? Game.X : Game.O;
        }
    }

    checkForWinner(){
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winningCombinations.forEach((wc) => {
            const [a, b, c] = wc;
            const sqA = this.squares[a];
            const sqB = this.squares[b];
            const sqC = this.squares[c];

            if (sqA.value && sqA.value === sqB.value && sqA.value === sqC.value) {
                this.inProgress = false;
                this.winner = sqA.value; // 'O' or 'X'
                sqA.isHighLighted = sqB.isHighLighted = sqC.isHighLighted = true;
            }

        });

        // check for tie
        if(this.movesMade === this.squares.length){
            this.inProgress = false; //inProgress =  false AND winner = null
        }
    }
    playAgainAI(){
        this.inProgress = true;
        this.winner = null; // 'O' or 'X' 
        this.currentTurn = Game.O; // 'O' or 'X' 
        this.empty = Game.undo;
        this.movesMade = 0;
        this.squares = new Array(9).fill().map(s => new Square());
        this.history = [];
        this.myTrack = new Audio ('../assets/click.mp3');
        this.gameWithAI = true;
    }
    playAgain(){
        this.inProgress = true;
        this.currentTurn = Game.O; // 'O' or 'X' 
        this.winner = null; // 'O' or 'X' 
        this.movesMade = 0;
        this.squares = new Array(9).fill().map(s => new Square());
        this.history = [];
        this.gameWithAI = false;
    }
}

Game.O = 'O';
Game.X = 'X';
Game.Ai= 'A'
Game.undo = null;