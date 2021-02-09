class GameAI{
    constructor(){
        this.inProgressAI = true;
        this.winnerAI = null; // 'O' or 'X' 
        this.currentTurnAI = GameAI.O; // 'O' or 'X' 
        this.movesMadeAI = 0;
        this.squaresAI = new Array(9).fill().map(s => new Square());
    }

    makeMove(i){
        if( this.inProgressAI && !this.squaresAI[i].value){
            this.squaresAI[i].value = this.currentTurnAI;

            this.movesMadeAI++;
            this.checkForwinnerAI();
            //this.currentTurnAI = (this.currentTurnAI === GameAI.O) ? GameAI.X : GameAI.O;

            if (this.currentTurnAI === GameAI.X) {
                return GameAI.O
            }
            if (this.currentTurnAI === GameAI.X) {
                for (let index = 0; index < this.squaresAI.length; index++) {
                    if (this.squaresAI[index].value) {
                        let ai = document.getElementById("GameAI-view-square");
                        ai.innerHTML = GameAI.X;
                    }else{
                        continue
                    }
                    
                }
            }
                
        }
    }

    checkForwinnerAI(){
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
            const sqA = this.squaresAI[a];
            const sqB = this.squaresAI[b];
            const sqC = this.squaresAI[c];

            if (sqA.value && sqA.value === sqB.value && sqA.value === sqC.value) {
                this.inProgressAI = false;
                this.winnerAI = sqA.value; // 'O' or 'X'
                sqA.isHighLighted = sqB.isHighLighted = sqC.isHighLighted = true;
            }

        });

        // chech for tie
        if(this.movesMadeAI === this.squaresAI.length){
            this.inProgressAI = false; //inProgressAI =  false AND winnerAI = null

        }
    }
}

GameAI.O = 'O';
GameAI.X = 'Xai';