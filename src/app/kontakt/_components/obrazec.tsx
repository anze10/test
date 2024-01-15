"use client"
import React, { useState } from 'react';
import { Box, TextField, Button, Snackbar, Alert, Rating, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009336',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
  },
});

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // ... existing logic ...

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component="form"
            noValidate
            sx={{
              mt: 1,
              width: '100%', // Adjust width as needed
            }}
          >
            <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
              Feedback Form
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="feedback"
              label="Feedback"
              id="feedback"
              multiline
              rows={4}
            />
            <Rating
              name="feedback-rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={600}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            Feedback submitted successfully!
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default FeedbackForm;
