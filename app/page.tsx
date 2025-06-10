'use client';

import { Menu, User, ShoppingCart, Scan, Image as ImageIcon, Send, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'art', name: 'Art' },
  { id: 'clothing', name: 'Vêtement' },
  { id: 'furniture', name: 'Mobilier' },
  { id: 'antique', name: 'Objet ancien' },
  { id: 'tech', name: 'Tech' },
];

const sampleProducts = [
  {
    id: 1,
    name: 'Vase Ming Dynasty',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
    labels: ['Antique', 'Céramique', 'Art asiatique'],
  },
  {
    id: 2,
    name: 'Chaise Eames',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c',
    labels: ['Design', 'Mobilier', 'Années 50'],
  },
  {
    id: 3,
    name: 'Montre Rolex',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    labels: ['Luxe', 'Accessoire', 'Horlogerie'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>

            <Link href="/" className="text-xl font-semibold text-gray-900">
              Scan2Sell
            </Link>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors">
                Vendre
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            SCANNEZ. DÉTECTEZ. VENDEZ.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Identifiez automatiquement vos objets, œuvres ou vêtements grâce à l'IA, et vendez-les en un clic.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-16 h-16 mx-auto mb-6 shadow-sm">
                <Scan className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reconnaissance d'image IA</h3>
              <p className="text-gray-600">Analysez instantanément vos objets avec notre technologie de pointe</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-16 h-16 mx-auto mb-6 shadow-sm">
                <ImageIcon className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Création automatique de fiche produit</h3>
              <p className="text-gray-600">Générez des descriptions précises et des catégorisations pertinentes</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-16 h-16 mx-auto mb-6 shadow-sm">
                <Send className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Publication instantanée</h3>
              <p className="text-gray-600">Vendez sur vos plateformes préférées en un seul clic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${category.id === 'art'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.labels.map((label) => (
                      <span
                        key={label}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                    Publier
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
