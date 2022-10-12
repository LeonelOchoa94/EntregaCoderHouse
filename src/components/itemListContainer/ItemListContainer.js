import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ItemContainer } from '../itemContainer/ItemContainer';

export const products = [
  {
    id: 1,
    name: 'Fifa 23',
    price: 8999,
    category: 'games',
    photo: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/0515/MkbqF5veMFZnmQRtsbmQoNZT.png',
  },
  {
    id: 2,
    name: 'GTA V',
    price: 3500,
    category: 'games',
    photo:
      'https://media-rockstargames-com.akamaized.net/tina-uploads/posts/9k922a7212kao3/59a05cd4bc90a814ee52dceb30d70de2c1946953.jpg',
  },
  {
    id: 3,
    name: 'Call Of Duty: Modern Warfare III',
    price: 7300,
    category: 'games',
    photo: 'https://image.api.playstation.com/cdn/UP0002/CUSA15239_00/CpIKiv8qH20F6my7atxQIzW0zJ79WiB0.png',
  },
  {
    id: 4,
    name: 'The Sims 4',
    price: 4500,
    category: 'games',
    photo: 'https://as01.epimg.net/meristation/imagenes/2022/02/08/cover/192457741644351267.jpg',
  },
  {
    id: 5,
    name: 'Assassins Creed: Odyssey',
    price: 10999,
    category: 'games',
    photo:
      'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw77a3416f/images/large/5afda5f788a7e34d25b5012f.jpg?sw=341&sh=450&sm=fit',
  },
  {
    id: 6,
    name: 'Need for Speed: Heat',
    price: 7799,
    category: 'games',
    photo:
      'https://media.contentapi.ea.com/content/dam/need-for-speed/nfs-heat/images/2019/08/nsfh-hero-large-keyart-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
  },
  {
    id: 7,
    name: 'Tropico 6',
    price: 5400,
    category: 'games',
    photo: 'https://media.vandal.net/m/48831/tropico-6-20195171223334_1.jpg',
  },
  {
    id: 8,
    name: 'Age Of Empire I',
    price: 3299,
    category: 'games',
    photo: 'https://i.ytimg.com/vi/ADKHIJ-J4pc/maxresdefault.jpg',
  },
  {
    id: 9,
    name: 'Age Of Empire II',
    price: 3599,
    category: 'games',
    photo: 'https://cdn.akamai.steamstatic.com/steam/apps/813780/capsule_616x353.jpg?t=1655752709',
  },
  {
    id: 10,
    name: 'Age Of Empire III',
    price: 3899,
    category: 'games',
    photo: 'https://news.microsoft.com/wp-content/uploads/prod/sites/61/2020/10/AoE-III-Definitive-Edition.jpg',
  },
  {
    id: 11,
    name: 'Mouse Logitech M100',
    price: 1000,
    category: 'keyboards and mouse',
    photo:
      'http://d2r9epyceweg5n.cloudfront.net/stores/001/155/056/products/37971-1_11-25ee325ccd2d5baac816087511518584-640-0.jpg',
  },
  {
    id: 12,
    name: 'Mouse Logitech G903',
    price: 15399,
    category: 'keyboards and mouse',
    photo: 'https://www.xt-pc.com.ar/img/productos/Pics_Prod/MOU485.jpg',
  },
  {
    id: 13,
    name: 'Mouse Redragon G Pro',
    price: 5999,
    category: 'keyboards and mouse',
    photo: 'https://www.venex.com.ar/products_images/1643915198_cetro-2.png',
  },
  {
    id: 14,
    name: 'Teclado Mecanico HP HyperX Alloy',
    price: 13870,
    category: 'keyboards and mouse',
    photo: 'https://http2.mlstatic.com/D_NQ_NP_801654-MLA46544372771_062021-O.webp',
  },
  {
    id: 15,
    name: 'Teclado Mecanico Logitech G413 Carbon',
    price: 15470,
    category: 'keyboards and mouse',
    photo: 'https://s3-sa-east-1.amazonaws.com/saasargentina/PVJMOT0KR9C0YoQyBAxx/imagen',
  },
  {
    id: 16,
    name: 'Monitor Samsung 24" 75Hz',
    price: 18999,
    category: 'monitors',
    photo: 'https://mauricomputacion.com.ar/images/productos/22476.webp',
  },
  {
    id: 17,
    name: 'Monitor Gamer Curvo Samsung QHD 27" 165Hz',
    price: 27000,
    category: 'monitors',
    photo: 'https://samsungar.vtexassets.com/arquivos/ids/181938-800-auto?width=800&height=auto&aspect=true',
  },
];

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const productPromise = new Promise((resolve) => {
      resolve(products);
    });
    productPromise.then((res) => {
      JSON.stringify(res);
      setItems(res);
    });
  };

  return (
    <Container>
      <h1>{greeting}</h1>
      <h2>Productos del catalogo</h2>
      <div>
        {
          <Grid container spacing={3} columns={4}>
            {items.map((item) => (
              <ItemContainer key={item.id} name={item.name} price={item.price} photo={item.photo} id={item.id} />
            ))}
          </Grid>
        }
      </div>
    </Container>
  );
};
