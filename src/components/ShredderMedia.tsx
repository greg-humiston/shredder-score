
const ShredVideoPanel= (props: { label: string }) => {
  const { label } = props;
  return (
    <div>
      <span>{label}</span>
      <div>{/* embedded player here */}</div>
    </div>
  );
};

type YoutubeVideoThumbnail = {
  height: number,
  url: string,
  width: number
};

type YoutubeVideoThumbnailSize = {
  high: YoutubeVideoThumbnail
};

type YoutubeVideoSnippet = {
  title: string,
  thumnails: YoutubeVideoThumbnailSize
};

type YoutubeVideoObject = {
  snippet: YoutubeVideoSnippet
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
          videoList.map((videoData: YoutubeVideoObject, index: number) => {
            const { 
              snippet: { 
                title, 
                thumnails: {
                  high: {
                    height,
                    width,
                    url
                  } = {}
                } = {}
              } = {}
            } = videoData;
            /**
             * 
             * shredderList
             */

            return (
              <ShredVideoPanel
                label={`Video ${index + 1}: ${title}`}
                key={title}
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
                key={shredder.name}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default ShredderMedia;