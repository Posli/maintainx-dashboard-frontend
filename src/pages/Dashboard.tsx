import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Header from "../components/Header";
import Filters from "../components/Filters";
import AssetTable from "../components/AssetTable";

export default function Dashboard({ session }: { session: any }) {
  const [assets, setAssets] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    locationId: "",
    vendorId: "",
    name: "",
    serialNumber: "",
  });

  const API_BASE = import.meta.env.VITE_API_BASE!;

  async function loadAssets() {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;
    const params = new URLSearchParams(filters as any).toString();
    const res = await fetch(`${API_BASE}/maintainx/assets?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setAssets(data || []);
  }

  useEffect(() => {
    loadAssets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <Filters filters={filters} setFilters={setFilters} onSearch={loadAssets} />
        <AssetTable assets={assets} />
      </div>
    </div>
  );
}
