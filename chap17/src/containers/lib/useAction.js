/* 17.7.5 useActions 유틸 Hook을 만들어서 사용하기 */
// 리덕스 개발팀에서 필요하지 않다고 판단하여 제외된 Hook
// 참조링크 : https://react-redux.js.org/next/api/hooks#recipe-useactions

import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators } from "redux";

export default function useActions(actions, deps) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    )
}