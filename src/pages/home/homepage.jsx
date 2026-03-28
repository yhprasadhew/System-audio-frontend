import Header from "../../components/header"
export default function Homepage() {

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start bg-gray-100">

      {/* Header */}
      <header className="w-full h-[100px] shadow-xl flex items-center justify-center bg-white">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center justify-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Home Page!</h2>
      
      </main>

    </div>
  )
}