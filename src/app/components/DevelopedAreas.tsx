// components/DevelopedAreas.tsx
const areas = [
    { id: 1, title: 'Sport Skills', progress: 75 },
    { id: 2, title: 'Blogging', progress: 92 },
    { id: 3, title: 'Leadership', progress: 33 },
    { id: 4, title: 'Meditation', progress: 56 },
    { id: 5, title: 'Philosophy', progress: 79 },
  ];
  
  const DevelopedAreas = () => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">Developed Areas</h3>
        <ul>
          {areas.map((area) => (
            <li key={area.id} className="mb-2">
              <div className="flex justify-between">
                <span>{area.title}</span>
                <span>{area.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${area.progress}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DevelopedAreas;
  