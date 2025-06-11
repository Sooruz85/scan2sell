'use client';

import UploadButton from './components/UploadButton';
import Image from 'next/image';
import ImageUploader from './components/ImageUploader';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Vendez vos objets en quelques clics
            </h1>
            <p className="text-xl text-gray-600">
              Scannez vos objets, laissez l'IA les identifier et créez une annonce en quelques secondes.
            </p>
            <div className="pt-4 w-full max-w-md mx-auto">
              <ImageUploader />
            </div>
          </div>
          {/* <div className="relative h-[600px] hidden md:block">
            <img
              src="/user-image-1.jpg"
              alt="Illustration"
              className="object-cover rounded-lg shadow-xl"
              style={{ width: '100%', height: '100%' }}
            />
          </div> */}
        </div>

        <div className="mt-24 w-full">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Prenez une photo</h3>
              <p className="text-gray-600">
                Photographiez votre objet sous un bon angle
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. L'IA analyse</h3>
              <p className="text-gray-600">
                Notre intelligence artificielle identifie l'objet et ses caractéristiques
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Vendez</h3>
              <p className="text-gray-600">
                Publiez votre annonce et commencez à vendre
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
