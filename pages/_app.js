import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // This will suppress the hydration warning in the console
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0].includes('Warning: Expected server HTML to contain a matching')) return;
      if (args[0].includes('Warning: Did not expect server HTML to contain a')) return;
      originalError.call(console, ...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
