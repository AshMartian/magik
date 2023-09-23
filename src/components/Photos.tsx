import React from "react";
import ReactDOM from "react-dom";
import { SimpleGrid } from '@mantine/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type glitchImage = {
  original: string;
  thumbnail: string;
  index: number;
}

// Load from https://photos.app.goo.gl/rT8hEC3uZyzJfJ718
const id = 'rT8hEC3uZyzJfJ718';

const ImagesGallery = () => {
  const [images, setImages] = React.useState<glitchImage[]>([])

  React.useEffect(() => {
    let shouldCancel = false
    const call = async () => {
      const response = await fetch(
        `https://6u5qbqjwo5tfqljjakbufwj6ou0luqds.lambda-url.us-east-1.on.aws/`
      );

      const data = await response.json();

      if (!shouldCancel && data && data.length > 0) {
        setImages(data.map((url: string, index: number) => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`,
          index
        })))
      }
    }
    call()
    return () => shouldCancel = true
  }, [])
  return images ? <div className='gallery'>
  <SimpleGrid sx={{ width: '100%' }} cols={2} spacing={30}>
    {images.map(object => (
      <LazyLoadImage className='gallery-image' style={{ margin: 'auto' }} width="100%" src={object.original} key={object.index} alt={'Goddess'} placeholderSrc="/mistress-cutout.png" effect="blur" />
    ))}
    {images.length === 0 && Array(10).fill(0).map((_, index) => (
      <LazyLoadImage className='gallery-image' style={{ margin: 'auto' }} width="100%" src={`/mistress-cutout.png`} key={index} alt={'Goddess'} placeholderSrc="/mistress-cutout.png" effect="blur" />
    ))}
  </SimpleGrid>
</div> : null
}

export default ImagesGallery