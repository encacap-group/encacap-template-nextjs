import { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { ReactElement } from 'react';

interface RootLayoutProps {
  children: ReactElement;
}

const sourceSan3 = Source_Sans_3({ subsets: ['latin', 'vietnamese'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={sourceSan3.className}>{children}</body>
    </html>
  );
}

export const generateMetadata = async (): Promise<Metadata> => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME!;
  const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION;
  const appUrl = new URL(process.env.NEXT_PUBLIC_APP_URL as string);

  return {
    metadataBase: appUrl,
    applicationName: appName,
    referrer: 'origin-when-cross-origin',
    title: {
      default: appName,
      template: `%s - ${appName}`,
    },
    description: appDescription,
    openGraph: {
      siteName: appName,
      title: appName,
      description: appDescription,
      url: appUrl,
      locale: 'vi_VN',
      images: ['/images/share-link.png'],
    },
    icons: {
      icon: [
        {
          url: '/favicon.ico',
        },
        {
          url: '/images/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/images/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
      ],
      apple: [
        {
          url: '/images/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/images/safari-pinned-tab.svg',
        },
      ],
    },
    manifest: '/site.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords: ['encacap', 'group', 'nextjs'],
  };
};
