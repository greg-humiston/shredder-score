
export const ShredderMedia = () => {
  return (
    <div className="shredder-media-wrapper">
      <span>Shredder Score Videos</span>
      <div>
        <span>The following videos were used to determine this score:</span>
      </div>
      <div>
        <div>
          <span>{`Skater 1: `}</span>
          <span>{`Overall Score: `}</span>
        </div>
        <div>
          <span>Videos:</span>
          <div>
            <span>{`Video 1:`}</span>
            <span>{`Score:`}</span>
            <div>{/* embedded player here */}</div>
          </div>
          <div>
            <span>{`Video 2:`}</span>
            <span>{`Score:`}</span>
            <div>{/* embedded player here */}</div>
          </div>
          <div>
            <span>{`Video 3:`}</span>
            <span>{`Score:`}</span>
            <div>{/* embedded player here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShredderMedia;