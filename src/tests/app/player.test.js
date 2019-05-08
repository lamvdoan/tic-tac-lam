import Player from '../../app/player';
import { X_CELL, O_CELL } from '../../app/properties';

test('should get player marker', () => {
    let player = new Player(X_CELL, 0);
    expect(X_CELL).toEqual(player.getMarker());
});

test('should get player id', () => {
    let player = new Player(O_CELL, 1);
    expect(1).toEqual(player.getPlayerId());
});
