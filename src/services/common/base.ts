import { cache } from 'react';

export const getHomeData = cache(async () => {
  console.log('getHomeData');

  return Promise.resolve({
    title: 'Home',
    content: 'Hello World!',
  });
});
