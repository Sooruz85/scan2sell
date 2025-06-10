'use client';

import { useEffect, useState } from 'react';
import { supabase, ScannedObject } from '@/lib/supabase';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function History() {
  const [scans, setScans] = useState<ScannedObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScans() {
      try {
        const { data, error } = await supabase
          .from('scanned_objects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setScans(data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des scans:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchScans();
  }, []);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Historique des scans</h1>
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-secondary"
          >
            <FiArrowLeft className="mr-2" />
            Retour
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-8">Chargement...</div>
        ) : scans.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Aucun scan n'a été effectué
          </div>
        ) : (
          <div className="grid gap-6">
            {scans.map((scan) => (
              <div
                key={scan.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                  <div>
                    {scan.image_url ? (
                      <img
                        src={scan.image_url}
                        alt="Scanned object"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Image non disponible</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-sm text-gray-500">
                        {new Date(scan.created_at).toLocaleString('fr-FR')}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {scan.labels.map((label, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span>{label.description}</span>
                          <span className="text-primary font-medium">
                            {Math.round(label.score * 100)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
