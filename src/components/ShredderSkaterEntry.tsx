import ShredderForm from "./ShredderForm";
import { useState } from 'react';
import { ShredForm } from '../types';
import { defaultFormData, YOUTUBE_DATA_API_KEY } from "../constants";
import { useQueries } from "react-query";
import axios from "axios";

type State = 'all' | 'open' | 'done'

const SEARCH_CONFIG = {
  headers: {
    Authorization: 'Bearer ' + ,
    Accept: 'application/json'
  }
};

const toYoutubeAPIUrl = (searchInput: string) => {
  return `https://www.googleapis.com/youtube/v3/search?part=${searchInput}&key=${YOUTUBE_DATA_API_KEY}`;
};

const fetchSkaterVideoData = async (searchInput: string): Promise<Object> => {
  const response = await axios.get(toYoutubeAPIUrl(searchInput), SEARCH_CONFIG);
  return response.data;
};

const toHasSkatersToSearch = (skaters: ShredForm) => !!Object.values(skaters).filter(i => i).length;

export const ShredderSkaterEntry = () => {
  const [skatersToSearch, setSkatersToSearch ] = useState<ShredForm>(defaultFormData);

  const userQueries = useQueries(
    Object.values(skatersToSearch).map((skaterSearchString: string) => {
      return {
        queryKey: ['skater', skaterSearchString],
        queryFn: () => fetchSkaterVideoData(skaterSearchString),
        enabled: !!toHasSkatersToSearch(skatersToSearch),
      }
    })
  );

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