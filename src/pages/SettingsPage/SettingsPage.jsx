import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = (props) => {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <h1>Settings Page</h1>
      <h2>Difficulty</h2>
      <button className='btn btn-default' onClick={()=>props.handleSetDifficulty('Easy')}> Easy </button>
      <button className='btn btn-default' onClick={()=>props.handleSetDifficulty('Medium')}> Medium </button>
      <button className='btn btn-default'onClick={()=>props.handleSetDifficulty('Hard')}> Hard </button>
    </div>
  );
};

export default SettingsPage;