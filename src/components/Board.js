import React from 'react';
import Cell from './Cell';

export class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="board__row">
                    <Cell id="0" />
                    <Cell id="1"/>
                    <Cell id="2"/>
                </div>
                <div className="board__row">
                    <Cell id="3"/>
                    <Cell id="4"/>
                    <Cell id="5"/>
                </div>
                <div className="board__row">
                    <Cell id="6"/>
                    <Cell id="7"/>
                    <Cell id="8"/>
                </div>
            </div>
        );
    }
}

export default Board;
