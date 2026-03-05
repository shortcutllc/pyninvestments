import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import LowerPyneDashboard from '../components/LowerPyneDashboard'

export default function Dashboard() {
  const navigate = useNavigate()

  async function handleSignOut() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <h1 className="text-[15px] font-extrabold text-[#334A46]">Lower Pyne Associates LP</h1>
        <button
          onClick={handleSignOut}
          className="text-sm text-gray-500 hover:text-pyn-charcoal cursor-pointer bg-transparent border-none"
        >
          Sign Out
        </button>
      </header>
      <LowerPyneDashboard />
    </div>
  )
}
