import { supabase } from "../lib/supabaseClient";

export default function Header() {
  async function handleLogout() {
    await supabase.auth.signOut();
    location.reload();
  }

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-gray-700">MaintainX Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Cerrar sesión
      </button>
    </header>
  );
}
