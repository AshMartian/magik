import 'react-lazy-load-image-component/src/effects/blur.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  ListObjectsCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { SimpleGrid } from '@mantine/core';

const Gallery: React.FC = () => {
  const [objects, setObjects] = useState<Array<{ Key: string }>>([]);
  const [error, setError] = useState<Error | null>(null);

  const bucket = 'mistress-of-magic';

  useEffect(() => {
    // Create an S3 client
    const s3 = new S3Client({
      region: 'us-west-2',
      credentials: {
        accessKeyId: 'AKIASC53HBBI5PDEBWGL',
        secretAccessKey: '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',
      }
    });

    // Set the parameters for the ListObjectsCommand
    const listCommand = new ListObjectsCommand({
      Bucket: bucket,
      Prefix: 'images/',
    });

    // Call the send method of the S3 client to list the objects in the bucket
    s3.send(listCommand).then(data => {
      if (data.Contents) {
        // remove first element, which is the folder itself
        data.Contents.shift();
        setObjects(data.Contents as Array<{ Key: string }>);
      }
    }).catch(err => {
      setError(err);
    });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='gallery'>
      <SimpleGrid sx={{ width: '100%' }} cols={2} spacing={30}>
        {objects.map(object => (
          <LazyLoadImage className='gallery-image' style={{ margin: 'auto' }} width="100%" src={`https://www.mistressofmagik.com/${object.Key}`} key={object.Key} alt={object.Key} placeholderSrc="/mistress-cutout.png" effect="blur" />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Gallery;