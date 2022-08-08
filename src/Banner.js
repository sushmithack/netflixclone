import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header>
      {/*title */}
      {/* div that contains 2 buttons play and add to list */}
      {/* discription*/}
    </header>
  );
}

export default Banner;
