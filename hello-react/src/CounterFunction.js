import React, { useState } from 'react';

const CounterFunction = () => {
    const [state, setState] = useState({
        number: 0
    });

    const onIncrease = () => {
        setState({
            number: state.number + 1
        });
    };
    const onDecrease = () => {
        setState({
            number: state.number - 1
        });
    };

    return (
        <div>
            <p>{state.number}</p>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default CounterFunction;