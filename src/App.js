import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { initGA, logPageView } from './utils/analytics';
import AppRouter from './AppRouter';

function App() {
    useEffect(() => {
        initGA();
        logPageView();
    }, []);
    return (
        <HelmetProvider>
            <AppRouter />
        </HelmetProvider>
    );
}

export default App;
