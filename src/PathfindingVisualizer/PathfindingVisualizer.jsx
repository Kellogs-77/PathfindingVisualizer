import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInSortestPathOrder} from '../algorithims/dijkstra';
import './PathfindingVisualizer.css';


const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;


export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
        };
    }

    componentDidMount() {
        const grid = getInititalGrid();
        this.setState({grid});
    }

    animateDijkstra(visitedNodesInOrder) {
        for(let i = 0; i < visitedNodesInOrder.length; i++) {
            setTimeout(()=> { 
                const node = visitedNodesInOrder[i];
                const newGrid = this.state.grid.slice();
                const newNode = {
                    ...node,
                    isVisited:true,
                };
            newGrid[node.row][node.col] = newNode;
            this.setState({grid: newGrid});
            }, 20 * i);
        }
    }

    visualizeDijkstra() {
        const {grid} = this.state;
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        this.animateDijkstra(visitedNodesInOrder);
    }

    render () {
        const {grid, mouseIsPressed} = this.state;

        return (
            <>
               <button onClick= {() => this.visualizeDijkstra()}>
                   Visualize Dijkstra's Algorithim
               </button>
                <div className ="grid">
                {grid.map((row, rowIdx) => {
                return (
                    <div key ={rowIdx}>
                        {row.map((node, nodeIdx) => {
                            const {isFinish, isStart, isVisited} = node;
                            return (
                                <Node
                                    key={nodeIdx}
                                    isStart ={isStart}
                                    isFinish={isFinish}
                                    isVisited={isVisited}></Node>
                                    
                            );
                        })}
                    </div>
                );
            })}
            </div>
            </>
        );
    }
}

const getInititalGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++){
        const currentRow = [];
        for(let col = 0; col < 50; col++) {
            currentRow.push(createNode(col, row));
        }
        grid.push(currentRow);
    }
    return grid;
};

const createNode = (col, row) => {
    return {
        col,
        row, 
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        isVisited: false,
        distance: Infinity,
        isWall: false,
        previousNode: null,
    };
};



// render () {
//     const {grid, mouseIsPressed} = this.state;

//     return (
//         <>
//            <button onClick= {() => this.visualizeDijkstra()}>
//                Visualize Dijkstra's Algorithim
//            </button>
//             <div className ="grid">
//             {grid.map((row, rowIdx) => {
//             return (
//                 <div key ={rowIdx}>
//                     {row.map((node, nodeIdx) => {
//                         const {row, col, isFinish, isStart, isWall} = node;
//                         return (
//                             <Node
//                                 key={nodeIdx}
//                                 col = {col}
//                                 isStart ={isStart}
//                                 isWall = {isWall}
//                                 isFinish={isFinish}
//                                 mouseIsPressed = {mouseIsPressed}
//                                 onMouseDown = {(row, col) => this.handleMouseDown(row, col)}
//                                 onMouseEnter = {(row, col) =>
//                                     this.handleMouseEnter(row, col)
//                                 }
//                                 onMouseUp = {() => this.handleMouseUp()}
//                                 row = {row}></Node>
                                
//                         );
//                     })}
//                 </div>
//             );
//         })}
//         </div>
//         </>
//     );
// }