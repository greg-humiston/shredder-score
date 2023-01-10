import { ChangeEventHandler, useState } from 'react';
import reactLogo from './assets/react.svg';
import Spinner from './assets/spinner.svg';
import './App.css';
import ShredderSkaterEntry from './components/ShredderSkaterEntry';


// TODO:
// - various sized skater moders (1 vs 3 vs 5)
// - location (east vs. west)
// - BATB
// - skateparks
// - skate shops

const ShredLoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div>
        <Spinner/>
      </div>
    </div>
  );
};


export const ShredderScoreApplication = () => {
  // TODO: integrate react router here

  return (
    <div className="shredder-app-container">
      <ShredderSkaterEntry/>
    </div>
  );
};

export default ShredderScoreApplication;
