import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddPostModal({addPost}) {
  const [open, setOpen] = React.useState(false);
  const[title,setTitle] = React.useState("");
  const[image,setImage] = React.useState("");
  const[content,setContent] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button sx={{
          backgroundImage:"linear-gradient(to bottom, rgb(28, 149, 255),rgb(61, 148, 148),rgb(73, 163, 73))",
          color:"white",
          fontWeight:"bold",
          padding:"2%"
          }}
          variant="h5"
          onClick={handleClickOpen}>
        Add New Post
      </Button>
      <Dialog 
      open={open} onClose={handleClose}>
        <DialogTitle sx={{backgroundColor: "rgb(245, 245, 245)"}}>Form to Add Post</DialogTitle>
        <DialogContent sx={{backgroundColor: "rgb(245, 245, 245)"}}>
          <DialogContentText>
            Please fill all the fields.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title/Heading"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="image"
            label="Image URL"
            type="text"
            fullWidth
            variant="standard"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="Post Content"
            type="text"
            fullWidth
            multiline
            rows={6}
            variant="standard"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{backgroundColor: "rgb(245, 245, 245)"}}>
          <Button sx={{
          backgroundImage:"linear-gradient(to bottom, rgb(28, 149, 255),rgb(61, 148, 148),rgb(73, 163, 73))",
          color:"white",
          fontWeight:"bold",
          padding:"2%"
          }} onClick={handleClose}>Cancel</Button>
          <Button sx={{
          backgroundImage:"linear-gradient(to bottom, rgb(28, 149, 255),rgb(61, 148, 148),rgb(73, 163, 73))",
          color:"white",
          fontWeight:"bold",
          padding:"2%"
          }} onClick={()=>addPost({title,image,content})}>ADD POST</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}