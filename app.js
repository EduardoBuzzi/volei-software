var game;
var displayT1 = document.querySelector("#team1-score");
var displayT2 = document.querySelector("#team2-score");
var displaySet = document.querySelector("#actual-set");
var displayT1Name = document.querySelector("#team1d");
var displayT2Name = document.querySelector("#team2d");
var setT1Name = document.querySelector("#setTeam1Name");
var setT2Name = document.querySelector("#setTeam2Name");
var setsWinTeam1 = document.querySelector("#setsWinTeam1");
var setsWinTeam2 = document.querySelector("#setsWinTeam2");

document.querySelector('#register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    e.target.querySelector('button').appendChild(createSpin());

    var team1 = document.querySelector('#team1').value;
    var team2 = document.querySelector('#team2').value;
    var time = document.querySelector('#time').value;
    game = new Game(team1, team2, time);

    wait(1000).then(() => {
        // apenas dando um tempo para fingir que os dados estao sendo processados xD
        document.querySelector('#register').style.display = 'none';
        document.querySelector('#game').style.display = 'initial';
        game.start();
        displayT1Name.innerHTML = team1;
        displayT2Name.innerHTML = team2;
        setT1Name.innerHTML = team1;
        setT2Name.innerHTML = team2;
        displaySet.innerHTML = game.actualSet.sequence;
    });
});

document.querySelectorAll('.bt-action-plus').forEach(function(bt) {
    bt.addEventListener('click', function(e) {
        var team = e.target.dataset.team;
        var result = game.addPoint(team);
        var points = game.getPoints(team);
        document.querySelector("#team"+team+"-score").innerHTML = points;

        if (result == 'next') {
            modalSet.show();
        }

        if (result == 'over') {
            modalOver.show();
            document.querySelector('#game').style.display = 'none';
            document.querySelector('#winner').style.display = 'initial';
            document.querySelector('#winner-team').innerHTML = game.checkWinner();
            setsWinTeam1.innerHTML = game.getWinSets('team1');
            setsWinTeam2.innerHTML = game.getWinSets('team2');
        }
    });
});

document.querySelectorAll('.bt-action-less').forEach(function(bt) {
    bt.addEventListener('click', function(e) {
        var team = e.target.dataset.team;
        game.removePoint(team);
        var points = game.getPoints(team);
        document.querySelector("#team"+team+"-score").innerHTML = points;
    });
});

document.querySelector('#btn-seguir-set').addEventListener('click', function(e) {
    document.querySelector('#sets').style.display = 'block';
    game.startNewSet();
    displayT1.innerHTML = game.getPoints(1);
    displayT2.innerHTML = game.getPoints(2);
    displaySet.innerHTML = game.actualSet.sequence;
    setsWinTeam1.innerHTML = game.getWinSets('team1');
    setsWinTeam2.innerHTML = game.getWinSets('team2');
});





