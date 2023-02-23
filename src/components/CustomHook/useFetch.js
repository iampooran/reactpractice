import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");

  const fetchData = useCallback(async () => {
    const response = await axios.get(url);
    setData(response.data);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};

export default useFetch;
