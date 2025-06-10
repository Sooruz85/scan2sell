'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiImage } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Array<{ description: string; score: number }> | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      setFile(file);
      setPreview(URL.createObjectURL(file));
      setResults(null);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResults(data.labels);
    } catch (error) {
      console.error('Erreur lors de l\'analyse:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Scanner d'objets</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
              >
                <input {...getInputProps()} />
                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Glissez-déposez une image ici, ou cliquez pour sélectionner
                </p>
              </div>

              {preview && (
                <div className="relative aspect-square">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={!file || loading}
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Analyse en cours...' : 'Analyser'}
              </button>
            </form>
          </div>

          <div>
            {results && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Résultats de l'analyse</h2>
                <ul className="space-y-2">
                  {results.map((label, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{label.description}</span>
                      <span className="text-primary font-medium">
                        {Math.round(label.score * 100)}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/history"
            className="inline-flex items-center text-primary hover:text-secondary"
          >
            <FiImage className="mr-2" />
            Voir l'historique des scans
          </Link>
        </div>
      </div>
    </main>
  );
}
