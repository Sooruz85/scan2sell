"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <nav className={`w-full shadow-md bg-white dark:bg-gray-900 transition-colors duration-200 ${dark ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition">
              Scan2Sell
            </Link>
          </div>

          {/* Menu central - desktop */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Accueil</Link>
            <Link href="/scan" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Scanner un objet</Link>
            <Link href="/library" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Mes objets</Link>
            <Link href="/history" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">Historique</Link>
          </div>

          {/* Actions à droite */}
          <div className="flex items-center space-x-4">
            <Link href="/scan">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-semibold flex items-center transition">
                <span className="mr-1">➕</span> Nouveau scan
              </button>
            </Link>
            <button className="text-2xl hover:opacity-80 transition" title="Profil utilisateur">👤</button>
            <button className="text-2xl hover:opacity-80 transition" title="Panier">🛒</button>
            {/* Toggle dark mode */}
            <button
              className="ml-2 text-xl p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
            >
              {dark ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Burger menu - mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center py-4 space-y-2">
            <Link href="/" className="w-full text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <Link href="/scan" className="w-full text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMenuOpen(false)}>Scanner un objet</Link>
            <Link href="/library" className="w-full text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMenuOpen(false)}>Mes objets</Link>
            <Link href="/history" className="w-full text-center py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition" onClick={() => setMenuOpen(false)}>Historique</Link>
            <Link href="/scan" className="w-full flex items-center justify-center py-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-semibold flex items-center transition w-full justify-center">
                <span className="mr-1">➕</span> Nouveau scan
              </button>
            </Link>
            <div className="flex space-x-4 mt-2">
              <button className="text-2xl" title="Profil utilisateur">👤</button>
              <button className="text-2xl" title="Panier">🛒</button>
              <button
                className="text-xl p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
              >
                {dark ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
