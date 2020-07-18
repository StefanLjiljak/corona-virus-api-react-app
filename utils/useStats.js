import { useState, useEffect } from 'react';

const useStats = (url) => {
  const [stats, setStats] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.error(err));
      setStats(data);
    };
    fetchData();
  }, [url]);
  return stats;
};

export default useStats;
