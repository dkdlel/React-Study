import React from 'react';

class CounterTest extends React.Component {
    state = { // 변수
        number: 0
    };
    onIncrease = () => {
        this.setState({ // 이 전에 쓴 함수형 컴포넌트에서 setId랑 같음!
            number: this.state.number + 1
        });
    };
    onDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    };

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.onDecrease}>-</button>
            </div>
        )
    }
};

export default CounterTest;