import React from 'react';
import { connect } from 'react-redux';
import { X_CELL, O_CELL, UNOCCUPIED_CELL } from '../properties/game';
import { chooseACell } from '../actions/game';

export class Cell extends React.Component {
    onClick = () => {
        this.props.chooseACell(this.props.id);
    }

    getMarker = () => {
        switch(this.props.game.grid[this.props.id]) {
            case X_CELL:
                return X_CELL;
            case O_CELL:
                return O_CELL;
            default:
                return UNOCCUPIED_CELL;
        } 
    }

    render() {
        return (
            <div className="cell" onClick={this.onClick}>
                {this.getMarker()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.game
});

const mapDispatchToProps = (dispatch) => ({
    chooseACell: (index) => dispatch(chooseACell(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
