import React, {useState, useEffect} from 'react';

const Image = (props) => {
  const { alt, height, width} = props;
  const src = 'https://ipfs.io/ipfs/QmR9wMFvhrpZA4Tvz3ERn6ZNvun36gU1KeqpW6YxbyULAj/rig'+ props.index +'.png'
  const [url, setUrl] = useState('https://via.placeholder.com/295x295?text=Image+Loading');
  const [unMounted, setUnmounted] = useState(false);

  const fetchImg = async (source) => {
    let response = await fetch(source)
    if (response.status !== 200) {
      setUrl('https://via.placeholder.com/295x295?text=IPFS+Loading+Error+Reload+Image');
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.blob();
  }

  useEffect(() => {
    fetchImg(src)
      .then(blob => {
        let imgUrl = URL.createObjectURL(blob);
        if (!unMounted) {
          setUrl(imgUrl);
        }
      })
      .catch(e => console.log(e));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      setUnmounted(true);
    }
  }, []);

  return (
    <img
      alt={alt}
      crossorgin='anonymous'
      src={url}
      height={height}
      width={width}
    />
  )
}

export default Image;
