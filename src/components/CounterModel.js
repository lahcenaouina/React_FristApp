// CounterModel.js

import { action, createStore } from 'easy-peasy';

const counterModel = {
    count: 0, // Initial state

    // Actions
    increment: action((state) => {
        state.count += 1;
    }),

    decrement: action((state) => {
        state.count -= 1;
    }),
};

// Create the store
const store = createStore(counterModel);

export default store;
