import React, { useState } from 'react';
import Login from './Login';
import './App.scss'
import Alert from './components/Alert';
import { Backdrop } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Confirm from './components/Confirm';

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     position: 'fixed',
//     // width: 100%; height: 100%;
//     top: 0, right: 0, left: 0, bottom: 0,
//     background: '#000',
//     zIndex: 2000,
//     opacity: .3,
//   },
// }));

const App = () => {

  const [isAlert, setIsAlert] = useState(false);

  const onToggle = () => setIsAlert(!isAlert);
  const onClose = () => setIsAlert(false);

  return (
    <>
      <Login onToggle={onToggle} />
      <Backdrop open={isAlert} onClick={onClose}>
        <Alert onToggle={onToggle} />
      </Backdrop>
      {/* {isAlert && <Alert onToggle={onToggle} />}
      {/* <Confirm /> */}
    </>
  )
}

export default App;
