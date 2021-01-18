/* 17.3.1.1 액션타입 정의하기 */
// 액션 타입은 대문자로 정의
// 문자열 내용은 '모듈이름/액션이름'과 같은 형태로 작성
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";

/* 17.3.1.2 액션 생성 함수 만들기 */
// export를 통하여 다른 파일에서 불러와 사용 가능
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

/* 17.3.1.3 초기 상태 및 리듀서 함수 만들기 */
// const initialState = {
//     number: 0
// };

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1
//             };
//         default:
//             return state;
//     }
// }

// export default counter;
// export : 여러개를 내보낼 수 있음
// export default : 단 한개만 내보낼 수 있음

/* 17.6 리덕스 더 편하게 사용하기 */
// 액션 생성 함수, 리듀서를 작성할 때 redux-actions라는 라이브러리와 immer라이브러리를 활용하면 편하게 사용 가능
// yarn add redux-actions

/* 17.6.1.1 counter에 모듈에 적용하기 */
import { createAction, handleActions } from 'redux-actions';

const INCREASE = "couter/INCREASE";
const DECREASE = "couter/DECREASE";

// 매번 객체를 직접 만들어 줄 필요 없이 간단하게 액션 생성 함수 선언
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState
)

export default counter;
