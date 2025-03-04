'use client'
import { useState, useEffect } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link' // Changed to Next.js Link
import Layout from '../../components/round2Layout'

export default function Home() {
  const [magicParticles, setMagicParticles] = useState([])
  const [isHovering, setIsHovering] = useState(false)

  // Create magic particles effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (magicParticles.length < 20) {
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

  return (
    <Layout>
      <div className="relative overflow-hidden p-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl text-center min-h-[60vh] flex flex-col justify-center items-center">
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

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-purple-400 mr-3" size={28} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Gryffindor
            </h1>
            <Sparkles className="text-purple-400 ml-3" size={28} />
          </div>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Welcome to a realm of enchanted conversations. This mystical chatbot harnesses the power of AI to create magical interactions and deliver spellbinding responses.
          </p>

          <div className="flex justify-center">
            <Link href="/round2/chat" legacyBehavior>
              <a 
                className={`relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-full flex items-center transition-all duration-300 shadow-lg hover:shadow-xl ${isHovering ? 'scale-105' : ''}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="font-medium text-lg">Begin Your Journey</span>
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={20} />
                
                {/* Button glow effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></span>
              </a>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Enchanted Conversations", description: "Experience AI-powered discussions with a magical touch" },
              { title: "Mystical Interface", description: "Immerse yourself in a spellbinding user experience" },
              { title: "Arcane Knowledge", description: "Discover insights from the depths of digital wisdom" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
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