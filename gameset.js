class GameSet {
    constructor(sequence) {
        this.team1Score = 0;
        this.team2Score = 0;
        this.sequence = sequence;
        this.finalWinner = null;
    }

    get winner() {
      
        var limitPointSet = this.sequence != 5 ? 25 : 15;

        if (this.team1Score >= limitPointSet && this.team1Score - this.team2Score >= 2) {
            return this.finalWinner = 'team1';
        }
        if (this.team2Score >= limitPointSet && this.team2Score - this.team1Score >= 2) {
            return this.finalWinner = 'team2';
        }
        return null;
    }

    isOver() {
        if (this.winner != null) {
            return true;
        }
        return false;
    }


}

if(typeof module !== 'undefined'){
    module.exports = GameSet;
}