import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        setData(res.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
        setError(error)
      }
    }
    getData();
  }, [url]);

  return {data, isLoading, error}
};
