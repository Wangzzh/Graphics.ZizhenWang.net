import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GraphicsNav } from './components/GraphicsNav';
import { mainTheme } from './themes/mainTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/system';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);