"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(event.target.value)) {
      setName(event.target.value);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle the submission to your server

    // Show thank you message
    setOpenSnackbar(true);

    // Reset form fields
    setName('');
    setEmail('');
    setFeedback('');

    // Redirect to main website or perform other actions as needed
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={name}
        onChange={handleNameChange}
        helperText="Please enter your name (no numbers allowed)"
      />
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address (Optional)"
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="feedback"
        label="Your Feedback"
        name="feedback"
        multiline
        rows={4}
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => window.open('/')}
      >
        Submit Feedback
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thanks for your feedback!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeedbackForm;
