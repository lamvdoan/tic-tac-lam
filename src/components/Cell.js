import React from 'react';
import { connect } from 'react-redux';

export class Cell extends React.Component {
    onClick = (grid) => {
        // 1) Change image
        // 2) Mark the cell as taken
        console.log("Clicking cell: " + this.props.id);
    };

    render() {
        return (
            <img onClick = {this.onClick} className="cell" src="/images/emptyCell.png" />
        );
    }
}

const mapStateToProp = (state, prop) => ({
    grid: null
});

export default Cell;
