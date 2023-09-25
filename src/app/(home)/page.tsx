import { getHomeData } from '@services/common/base';
import { Metadata } from 'next';
import { HomeLink } from './components';

const Home = async () => {
  const data = await getHomeData();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-1">
        <div>{data.content}</div>
        <HomeLink />
      </div>
    </>
  );
};

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getHomeData();

  return {
    title: data.title,
  };
};

export default Home;
