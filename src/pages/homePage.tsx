import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient;

function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-light">
            Hello world! - HOME
          </h1>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default HomePage;
