import React from 'react';
import { Image } from './index';

const ImageList = () => {
  return (
    <div>
      <h3>ImageList.jsx</h3>
      {[...Array(10).keys()].map(i => {
        return <Image src={`src${i}`} key={i.toString()} />
      })}
    </div>
  )
}

export default ImageList;
