import ShredderForm from "./ShredderForm";
import { useEffect, useState } from 'react';
import { ShredForm } from '../types';
import { defaultFormData, YOUTUBE_DATA_API_KEY } from "../constants";
import { useQueries } from "react-query";
import axios from "axios";
import MOCK_YOUTUBE_SEARCH_RESPONSE from "../assets/mockData";

type State = 'all' | 'open' | 'done'

const SEARCH_CONFIG = {
  headers: {
    Accept: 'application/json'
  }
};

const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?maxResults=3&type=videos&part=snippet&key=${YOUTUBE_DATA_API_KEY}&q=`;

const toYoutubeAPIUrl = (searchInput: string) => {
  return `${SEARCH_URL}${searchInput}`;
};

const fetchSkaterVideoData = async (searchInput: string): Promise<Object> => {
  const response = await axios.get(toYoutubeAPIUrl(searchInput), SEARCH_CONFIG);
  return response.data;
};

const toHasSkatersToSearch = (skaters: ShredForm) => !!Object.values(skaters).filter(i => i).length;

const pluck = (key: string): any => (val: any): any => val[key];
const toData = (shredObject: any): any => {
  const { data } = shredObject;
  return data;
};

export const ShredderSkaterEntry = (props: { onSubmit: Function, shredVideoData: any }) => {
  const { onSubmit= () => {}, shredVideoData } = props;
  const [skatersToSearch, setSkatersToSearch ] = useState<ShredForm>(defaultFormData);

  // const results = useQueries(
  //   Object.values(skatersToSearch).map((skaterSearchString: string) => {
  //     return {
  //       queryKey: ['skater', skaterSearchString],
  //       queryFn: () => fetchSkaterVideoData(skaterSearchString),
  //       enabled: !!toHasSkatersToSearch(skatersToSearch),
  //     }
  //   })
  // );
  const results: any[] = MOCK_YOUTUBE_SEARCH_RESPONSE;
    useEffect(() => {
      if (!shredVideoData) {
        const searchResultList = Object.values(skatersToSearch);
        const mappedResults = results.map((val, index) => {
          return { 
            videoList: val.items,
            name: searchResultList[index]
          };
        });

        onSubmit(mappedResults);
      }
    }, [ shredVideoData, results ]);

  return (
    <div className="shredder-skater-entry">
     <span>Shredder Score</span>
     <div>
        <span>Pick 5 skateboarders to see if you can beat the top shred score</span>
     </div>
     <div>
        <ShredderForm onSubmit={(formData: ShredForm) => {
          setSkatersToSearch(formData);
        }}/>
     </div>
    </div>
  )
};

export default ShredderSkaterEntry;