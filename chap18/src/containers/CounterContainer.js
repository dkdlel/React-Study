import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter'

// const CounterContainer = ({ number, increase, decrease }) => {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     )
// }

// export default connect(
//     state => ({ number: state.counter }),
//     { increase, decrease }
// )(CounterContainer);

/* 18.3.1.3 Thunk 생성 함수 만들기 */
const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter
            number={number}
            onIncrease={increaseAsync}
            onDecrease={decreaseAsync}
        />
    )
}

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer)