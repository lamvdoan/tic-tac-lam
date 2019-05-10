import React from 'react';
import { connect } from 'react-redux';
import { chooseACell } from '../app/game';

export class Cell extends React.Component {
    onClick = () => {
        this.props.chooseACell(this.props.id);
    }

    render() {
        return (
            <div className="cell" onClick={this.onClick}>
                {this.props.game.grid[this.props.id]}
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
