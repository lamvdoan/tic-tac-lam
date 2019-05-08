export default class Player {
    constructor(marker, playerId) {
        this.marker = marker;
        this.playerId = playerId;
    }

    getMarker() {
        return this.marker;
    }

    getPlayerId() {
        return this.playerId;
    }
}
