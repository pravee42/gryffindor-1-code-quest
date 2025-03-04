'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, Lock, User, AlertTriangle } from 'lucide-react'
import Layout from '../../../components/round2Layout'
import Link from 'next/link'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [magicParticles, setMagicParticles] = useState([])
  const router = useRouter()

  // Create magic particles effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (magicParticles.length < 15) {
        setMagicParticles(prev => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 2,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2
          }
        ])
      }
    }, 300)

    return () => clearInterval(interval)
  }, [magicParticles])

  // Remove particles after animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (magicParticles.length > 0) {
        setMagicParticles(prev => prev.slice(1))
      }
    }, 4000)

    return () => clearTimeout(timeout)
  }, [magicParticles])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      
      const data = await res.json()
      
      if (data.error) {
        setError(data.error)
      } else {
        // Create a magical transition effect before redirecting
        document.body.classList.add('magical-transition')
        setTimeout(() => {
          router.push('/round2/chat')
        }, 1000)
      }
    } catch (err) {
      setError('Failed to connect to the magical realm. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <div className="relative overflow-hidden p-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
        {/* Magic particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {magicParticles.map(particle => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-purple-500 opacity-70"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px rgba(147, 51, 234, 0.7)`,
                animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-purple-400 mr-3" size={24} />
            <h2 className="text-3xl font-bold text-white">Magical Portal</h2>
            <Sparkles className="text-purple-400 ml-3" size={24} />
          </div>
          
          <p className="text-center text-gray-300 mb-8">
            Enter your credentials to access the enchanted realm
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-900 bg-opacity-50 border border-red-700 rounded-lg flex items-center">
              <AlertTriangle className="text-red-400 mr-2 flex-shrink-0" size={20} />
              <p className="text-red-300">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="username">
                Wizard Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-500" size={18} />
                </div>
                <input
                  id="username"
                  className="w-full pl-10 p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  type="text"
                  placeholder="Enter your wizard name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="password">
                Secret Incantation
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-500" size={18} />
                </div>
                <input
                  id="password"
                  className="w-full pl-10 p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  type="password"
                  placeholder="Enter your secret incantation"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-3 px-4 rounded-lg flex justify-center items-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              ) : (
                <>Enter the Realm</>
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Not a wizard yet?{' '}
              <Link href="/user/register" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                Join the Magical Order
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
        }
        
        .magical-transition {
          animation: pageTransition 1s forwards;
        }
        
        @keyframes pageTransition {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </Layout>
  )
}