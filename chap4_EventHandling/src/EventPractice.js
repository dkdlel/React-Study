import React, { Component, useState } from 'react';
import { render } from 'react-dom';

/* 4.2.1.1 컴포먼트 생성 */
// class EventPractice extends Component{
//     render(){
//         return(
//             <div>  
//                 <h1>이벤트 연습</h1>
//             </div>
//         );
//     }
// }

/* 4.2.2.1 onChange 이벤트 설정 */
// class EventPractice extends Component{
//     render(){
//         return(
//             <div>  
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     onChange={
//                         (e) => {
//                             //console.log(e);
//                             console.log(e.target.value);
//                         }
//                     }
//                 />
//             </div>
//         );
//     }
// }

/* 4.2.2.2 state에 input 값 담기 */
// class EventPractice extends Component{

//     state = {
//         message: ''
//     }

//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={
//                         (e) => {
//                             this.setState({
//                                 message: e.target.value
//                             });
//                         }
//                     }
//                 />
//             </div>
//         );
//     }
// }

/* 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정 */
// class EventPractice extends Component{

//     state = {
//         message: ''
//     }

//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={(e) => {
//                         this.setState({
//                             message: e.target.value
//                         });
//                     }}
//                 />
//                 <button onClick={() => {
//                     alert(this.state.message);
//                     this.setState({
//                         message:''
//                     });
//                 }}>확인</button>
//             </div>
//         );
//     }
// }

// 클래스 컴포넌트를 함수형 컴포넌트로
// const EventPractice = () => {
//     const [message, setMessage] = useState({
//         message: ''
//     });

//     const onMessage = () => {
//         alert(message.message);
//         setMessage({
//             message: ''
//         });
//     }
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={message.message}
//                 onChange={(e) => {
//                     setMessage({
//                         message: e.target.value
//                     });
//                 }}
//             />
//             <button onClick={onMessage}>확인</button>
//         </div>
//     );
// }

/* 4.2.3.1 임의 메서드 만들기 -> 기본방식 */
// class EventPractice extends Component{

//     state = {
//         message: ''
//     }

//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleChange(e){
//         this.setState({
//             message: e.target.value
//         });
//     }

//     handleClick(){
//         alert(this.state.message);
//         this.setState({
//             message: ''
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

/* 4.2.3.2 Property Intializer Syntax를 사용한 메서드 작성 */
// class EventPractice extends Component{
//     state={
//         message: ''
//     }

//     handleChange = (e) =>{
//         this.setState({
//             message: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.message);
//         this.setState({
//             message:''
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// 함수형 컴포넌트
// const EventPractice = () => {

//     const[message,setMessage] = useState({
//         message:''
//     });

//     const handleChange = (e) =>{
//         setMessage({
//             message: e.target.value
//         });
//     }

//     const handleClick = () =>{
//         alert(message.message);
//         setMessage({
//             message:''
//         });
//     }

//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={message.message}
//                 onChange={handleChange}
//             />
//             <button onClick={handleClick}>확인</button>
//         </div >
//     );
// }

/* 4.2.4 input 여러개 다루기 */
// class EventPractice extends Component{

//     state={
//         username:'',
//         message:''
//     }

//     handleChange = (e) => {
//         this.setState({
//             /*----------------------------------------- [] 질문 ---------------------------------------*/
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ": " + this.state.message);
//         this.setState({
//             username:'',
//             message:''
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// 함수형 컴포넌트
// const EventPractice = () => {

//     const [username, setUsername] = useState({
//         username: ''
//     });

//     const [message, setMessage] = useState({
//         message: ''
//     });

//     const UsernameChange = (e) => {
//         setUsername({
//             username: e.target.value
//         });
//     }

//     const MessageChange = (e) => {
//         setMessage({
//             message: e.target.value
//         });
//     }

//     const handleClick = () => {
//         alert(username.username + ": " + message.message);
//         setUsername({ username:'' });
//         setMessage({ message:'' });
//     }


//     return(
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={username.username}
//                 onChange={UsernameChange}
//             />
//              <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={message.message}
//                 onChange={MessageChange}
//             />
//             <button onClick={handleClick}>확인</button>
//         </div>
//     );
// }

/* 4.2.5 onKeyPress 이벤트 핸들링 */
// class EventPractice extends Component{

//     state={
//         username:'',
//         message:''
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ": " + this.state.message);
//         this.setState({
//             username:'',
//             message:''
//         });
//     }

//     handleKeyPress = (e) => {
//         if(e.key === 'Enter'){
//             this.handleClick();
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input 
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input 
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// 함수형 컴포넌트
// const EventPractice = () => {

//     const [username, setUsername] = useState({
//         username: ''
//     });

//     const [message, setMessage] = useState({
//         message: ''
//     });

//     const UsernameChange = (e) => {
//         setUsername({
//             username: e.target.value
//         });
//     };

//     const MessageChange = (e) => {
//         setMessage({
//             message: e.target.value
//         });
//     };

//     const handleClick = () => {
//         alert(username.username + ": " + message.message);
//         setUsername({ username: '' });
//         setMessage({ message: '' });
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleClick();
//         }
//     };

//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={username.username}
//                 onChange={UsernameChange}
//             />
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={message.message}
//                 onChange={MessageChange}
//                 onKeyPress={handleKeyPress}
//             />
//             <button onClick={handleClick}>확인</button>
//         </div>
//     );
// }

/* 4.3 함수형 컴포넌트로 구현해 보기 */
// const EventPractice = () => {
//     const [username, setUsername] = useState('');
//     const [message, setMessage] = useState('');
//     const onChangeUsername = e => setUsername(e.target.value);
//     const onChangeMessage = e => setMessage(e.target.value);
//     const onClick = () => {
//         alert(username + ": " + message);
//         setUsername('');
//         setMessage('');
//     };
//     const onKeyPress = e =>{
//         if(e.key === 'Enter'){
//             onClick();
//         }
//     };
//     return(
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={username}
//                 onChange={onChangeUsername}
//             />
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={message}
//                 onChange={onChangeMessage}
//                 onKeyPress={onKeyPress}
//             />
//             <button onClick={onClick}>확인</button>
//         </div>
//     );
// }

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username , message} = form;
    const onChange = e => {
        const nextForm = {
            ...form, [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e =>{
        if(e.key === 'Enter'){
            onClick();
        }
    };

    const k2 = "key2";
    const v2 = "value2";
    const object = {
        key1: "value1",
        k2: v2
    };

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;