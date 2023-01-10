
const ShredVideoPanel= (props: { label: string }) => {
  const { label } = props;
  return (
    <div>
      <span>{label}</span>
      <div>{/* embedded player here */}</div>
    </div>
  );
};

const ShredderVideoList = (
  props: { 
    position: number, 
    shredder: { videoList: any[], name: string, score: number } 
  }
) => {
  const { position, shredder } = props;
  const { videoList, name, score } = shredder;

  return (
    <div> 
      <div>
        <span>{`Skater ${position}: ${name}`}</span>
        <span>{`Score: ${score}`}</span>
      </div>
      <div>
        {
          videoList.map((videoData: { title: string }, index: number) => {
            const { title } = videoData;
            return (
              <ShredVideoPanel
                label={`Video ${index + 1}: ${title}`}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export const ShredderMedia = (props: { shredderList: [] }) => {
  const { shredderList = [] } = props;

  return (
    <div className="shredder-media-wrapper">
      <span>Shredder Score Videos</span>
      <div>
        <span>The following videos were used to determine this score:</span>
      </div>
      <div>
        {
          shredderList.map((shredder: { videoList: any[], name: string, score: number }, index: number) => {
            return (
              <ShredderVideoList
                position={index + 1}
                shredder={shredder}
                key={name}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default ShredderMedia;