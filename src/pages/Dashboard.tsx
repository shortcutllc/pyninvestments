import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const navigate = useNavigate()

  async function handleSignOut() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="font-serif text-xl text-pyn-charcoal">Pyn Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="text-sm text-gray-500 hover:text-pyn-charcoal cursor-pointer bg-transparent border-none"
        >
          Sign Out
        </button>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        <p className="text-gray-500">
          Dashboard placeholder — LowerPyneDashboard will be ported here.
        </p>
      </main>
    </div>
  )
}
