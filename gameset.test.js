
const GameSet = require('./gameset');

const gameset = new GameSet(1);

test('resultado precisa ser null', () => {
    gameset.team1Score = 24;
    gameset.team2Score = 24;
    expect(gameset.winner).toBeNull();
});

test('resultado precisa ser team1', () => {
    gameset.team1Score = 26;
    gameset.team2Score = 24;
    expect(gameset.winner).toBe('team1');
});

test('resultado precisa ser team2', () => {
    gameset.team1Score = 30;
    gameset.team2Score = 32;
    expect(gameset.winner).toBe('team2');
});

test('resultado precisa ser null', () => {
    gameset.team1Score = 25;
    gameset.team2Score = 25;
    expect(gameset.winner).toBeNull();
});
