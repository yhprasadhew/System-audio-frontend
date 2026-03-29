export default function ErrorPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}   