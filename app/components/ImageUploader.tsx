'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Notification from './Notification';
import { supabase } from '../../lib/supabase';

export default function ImageUploader() {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' | 'info' } | null>(null);
  const router = useRouter();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Créer l'aperçu
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Uploader et analyser l'image
    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'analyse');
      }

      const data = await response.json();

      // Sauvegarder l'objet scanné dans Supabase
      const { category, suggestedName, suggestedDescription, labels } = data;
      let imageUrl = null;
      // Upload de l'image sur Supabase Storage (optionnel)
      const fileExt = file.name.split('.').pop();
      const filePath = `scanned/${Date.now()}-${file.name}`;
      const { data: storageData, error: storageError } = await supabase.storage.from('images').upload(filePath, file);
      if (!storageError) {
        const { data: publicUrlData } = supabase.storage.from('images').getPublicUrl(filePath);
        imageUrl = publicUrlData?.publicUrl || null;
      }
      // Insérer dans la table scanned_objects
      await supabase.from('scanned_objects').insert([
        {
          image_url: imageUrl,
          name: suggestedName,
          description: suggestedDescription,
          category,
          labels,
        }
      ]);

      setNotification({
        message: 'Objet scanné et sauvegardé avec succès !',
        type: 'success'
      });
      // Optionnel : router.push('/library');
    } catch (error) {
      console.error('Erreur:', error);
      setNotification({
        message: 'Une erreur est survenue lors de l\'analyse ou de la sauvegarde',
        type: 'error'
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto">
        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />

          {preview ? (
            <div className="relative w-full h-64">
              <Image
                src={preview}
                alt="Aperçu"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Cliquez ou glissez-déposez une image ici
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF jusqu'à 10MB
                </p>
              </div>
            </div>
          )}

          {isUploading && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
      </div>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
}
