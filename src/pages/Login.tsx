import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pyn-cream px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="block font-serif text-3xl text-pyn-charcoal text-center mb-12 no-underline">
          pyn
        </Link>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="font-serif text-2xl text-pyn-charcoal mb-6">Sign In</h1>
          {error && (
            <p className="text-red-600 text-sm mb-4 bg-red-50 p-3 rounded">{error}</p>
          )}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-500 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded px-4 py-3 text-pyn-charcoal focus:outline-none focus:border-pyn-teal transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-500 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded px-4 py-3 text-pyn-charcoal focus:outline-none focus:border-pyn-teal transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-pyn-teal text-white text-sm font-medium tracking-wide uppercase rounded hover:bg-pyn-teal-light transition-colors cursor-pointer border-none disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-gray-400 text-xs mt-6">
            Access is invite-only. Contact an administrator for access.
          </p>
        </div>
      </div>
    </div>
  )
}
