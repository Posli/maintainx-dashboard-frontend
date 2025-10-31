export default function Filters({ filters, setFilters, onSearch }: any) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {["locationId", "vendorId", "name", "serialNumber"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          className="border p-2 rounded w-48"
          value={filters[field]}
          onChange={handleChange}
        />
      ))}
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Buscar
      </button>
    </div>
  );
}
