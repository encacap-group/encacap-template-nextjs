import NextHead from 'next/head';
import { memo } from 'react';
import { HeadProps } from './interface';

const Head = ({ title }: HeadProps) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <NextHead>
      <title>{`${title} - ${appName}`}</title>
    </NextHead>
  );
};

export default memo(Head);
