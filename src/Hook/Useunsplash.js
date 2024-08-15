import { useState, useEffect } from 'react';

const useUnsplashImages = (keywords) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      for (const keyword of keywords) {
        try {
          const url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();

          if (result.results.length > 0) {
            setImages(result.results);
            break; // Exit the loop if images are found
          }
        } catch (err) {
          setError(`Error fetching images for ${keyword}: ${err.message}`);
        }
      }

      setLoading(false);
    };

    if (keywords.length > 0) {
      fetchImages();
    }
  }, [keywords, accessKey]);

  return { images, loading, error };
};

export default useUnsplashImages;
