import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './Redux/store'
import { ThemeProvider } from 'next-themes';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    </ThemeProvider>


)
