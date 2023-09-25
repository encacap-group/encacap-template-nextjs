import { cache } from 'react';

export const getHomeData = cache(async () => {
  return Promise.resolve({
    title: 'Home',
    content: 'Hello from Encacap Group!',
    minimumNextJsVersion: 'v13.5.2',
    nextJsReleasesLink: 'https://github.com/vercel/next.js/releases/tag/v13.5.2',
  });
});
