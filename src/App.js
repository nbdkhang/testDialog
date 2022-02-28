import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Collapse from '@mui/material/Collapse';
import "./App.css";


function App() {
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenSuccess = () => {
    setOpenSuccess(true);
  };
  const handleSubmit = () => {
    handleOpenSuccess();
    handleClose();
    console.log(username);
    console.log(email);
  };

  return (
    <div className="App">
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <TextField
            className="input"
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="input"
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>


      <Collapse in={openSuccess}>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </Collapse>
    </div>
  );
}

export default App;
