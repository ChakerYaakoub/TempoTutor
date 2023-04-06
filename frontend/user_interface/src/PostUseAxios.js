import { useEffect, useState } from "react";

import axios from "axios";
const PostUseAxios = (url, headers) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .post(url, data, headers)
      .then((response) => {
        setData(response.data);
        console.log(setData);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};

export default PostUseAxios;
