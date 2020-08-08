import React from 'react';
import Layout from './components/Layout/Layout'
// import './App.css';
import styles from './App.module.css'


function App() {
  return (
    <div className = {styles.container}>
    <React.Fragment >
      <React.StrictMode>
        <Layout/>
        </React.StrictMode>
      </React.Fragment>
      </div>
  );
}

export default App;
