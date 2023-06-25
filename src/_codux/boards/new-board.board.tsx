import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <input type="number" />
        <option about={''}>Option</option>
    </div>
});
