export const ShredderScoreBoard = () => {
  return (
    <div className="shredder-score-board">
      <span>Shredder Score</span>
      <div>
        <span>{`You placed x out of y!`}</span>
      </div>
      <div>
        <span>{`You scored 0 points by selecting the following skaters:`}</span>
      </div>
      <div>
        <span>{`Skater 1: ____ , score: `}</span>
      </div>
      <div>
        <span>{`Skater 2: ____ , score: `}</span>
      </div>
      <div>
        <span>{`Skater 3: ____ , score: `}</span>
      </div>
      <div>
        <span>{`Skater 4: ____ , score: `}</span>
      </div>
      <div>
        <span>{`Skater 5: ____ , score: `}</span>
      </div>
    </div>
  );
};

export default ShredderScoreBoard;