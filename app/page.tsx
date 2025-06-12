'use client';

import UploadButton from './components/UploadButton';
import Image from 'next/image';
import ImageUploader from './components/ImageUploader';
import TrueFocus from './components/TrueFocus';
import './components/TrueFocus.css';

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center w-full bg-white">
      <div className="w-full max-w-5xl px-4 py-12 flex flex-col items-center space-y-16">
        <div className="flex flex-col items-center text-center space-y-6">
          <TrueFocus sentence="Vendez vos objets en quelques clics" />
          <p className="text-lg text-gray-600 max-w-2xl">
            Scannez, identifiez et vendez vos objets en toute simplicité grâce à l'IA. Téléversez une photo, laissez l'IA faire le travail, publiez votre annonce en un instant !
          </p>
          <div className="w-full max-w-md">
            <ImageUploader />
          </div>
        </div>
        <section className="w-full mt-8">
          <h2 className="text-2xl font-bold text-center mb-8">Comment ça marche&nbsp;?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="font-semibold">1. Prenez une photo</h3>
              <p className="text-gray-500 text-sm">Photographiez votre objet sous un bon angle.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold">2. L'IA analyse</h3>
              <p className="text-gray-500 text-sm">L'intelligence artificielle identifie l'objet et ses caractéristiques.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="font-semibold">3. Vendez</h3>
              <p className="text-gray-500 text-sm">Publiez votre annonce et commencez à vendre.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
