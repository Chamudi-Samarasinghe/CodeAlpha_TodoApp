import React from 'react';
import TodoList from './components/TodoList';
import { CssBaseline, Container, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container component="main" maxWidth="xs">
          <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '15px', sizeadjust: '100%', backgroundImage:'linear-gradient(to right,#7CB9E8,#6A5ACD)' }}>
            <Typography variant="h5" style={{fontFamily: 'Georgia, serif'}}>TODO-LIST</Typography>
            <TodoList />
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

