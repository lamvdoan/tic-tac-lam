import React from 'react';
import { connect } from 'react-redux';

export const SummaryWindow = ({ game }) => (
    <div className="summary-window">
        <p>{game.isGameActive ? 'Player ' + game.currentPlayer.getPlayerId() + '\'s Turn'
            : !game.isGameActive && game.didPlayerWinGame ? `Player ${game.currentPlayer.getPlayerId()} Wins!`
            : !game.isGameActive && !game.didPlayerWinGame ? 'Cat!' : ''
            }
        </p>
    </div>
);

const mapStateToProps = (state) => ({
    game: state.game
});

export default connect(mapStateToProps)(SummaryWindow);
