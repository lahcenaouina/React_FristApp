// Counter.js

import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

function Counter() {
    const count = useStoreState((state) => state.count);
    const increment = useStoreActions((actions) => actions.increment);
    const decrement = useStoreActions((actions) => actions.decrement);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
