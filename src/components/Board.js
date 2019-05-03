import React from 'react';
import Cell from './Cell';

export const Board = () => (
    <div className="board">
        <table>
            <tbody>
                <tr>
                    <th><Cell id="0" /></th>
                    <th><Cell id="1"/></th>
                    <th><Cell id="2"/></th>
                </tr>
                <tr>
                    <th><Cell id="3"/></th>
                    <th><Cell id="4"/></th>
                    <th><Cell id="5"/></th>
                </tr>
                <tr>
                    <th><Cell id="6"/></th>
                    <th><Cell id="7"/></th>
                    <th><Cell id="8"/></th>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Board;
