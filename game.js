class Game {
    constructor(team1, team2, time) {
        this.team1 = team1;
        this.team2 = team2;
        this.time = time;
        this.sets = [];
    }

    get actualSet() {
        return this.sets[this.sets.length - 1];
    }

    addPoint(team) {
        if (team == 1) {
            this.actualSet.team1Score++;
        }
        if (team == 2) {
            this.actualSet.team2Score++;
        }
        if (this.actualSet.isOver()) {
            var checkWinner = this.checkWinner();
            if(checkWinner != null){
                this.gameOver(checkWinner);
                return 'over';
            } else {
                if (this.sets.length != 5) {
                    return 'next';
                } else {
                    this.gameOver(this.checkWinner());
                    return 'over';
                }
            }
        }
        return '';
    }

    removePoint(team) {
        if (team == 1 && this.actualSet.team1Score > 0) {
            this.actualSet.team1Score--;
        }
        if (team == 2 && this.actualSet.team2Score > 0) {
            this.actualSet.team2Score--;
        }
    }

    startNewSet(){
        if (this.sets.length != 5) {
            this.sets.push(new GameSet(this.sets.length + 1));
            return 'next';
        } else {
            this.gameOver(this.checkWinner());
            return 'over';
        }
    }

    checkWinner() {
        var t1 = 0; 
        var t2 = 0;
        for (var i = 0; i < this.sets.length; i++) {
            if (this.sets[i].finalWinner == 'team1') {
                t1++;
            } else if(this.sets[i].finalWinner == 'team2') {
                t2++;
            }
        }
        if (t1 == 3) {
            return this.team1;
        } else if (t2 == 3) {
            return this.team2;
        }
        return null;
    }

    getPoints(team) {
        if (team == 1) {
            return this.actualSet.team1Score;
        }
        return this.actualSet.team2Score;
    }

    getWinSets(team){
        var winSets = 0;
        for (var i = 0; i < this.sets.length; i++) {
            if (this.sets[i].finalWinner == team) {
                winSets++;
            }
        }
        return winSets;
    }

    start() {
        this.sets.push(new GameSet(1));
    }

    gameOver() {
        console.log('Game Over');
    }
}
