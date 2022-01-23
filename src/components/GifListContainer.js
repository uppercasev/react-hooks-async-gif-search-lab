import { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [gifsToDisplay, setGifsToDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState("YOUR QUERY HERE");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=s81D9dthIMVo45L6VMXH2vVx6SwrPUcm&rating=g`
    )
      .then((r) => r.json())
      .then((data) => {
        setGifsToDisplay(data.data.slice(0, 3));
      });
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.elements.search.value);
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <GifList gifList={gifsToDisplay} />
      <GifSearch handleSubmit={handleSubmit}/>
    </div>
  );
}
