import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {store} from './app/store'
import { Provider} from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from './features/api/apiSlice'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
    <Provider  store={store}>
    <CssBaseline />
     <App />
    </Provider>
    </ApiProvider>
    
  </React.StrictMode>,
)
