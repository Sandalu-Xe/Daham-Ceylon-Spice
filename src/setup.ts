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

if (typeof globalThis !== 'undefined') {
  try {
    const originalGlobalFetch = globalThis.fetch;
    Object.defineProperty(globalThis, 'fetch', {
      configurable: true,
      enumerable: true,
      get: () => originalGlobalFetch,
      set: () => {
        console.warn('Prevented overwriting globalThis.fetch');
      }
    });
  } catch (e) {
    console.error('Failed to redefine globalThis.fetch', e);
  }
}
