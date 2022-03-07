import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { keyframes } from '@mui/system';
import spinner from '../.././assets/spinner.png';

const CustomCard = (props) => {
  const [src, setSrc] = useState('https://ipfs.io/ipfs/QmR9wMFvhrpZA4Tvz3ERn6ZNvun36gU1KeqpW6YxbyULAj/rig'+ props.index +'.png');
  const [url, setUrl] = useState();
  const [fallBackSrc, setFallBackSrc] = useState('https://via.placeholder.com/295x295?text=Image+Not+Available');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const onImageLoaded = () => {
    setLoaded(true);
  };
  const onImageError = () => {
    setError(true);
  };
  const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
  const spinning = `${spin} infinite 1s linear`
  const cardStyle = {
    show: {
      visibility: 'visible'
    },
    hide: {
      visibility: 'hidden'
    },
    content: {
      textAlight: 'right'
    }
  };

  let imgSrc = !loaded ? spinner : url;
  let spinStyle = !loaded ? spinning : 'none';
  let myCardStyle = !loaded ? cardStyle.hide : cardStyle.show
  let height = !loaded ? '0' : '140';

  const fetchImg = async (source) => {
    let response = await fetch(source)
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.blob();
  }

  useEffect(() => {
    (async () => {
      fetchImg(src)
        .then(blob => {
          let imgUrl = URL.createObjectURL(blob);
          setLoaded(true);
          setUrl(imgUrl);
        })
        .catch(e => console.log(e));
    })();
  }, []);

  return (
    <Card sx={{width: '100%', display: 'flex'}}>
      {(!loaded &&
        <CardMedia sx={{
            animation: spinning
          }}
          component="img"
          sx={{ width: 140, height: 140 }}
          image={spinner}
        />
      )}
      <CardMedia
        style={myCardStyle}
        onLoad={onImageLoaded}
        onError={onImageError}
        component="img"
        sx={{ width: 140, height: 140 }}
        image={url}
      />
    <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" style={cardStyle.content}>
          Rig # {props.index}
        </Typography>
        <Typography variant="subtitle2"  component="div" style={cardStyle.content}>
          No Owner Yet
        </Typography>
      </CardContent>
    </Card>
  )
};

export default CustomCard;
