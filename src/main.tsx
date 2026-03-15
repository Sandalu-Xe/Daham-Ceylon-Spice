import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent some libraries from trying to polyfill fetch if it's already a getter
if (typeof window !== 'undefined') {
  try {
    const originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get: () => originalFetch,
      set: () => {
        console.warn('Prevented overwriting window.fetch');
      }
    });
  } catch (e) {
    console.error('Failed to redefine window.fetch', e);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
