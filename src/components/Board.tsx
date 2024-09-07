'use client';
import React from 'react';
import Square from './Square';

interface BoardProps {
    squares : string[];
    onSquareClick: (index:number) => void;
}

const Board: React.FC<BoardProps> = ({squares , onSquareClick}) => {



    const renderSquare = (index:number) => (
      <Square value= {squares[index]} onClick= {() => onSquareClick(index)} />
    );

    return(

        <div className='grid grid-cols-3 gap-2 bg-gradient-to-r from-blue-500 to-teal-400'>
            {Array(9).fill(null).map((_,index) => renderSquare(index))}
            </div>
    );
}

export default Board;