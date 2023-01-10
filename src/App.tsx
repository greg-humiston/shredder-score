import { ChangeEventHandler, useState } from 'react';
import reactLogo from './assets/react.svg';
import Spinner from './assets/spinner.svg';
import './App.css';
import ShredderSkaterEntry from './components/ShredderSkaterEntry';
import ShredderMedia from './components/ShredderMedia';


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
  const [shredVideoData, setShredVideoData] = useState();

  return (
    <div className="shredder-app-container">
      {
        !shredVideoData ? 
        (
          <ShredderSkaterEntry
            shredVideoData={shredVideoData}
            onSubmit={setShredVideoData}
          />
        ) : null
      }
      {
        shredVideoData ?
        (
          <ShredderMedia
            shredderList={shredVideoData}
          />
        ) : null
      }
    </div>
  );
};

export default ShredderScoreApplication;
