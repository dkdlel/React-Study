import React from "react";
import styles from "./Address.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import { BiSearch } from "react-icons/bi";
// import AddrItemList from 'components/address/AddrItemList';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import AddrItem from './AddrItem';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    fontSize: 10,
  },
  title: {
    textAlign: "center",
    width: "100%",
    fontSize: 18,
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 0,
    flex: "0 0 auto",
  },
  close: {
    position: "absolute",
    left: 0,
    zIndex: 2100,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddressModal = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.close}
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              배달받을 주소
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.content}>
          <div className={styles["container"]}>
            <div className={styles['input-box']}>
              <input
                className={styles["modal-input"]}
                type="text"
                value={props.searchAddr}
                placeholder="예) 배민동 배민아파트"
                onChange={props.onChangeAddr}
                onKeyPress={props.handleKeyPress}
              ></input>
            </div>
            <div className={styles['search']}>
            <BiSearch/>
            </div>
            <div>
              <AddrItem/>
              <AddrItem/>
              <AddrItem/>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddressModal;
