import { getHomeData } from '@services/common/base';
import Link from 'next/link';
import { memo } from 'react';

const HomeLink = async () => {
  const data = await getHomeData();

  return (
    <code className="bg-gray-100 rounded px-2 py-0.5 text-sm">
      <span>Next.js</span>
      <Link href={data.nextJsReleasesLink} className="inline-block mx-1 text-blue-500 underline">
        {data.minimumNextJsVersion}
      </Link>
      <span>(or newer) is required.</span>
    </code>
  );
};

export default memo(HomeLink);
