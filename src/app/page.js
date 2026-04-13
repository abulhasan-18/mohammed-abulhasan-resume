export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-8">
      <main className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Mohammed Abulhasan
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            View or download the software engineer resume. The page is optimized for printing and ATS compatibility.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="/experience"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-200"
          >
            View Resume
          </a>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
