'use client'
import { useEffect, useState } from 'react'
import { Trophy, Crown, Sparkles, Medal } from 'lucide-react'
import Layout from '../../../components/round2Layout'

export default function Leaderboard() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [magicParticles, setMagicParticles] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('/api/chat/leaderboard')
        const data = await res.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching leaderboard:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])

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

  // Function to get medal for top performers
  const getMedalIcon = (index) => {
    switch (index) {
      case 0:
        return <Crown className="text-yellow-400" size={20} />;
      case 1:
        return <Medal className="text-gray-300" size={20} />;
      case 2:
        return <Medal className="text-amber-600" size={20} />;
      default:
        return null;
    }
  }

  return (
    <Layout>
      <div className="relative overflow-hidden p-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
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

        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="text-yellow-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Magical Leaderboard</h2>
            <Sparkles className="text-purple-400 ml-3" size={24} />
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="flex space-x-2">
                <div className="h-3 w-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="h-3 w-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-3 w-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg border border-gray-700 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-900 to-gray-800">
                    <th className="p-4 text-left text-white">Rank</th>
                    <th className="p-4 text-left text-white">Wizard</th>
                    <th className="p-4 text-right text-white">Magical Power</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr 
                      key={user._id} 
                      className={`
                        border-t border-gray-700 transition-all duration-300 hover:bg-gray-700
                        ${index < 3 ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gray-800'}
                      `}
                    >
                      <td className="p-4 flex items-center">
                        <span className="font-bold text-purple-300 mr-2">{index + 1}</span>
                        {getMedalIcon(index)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 
                            ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-amber-700' : 'bg-purple-800'}`}>
                            {user.username.charAt(0).toUpperCase()}
                          </div>
                          <span className={`font-medium ${index < 3 ? 'text-white' : 'text-gray-300'}`}>
                            {user.username}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="font-bold text-lg relative">
                          <span className={`
                            ${index === 0 ? 'text-yellow-400' : 
                              index === 1 ? 'text-gray-300' : 
                                index === 2 ? 'text-amber-600' : 'text-purple-400'}
                          `}>
                            {user.score.toLocaleString()}
                          </span>
                          {index < 3 && (
                            <span className="absolute -top-1 -right-1">
                              <Sparkles size={12} className={`
                                ${index === 0 ? 'text-yellow-400' : 
                                  index === 1 ? 'text-gray-300' : 'text-amber-600'}
                              `} />
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr className="bg-gray-800">
                      <td colSpan={3} className="p-6 text-center text-gray-400">
                        No wizards have joined the competition yet!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </Layout>
  )
}