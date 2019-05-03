import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../actions/game';

export class RestartButton extends React.Component {
    onClick = () => {
        this.props.restartGame();
    }

    render() {
        return (
            <button onClick={this.onClick} className="button">Play Again</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    restartGame: () => dispatch(restartGame())
});

export default connect(null, mapDispatchToProps)(RestartButton);
