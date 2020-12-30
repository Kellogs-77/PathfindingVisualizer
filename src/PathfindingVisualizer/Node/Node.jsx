import { render } from '@testing-library/react';
import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
    render() {
        const {col, isFinish, isStart, isVisited, isWall, onMouseDown, onMouseEnter, onMouseUp, row,} = this.props;
        const extraClassName = isFinish
            ? 'node-finish'
            : isStart
            ? 'node-start'
            : isVisited 
            ? 'node-visited'
            : isWall
            ? 'node-wall'
            : '';
        return  < div 
                    id={`node-${row}-${col}`}
                    className={`node ${extraClassName}`}
                    onMouseDown={() => onMouseDown(row, col)}
                    onMouseEnter={() => onMouseEnter(row, col)}
                    onMouseUp={() => onMouseUp()}></div>
    }
} 

// export const DEFAULT_NODE = {
//     row: 0,
//     col: 0,
// };
// export default class Node extends Component {
//     render() {
//         const {
//             col,
//             isFinish,
//             isStart,
//             isWall,
//             isVisited,
//             onMouseDown,
//             onMouseEnter,
//             onMouseUp,
//             row,
//         } = this.props;
//         const extraClassName = isFinish
//             ? 'node-finish'
//             : isStart
//             ? 'node-start'
//             : isVisited 
//             ? 'node-visited'
//             : isWall
//             ? 'node-wall'
//             : '';
//         return (
//             <div 
//                 id={`node-${row}-${col}`}
//                 className={`node ${extraClassName}`}
//                 onMouseDown={() => onMouseDown(row, col)}
//                 onMouseEnter={() => onMouseEnter(row, col)}
//                 onMouseUp={() => onMouseUp()}></div>
//         );
//     }
// }