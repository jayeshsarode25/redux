import {
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux/feature/searchSlice";
import { featchGif, featchPhotos, featchVideos } from "../api/mediaApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultCart from "./ResultCart";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, results, error, activeTab, loading } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());

        let data = [];

        if (activeTab == "photos") {
          let responce = await featchPhotos(query);
          data = responce.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab == "videos") {
          let responce = await featchVideos(query);
          data = responce.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab == "gif") {
          let responces = await featchGif(query);
          data = responces.data.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.mesaage));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-center w-full flex-wrap gap-8 px-10 overflow-auto ">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCart item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
