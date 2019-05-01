import React from 'react';
import { connect } from 'react-redux';
import { cellIsMarked, setIsGameActive, setCurrentPlayer } from '../actions/game';
import { O_CELL_IMAGE, X_CELL_IMAGE, EMPTY_CELL_IMAGE, IMAGE_HOME } from '../properties/imageFileSystem';

const imagePath = {
    emptyCell: `${IMAGE_HOME}/${EMPTY_CELL_IMAGE}`,
    oCell: `${IMAGE_HOME}/${O_CELL_IMAGE}`,
    xCell: `${IMAGE_HOME}/${X_CELL_IMAGE}`,
}

export class Cell extends React.Component {
    onClick = () => {
        console.log('Clicking cell: ' + this.props.id);
        this.props.cellIsMarked(this.props.id);
        this.props.setCurrentPlayer();

        // console.log('Grid Letter: ' + this.props.game.grid[this.props.id]);
        // console.log('Grid: ' + this.props.game.grid);
    };

    getImageName = () => {
        if (this.props.game.grid[this.props.id] === 'X') {
            return 'xCell';
        } else if (this.props.game.grid[this.props.id] === 'O') {
            return 'oCell';
        }
    }

    render() {
        const imageName = this.getImageName();
        return (
            <img onClick={this.onClick} className="cell" src={imagePath[imageName]} />
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.game
});

const mapDispatchToProps = (dispatch) => ({
    cellIsMarked: (index) => dispatch(cellIsMarked(index)),
    setIsGameActive: () => dispatch(setIsGameActive()),
    setCurrentPlayer: () => dispatch(setCurrentPlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
