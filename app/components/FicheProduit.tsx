'use client';

import { useState } from 'react';
import { Product } from '../types';
import { FiEdit2, FiSave, FiX, FiExternalLink } from 'react-icons/fi';

interface FicheProduitProps {
  product: Product;
  onSave: (product: Product) => void;
  onPublish: (marketplace: 'leboncoin' | 'vinted') => void;
}

export default function FicheProduit({ product, onSave, onPublish }: FicheProduitProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleSave = () => {
    onSave(editedProduct);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProduct(product);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <div className="aspect-square relative">
        <img
          src={editedProduct.imageUrl}
          alt={editedProduct.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                value={editedProduct.name}
                onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={editedProduct.description}
                onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <input
                type="text"
                value={editedProduct.category}
                onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <FiSave className="h-4 w-4" />
                Enregistrer
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <FiX className="h-4 w-4" />
                Annuler
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{editedProduct.name}</h3>
                <p className="text-sm text-gray-500">{editedProduct.category}</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiEdit2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <p className="text-gray-600">{editedProduct.description}</p>
            <div className="flex flex-wrap gap-2">
              {editedProduct.labels.map((label) => (
                <span
                  key={label}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onPublish('leboncoin')}
                className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <FiExternalLink className="h-4 w-4" />
                Publier sur LeBonCoin
              </button>
              <button
                onClick={() => onPublish('vinted')}
                className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <FiExternalLink className="h-4 w-4" />
                Publier sur Vinted
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
