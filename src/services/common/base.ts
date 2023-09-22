import { cache } from 'react';

export const getHomeData = cache(async () => {
  return Promise.resolve({
    title: 'Home',
    content: 'Hello World!',
  });
});
