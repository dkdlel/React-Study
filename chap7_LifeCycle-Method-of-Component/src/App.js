import React, { Component } from 'react';
import { render } from 'react-dom';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

/* 7.2.3 getDerivedStateFromProps 메서드 => render하기전에 선언 */
// static getDerivedStateFromProps(nextProps, prevState){
//   if(nextProps.value !== prevState.value){
//     return { value: nextProps.value };
//   }
//   return null;
// }

/* 7.3.2 App 컴포넌트에서 예제 컴포넌트 사용 */
// 랜덤 색상을 생성
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}


export default App;
