'use client';

import UploadButton from './components/UploadButton';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Colonne gauche */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-8 md:p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Bienvenue sur Scan2Sell
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Prenez en photo un objet, laissez l'IA vous dire ce que c'est.
            Créez automatiquement une fiche produit, prête à la vente.
          </p>
          <UploadButton />
        </div>
      </div>

      {/* Colonne droite */}
      <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
        <Image
          src="/tomate.jpg"
          alt="Image illustrative"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}
