import { useState } from 'react'
import './app.scss'
import Router from './router'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [count, setCount] = useState(0)

  return <Router></Router>
}

export default App


