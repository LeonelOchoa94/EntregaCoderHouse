import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css';
import { Link } from 'react-router-dom';

export const ItemContainer = ({ name, price, photo, id }) => {
  const [count, setCount] = useState(0);

  const handleLessCounts = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  };

  return (
    <Card
      sx={{
        width: 300,
        margin: '2rem',
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia component='img' alt={name} height='140' image={photo} />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography className='flexStyles' gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/item/${id}`}>
          <Button size='small'>Ver más</Button>
        </Link>
        <Button size='small' onClick={handleLessCounts}>
          -
        </Button>
        <Typography gutterBottom variant='h5' component='div'>
          {count}
        </Typography>
        <Button onClick={() => setCount(count + 1)} size='small'>
          +
        </Button>
      </CardActions>
    </Card>
  );
};
