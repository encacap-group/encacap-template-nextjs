import { getHomeData } from '@services/common/base';
import { Metadata } from 'next';

const Home = async () => {
  const data = await getHomeData();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">{data.content}</div>
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
