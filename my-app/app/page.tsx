export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 p-8">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-white">🚀 Deployment Test Page</h1>
        <p className="text-gray-400 text-lg mb-6">
          Testing deployments with a sleek dark UI.
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}