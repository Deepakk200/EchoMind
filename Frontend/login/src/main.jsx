import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

const theme = createTheme({typography :{
  fontFamily: "Roboto Slab,serif",
  allVariants: {color: "white"}
},
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><BrowserRouter >
     <ThemeProvider theme ={theme} >
     <App />
     </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
    
  </React.StrictMode>,
)
