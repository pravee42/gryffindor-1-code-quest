import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chatbot</h1>
          <nav>
            <Link href="/round2">
              <span className="text-white px-4">Home</span>
            </Link>
            <Link href="/round2/chat">
              <span className="text-white px-4">Chat</span>
            </Link>
            <Link href="/round2/leaderboard">
              <span className="text-white px-4">Leaderboard</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-center">
        &copy; 2025 Chatbot
      </footer>
    </div>
  )
}

export default Layout