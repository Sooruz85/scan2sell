import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scan2Sell - Scanner d\'objets',
  description: 'Analysez vos objets avec l\'IA de Google Cloud Vision',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
