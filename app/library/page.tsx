"use client";

import { HiOutlineArchive } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { supabase, ScannedObject } from '../../lib/supabase';

export default function LibraryPage() {
  const [objects, setObjects] = useState<ScannedObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchObjects = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('scanned_objects').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        setObjects(data);
      }
      setLoading(false);
    };
    fetchObjects();
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 rounded-full p-3">
            <HiOutlineArchive className="text-blue-500 w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-blue-700">Mes objets</h1>
        </div>
        <p className="text-gray-600 mb-8">Retrouvez ici tous les objets que vous avez scannés et enrichis.</p>
        {loading ? (
          <div className="text-center text-gray-400 py-12">Chargement...</div>
        ) : objects.length === 0 ? (
          <div className="text-center text-gray-400 py-12">Aucun objet scanné pour le moment.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border text-sm bg-white">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-4 py-2 border">Nom</th>
                  <th className="px-4 py-2 border">Catégorie</th>
                  <th className="px-4 py-2 border">Description IA</th>
                  <th className="px-4 py-2 border">Statut</th>
                  <th className="px-4 py-2 border">Plateforme</th>
                </tr>
              </thead>
              <tbody>
                {objects.map((obj) => (
                  <tr key={obj.id} className="hover:bg-blue-50 transition">
                    <td className="px-4 py-2 border font-medium">{obj.name || '—'}</td>
                    <td className="px-4 py-2 border">{obj.category || '—'}</td>
                    <td className="px-4 py-2 border max-w-xs truncate" title={obj.description || ''}>{obj.description || '—'}</td>
                    <td className="px-4 py-2 border">{obj.status || 'Non publié'}</td>
                    <td className="px-4 py-2 border">{obj.platforms ? obj.platforms.join(', ') : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
