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
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form to Add Post</DialogTitle>
        <DialogContent>
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
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>addPost({title,image,content})}>ADD POST</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}