import {
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux/feature/searchSlice";
import { featchGif, featchPhotos, featchVideos } from "../api/mediaApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ResultGrid = () => {

  const dispatch = useDispatch();

  const { query, results, error, activeTab, loading } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    const getData = async () => {
      let data;
      if (activeTab == "photos") {
        let responce = await featchPhotos(query);
        data = responce.results.map((item)=>({
          id:item.id,
          type:'photo',
          title:item.alt_description,
          thumbnail:item.urls.small,
          src:item.urls.full
        }))
      }
      if (activeTab == "videos") {
        let responce = await featchVideos(query);
        data = responce.videos.map((item)=>({
          id:item.id,
          type:'video',
          title:item.user.name || "video",
          thumbnail:item.image,
          src:item.video_files[0].link
        }))
      }
      if (activeTab == "gif") {
        let responces = await featchGif(query);
        data = responces.data.results.map((item)=>({
          id:item.id,
          type:'gif',
          title:item.title || "gif",
          thumbnail:item.media_formats.tinygif.url,
          src:item.media_formats.gif.url
        }))
      }
      
      dispatch(setResults(data));
      
    };

    getData();
  }, [query, activeTab]);

  return <div></div>;
};

export default ResultGrid;
