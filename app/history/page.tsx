'use client';

import { useEffect, useState } from 'react';
import { supabase, ScannedObject } from '../../lib/supabase';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { HiOutlineClock } from 'react-icons/hi';

export default function HistoryPage() {
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
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 rounded-full p-3">
            <HiOutlineClock className="text-blue-500 w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-blue-700">Historique</h1>
        </div>
        <p className="text-gray-600 mb-8">Consultez l'historique de vos scans et actions.</p>
        <div className="space-y-4 mb-8">
          {[1,2,3].map((i) => (
            <div key={i} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4 shadow">
              <div className="text-gray-400 text-xl">⏳</div>
              <div className="flex-1">
                <div className="font-medium">Scan du 12/06/2024</div>
                <div className="text-xs text-gray-500">Objet détecté : Exemple {i}</div>
              </div>
              <div className="text-xs text-blue-600">Succès</div>
            </div>
          ))}
        </div>
        <Link href="/scan" className="inline-block mt-2 text-blue-600 hover:underline font-semibold">Recommencer un scan</Link>
      </div>
    </div>
  );
}
