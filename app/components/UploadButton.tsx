'use client';

import { useState, useRef } from 'react';

export default function UploadButton() {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Pour l'instant, on ne fait rien avec le fichier
      console.log('Fichier sélectionné:', file.name);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all duration-200
          ${isHovered
            ? 'bg-gray-800 transform scale-105'
            : 'bg-gray-900'}
        `}
      >
        <span className="text-white">Uploader une image</span>
      </button>
    </div>
  );
}
