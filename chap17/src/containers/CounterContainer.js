/* 17.5.1 CounterContainer 만들기 */
// 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야함
// connect(mapStateToProps, mapDispatchToPropx)(연동할 컴포넌트)
// mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주는 함수
// mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주는 함수
// connect는 다른 함수를 반환
import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect, useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';

// const CounterContainer = ({ number, increase, decrease }) => {
//     return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
// }

// const mapStateToProps = state => ({
//     number: state.counter.number
// });

// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//         // console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         // console.log('decrease');
//         dispatch(decrease());
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 함수를 사용하지 않고 connect가능
// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     dispatch => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease())
//     })
// )(CounterContainer);

// bindActionCreatos를 통해 여러개의 액션을 편하게 호출
// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease
//             },
//             dispatch
//         )
// )(CounterContainer);

// mapDispatchToProps에 해당하는 파라미터를 액션생성 함수로 이루어진 객체 형태로 넣어서 좀더 편하게 관리
// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer);

/* 17.7 Hooks를 사용하여 컨테이너 컴포넌트 만들기 */
/* 17.7.1 useSelector로 상태 조회하기 */
// 사용법 : const 결과 = useSelector(상태 선택 함수);
// 상태 선택 함수 : mapStateToProps와 형태 동일

// const CounterContainer = () => {
//     const number = useSelector(state => state.counter.number);
//     return <Counter number={number} />
// }

/* 17.7.2 useDispatch를 사용하여 액션 디스패치 하기 */
// 스터어의 내장 함수 dispatch를 사용할 수 있게 해줌
// 사용법
// const dispatch = useDispatch();
// dispatch({type: 'SAMPLE_ACTION});

// const CounterContainer = () => {
//     const number = useSelector(state => state.counter.number);
//     const dispatch = useDispatch();
//     return (
//         <Counter
//             number={number}
//             onIncrease={() => dispatch(increase())}
//             onDecrease={() => dispatch(decrease())}
//         />
//     )
// }

// useCallback 감싸기
const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}
export default CounterContainer;

/* 17.7.3 useStore를 사용하여 리덕스 스토어 사용하기 */
// 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용 가능
// 사용하는 상황이 흔치 않을 것
// 사용법
// const store = useStore();
// store.dispatch({type: 'SAMPLE_ACTION'});
// store.getState();