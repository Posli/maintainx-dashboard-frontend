export default function AssetTable({ assets }: { assets: any[] }) {
  if (!assets.length) return <p>No hay activos disponibles.</p>;

  return (
    <table className="min-w-full border-collapse border border-gray-200 bg-white rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Serial</th>
          <th className="border p-2">Ubicación</th>
          <th className="border p-2">Vendor</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((a, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="border p-2">{a.name}</td>
            <td className="border p-2">{a.serial_number}</td>
            <td className="border p-2">{a.location_id}</td>
            <td className="border p-2">{a.vendor_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
