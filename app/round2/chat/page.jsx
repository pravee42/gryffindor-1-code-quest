'use client';
import {useState, useEffect, useRef} from 'react';
import Layout from '../../../components/round2Layout';
import {Sparkles, Send} from 'lucide-react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [magicParticles, setMagicParticles] = useState([]);
  const responseRef = useRef(null);

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
            delay: Math.random() * 2,
          },
        ]);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [magicParticles]);

  // Remove particles after animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (magicParticles.length > 0) {
        setMagicParticles(prev => prev.slice(1));
      }
    }, 4000);

    return () => clearTimeout(timeout);
  }, [magicParticles]);

  // Typing effect for response
  const [displayedResponse, setDisplayedResponse] = useState('');

  useEffect(() => {
    if (!response) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < response.length) {
        setDisplayedResponse(response.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [response]);

  // Scroll to response when it updates
  useEffect(() => {
    if (displayedResponse && responseRef.current) {
      responseRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [displayedResponse]);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    setResponse('');
    setDisplayedResponse('');

    try {
      const res = await fetch('/api/chat/get_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message}),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Error connecting to the magical realm. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit1 = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    setResponse('');
    setDisplayedResponse('');

    try {
      const res = await fetch('/api/chat/submit_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message}),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Error connecting to the magical realm. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="relative overflow-hidden p-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white flex items-center justify-center">
          <Sparkles className="mr-2 text-purple-400" size={24} />
          Magical Chat
          <Sparkles className="ml-2 text-purple-400" size={24} />
        </h2>

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
                boxShadow: `0 0 ${particle.size * 2}px ${
                  particle.size / 2
                }px rgba(147, 51, 234, 0.7)`,
                animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="relative">
            <textarea
              className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 shadow-inner"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Cast your spell here..."
              rows="4"
            />
            <div className="absolute bottom-6 right-4">
              <button
                onClick={handleSubmit}
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 rounded-full flex items-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50">
                <span>Send</span>
                <Send size={18} className="ml-2" />
              </button>
              <button
                onClick={handleSubmit1}
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 rounded-full flex items-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50">
                <span>Send</span>
                <Send size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {(displayedResponse || isLoading) && (
          <div
            ref={responseRef}
            className="mt-6 bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-500 ease-in-out shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400 flex items-center">
              <Sparkles className="mr-2" size={16} />
              Magical Response:
            </h3>

            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div
                  className="h-2 w-2 bg-purple-500 rounded-full animate-bounce"
                  style={{animationDelay: '0s'}}></div>
                <div
                  className="h-2 w-2 bg-purple-500 rounded-full animate-bounce"
                  style={{animationDelay: '0.2s'}}></div>
                <div
                  className="h-2 w-2 bg-purple-500 rounded-full animate-bounce"
                  style={{animationDelay: '0.4s'}}></div>
              </div>
            ) : (
              <p className="text-white leading-relaxed">{displayedResponse}</p>
            )}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-20px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </Layout>
  );
}
