import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { mainTheme } from './themes/mainTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={mainTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);