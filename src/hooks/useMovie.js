import { useState, useEffect } from "react";
const BASE_URL =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=2986436d21a4f5014be51d0000b9d709";
const useMovie = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(BASE_URL)
        .then((res) => res.json())
        .then((res) => {
          setData(res.results);
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { data, isLoading };
};
export default useMovie;
