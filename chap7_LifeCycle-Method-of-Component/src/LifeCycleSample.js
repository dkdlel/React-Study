import React, { Component } from 'react';

/* 7.3.1 예제 컴포넌트 생성 */
// class LifeCycleSample extends Component{
//     state = {
//         number: 0,
//         color: null
//     }

//     myRef = null; // ref를 설정할 부분

//     // 생성자 메서드로 컴포넌트 생성
//     constructor(props){ 
//         super(props);
//         console.log('constructor');
//     }

//     // props로 받아 온 값을 state에 동기화
//     // 컴포넌트가 마운트될 때와 업데이트될 때 호출됨
//     static getDerivedStateFromProps(nextProps, prevState){ 
//         console.log('getDerivedStateFromProps');
//         if(nextProps.color !== prevState.color){
//             return { color: nextProps.color };
//         }
//         return null;
//     }

//     // 첫 렌더링을 다 마친 후 실행
//     componentDidMount(){
//         console.log('componentDidMount');
//     }

//     // 상태가 변경되었을 때 리렌더링을 시작할지 여부를 지정, 반환값 : true, false
//     shouldComponentUpdate(nextProps, nextState){
//         console.log('shouldComponentUpdate', nextProps, nextState);
//         // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
//         return nextState.number % 10 !== 4;
//     }

//     // 컴포넌트를 DOM에서 제거할 때 실행
//     componentWillUnmount(){
//         console.log('componentWillUnmount');
//     }

//     handleClick = () => {
//         this.setState({
//             number: this.state.number + 1
//         })
//     }

//     // render에서 만들어진 결과물이 브라우저에 실제로 반역되기 직전에 호출
//     // componentDidUpdate의 세 번째 파라미터인 snapshot 값으로 전달받을 수 있음, 업데이트하기 직전의 값을 참고할 일이 있을 때 활용
//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log('getSnapshotBeforeUpdate');
//         if(prevProps.color !== this.props.color){
//             return this.myRef.style.color;
//         }
//         return null;
//     }

//     // 리렌더링을 완료한 후 실행
//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log('componentDidUpdate', prevProps, prevState);
//         if(snapshot){
//             console.log('업데이트되기 직전 색상: ', snapshot);
//         }
//     }
    
//     // componentDidCate
//     // 컴포넌트 렌더링 도중에 에러가 발생했을 때 app이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해 줌
//     // 사용법
//     // componenntDidCatch(error, info){
//     // this.setState({
//     // error: true   
//     //});
//     // console.log({error, info});
//     //}


//     render(){
//         console.log('render');
//         console.log(this.state);
//         const style = {
//             color: this.props.color
//         };

//         return(
//             <div>
//                 <h1 style={style} ref={ref => this.myRef = ref}>
//                     {this.state.number}
//                 </h1>
//                 <p>color: {this.state.color}</p>
//                 <button onClick={this.handleClick}>
//                     더하기
//                 </button>
//             </div>
//         );
//     }
// }

/* 7.3.3 에러 잡아내기 */
class LifeCycleSample extends Component{
    state = {
        number: 0,
        color: null
    }

    myRef = null; // ref를 설정할 부분

    // 생성자 메서드로 컴포넌트 생성
    constructor(props){ 
        super(props);
        console.log('constructor');
    }

    // props로 받아 온 값을 state에 동기화
    // 컴포넌트가 마운트될 때와 업데이트될 때 호출됨
    static getDerivedStateFromProps(nextProps, prevState){ 
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return { color: nextProps.color };
        }
        return null;
    }

    // 첫 렌더링을 다 마친 후 실행
    componentDidMount(){
        console.log('componentDidMount');
    }

    // 상태가 변경되었을 때 리렌더링을 시작할지 여부를 지정, 반환값 : true, false
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트를 DOM에서 제거할 때 실행
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    // render에서 만들어진 결과물이 브라우저에 실제로 반역되기 직전에 호출
    // componentDidUpdate의 세 번째 파라미터인 snapshot 값으로 전달받을 수 있음, 업데이트하기 직전의 값을 참고할 일이 있을 때 활용
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링을 완료한 후 실행
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }
    
    // componentDidCate
    // 컴포넌트 렌더링 도중에 에러가 발생했을 때 app이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 해 줌
    // 사용법
    // componenntDidCatch(error, info){
    // this.setState({
    // error: true   
    //});
    // console.log({error, info});
    //}


    render(){
        console.log('render');
        console.log(this.state);
        const style = {
            color: this.props.color
        };

        return(
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}
export default LifeCycleSample;