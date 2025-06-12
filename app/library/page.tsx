import { HiOutlineArchive } from 'react-icons/hi';

export default function LibraryPage() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-200 rounded mb-3 flex items-center justify-center">
                <span className="text-3xl">📦</span>
              </div>
              <div className="font-semibold mb-1">Nom de l'objet</div>
              <div className="text-xs text-gray-400">Statut : à compléter</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
