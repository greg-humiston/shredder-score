

const ShredderScoreLabel = (props: {position: number, name: string, score: number}) => {
  const { position, name, score } = props;
  return (
    <div>
      <span>{`Skater ${position}: ${name} , score: ${score} points`}</span>
    </div>
  );
};

export const ShredderScoreBoard = (props: { shredderList: any[] }) => {
  const { shredderList = []} = props;

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
        {
          shredderList.map((shredderData , index) => {
            return (
              <ShredderScoreLabel
                {...shredderData}
                position={index + 1}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default ShredderScoreBoard;