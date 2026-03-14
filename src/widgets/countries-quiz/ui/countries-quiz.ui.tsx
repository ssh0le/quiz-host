import React from 'react';

const CountriesTestApp = React.lazy(() =>
  import('remote1/App')
    .catch((error) => {
      console.warn(
        'Failed to load remote1/App, falling back to local app:',
        error
      );
      return import('./app/app').catch((error) => {
        throw error;
      });
    })
    .catch((error) => {
      console.error('Failed to load both remote and local app:', error);
      // Return a simple fallback component
      return Promise.resolve({
        default: () => <div>App failed to load</div>,
      });
    })
);

export const CountriesQuiz = () => {
  return (
    <div className="p-8">
      <CountriesTestApp />
    </div>
  );
};
