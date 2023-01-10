import React from 'react'
import ReactDOM from 'react-dom/client'
import ShredderScoreApplication from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

/** do some initial setup before rendering */

const IS_PROD = false;

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ShredderScoreApplication />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
);
