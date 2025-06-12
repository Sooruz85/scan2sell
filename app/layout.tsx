import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Scan2Sell',
  description: 'Scannez. Détectez. Vendez.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="fr">
      <head>
        {isDev && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.__NEXT_DATA__ = {
                    props: {},
                    page: "",
                    query: {},
                    buildId: "development"
                  };
                `,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.__NEXT_HMR_DATA__ = {
                    buildId: "development",
                    page: window.location.pathname
                  };
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen px-4 sm:px-8 pt-20">{children}</main>
      </body>
    </html>
  );
}
