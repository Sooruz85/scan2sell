import ImageUploader from '../components/ImageUploader';
import { HiOutlineCamera, HiOutlineLightBulb } from 'react-icons/hi';

export default function ScanPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8">
        {/* Colonne gauche : upload */}
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-3xl font-bold text-blue-700">Scanner un objet</h1>
          <p className="text-gray-600 text-base">
            Téléversez une photo de l’objet à vendre, notre IA le détecte automatiquement.
          </p>
          <div className="w-full">
            <ImageUploader />
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold shadow transition">Analyser maintenant</button>
        </div>
        {/* Colonne droite : illustration/info */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-blue-50 rounded-full p-6 shadow-md mb-2">
            <HiOutlineLightBulb className="text-blue-500 w-12 h-12" />
          </div>
          <h2 className="text-xl font-semibold text-blue-600">Conseil IA</h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Plus la photo est nette et l’objet bien cadré, plus l’analyse sera précise.
          </p>
        </div>
      </div>
    </div>
  );
}
