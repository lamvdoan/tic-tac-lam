import React from 'react';
import { connect } from 'react-redux';
import { X_CELL, O_CELL } from '../properties/game';
import { O_CELL_IMAGE, X_CELL_IMAGE, EMPTY_CELL_IMAGE, IMAGE_HOME } from '../properties/imageFileSystem';
import { chooseACell, checkEndGameCondition } from '../actions/game';

const imagePath = {
    emptyCell: `${IMAGE_HOME}/${EMPTY_CELL_IMAGE}`,
    oCell: `${IMAGE_HOME}/${O_CELL_IMAGE}`,
    xCell: `${IMAGE_HOME}/${X_CELL_IMAGE}`,
}

export class Cell extends React.Component {
    onClick = () => {
        this.props.chooseACell(this.props.id);
        this.props.checkEndGameCondition();
    }

    getImageName = () => {
        switch(this.props.game.grid[this.props.id]) {
            case X_CELL:
                return imagePath['xCell'];
            case O_CELL:
                return imagePath['oCell'];
            default:
                return imagePath['emptyCell'];
        } 
    }

    render() {
        return (
            <img onClick={this.onClick} className="cell" src={this.getImageName()} />
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.game
});

const mapDispatchToProps = (dispatch) => ({
    chooseACell: (index) => dispatch(chooseACell(index)),
    checkEndGameCondition: () => dispatch(checkEndGameCondition())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
