
import { useEffect, useState } from "react";

import axios from "axios";
const useFetch = (url, headers) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url, headers)
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


// EX to use 


// const { id } = useParams();
// const { data, loading, error } = useFetch(
//   `http://localhost:3000/teachersScreen/data`
// );


// {loading && <Loadingpage />}
// {error && <ErrorDatapage />}

// {data && (
//   <>
//     <component  data={data} />

  
//   </>
// )}

export default useFetch;
