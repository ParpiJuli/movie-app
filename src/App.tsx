import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import logo from './logo.svg';
import './App.css';
import { SampleComponent } from './components/sampleComponent';

const queryClient = new QueryClient;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-3xl font-light">
            Hello world!
          </h1>
          <SampleComponent />
          <p className='text-orange text-3xl'>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
