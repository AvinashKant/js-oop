const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function fetchWithRetry(fn, retries = 5, delay = 1000, factor = 2) {
  let attempt = 0;

  while (attempt < retries) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      if (attempt === retries) throw err;
      const backoff = delay * Math.pow(factor, attempt - 1);
      console.warn(`Retry #${attempt} in ${backoff}ms`);
      await sleep(backoff);
    }
  }
}


import { useEffect, useState } from 'react';

function RetryComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApi = () =>
    fetch('https://api.example.com/data')
      .then(res => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
      });

  useEffect(() => {
    fetchWithRetry(fetchApi, 4, 1000)
      .then(setData)
      .catch(setError);
  }, []);

  if (error) return <p>❌ Error: {error.message}</p>;
  if (!data) return <p>⏳ Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
