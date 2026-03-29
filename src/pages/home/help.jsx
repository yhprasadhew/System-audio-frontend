export default function Help() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Help & Support</h1>
      <p className="text-lg text-gray-700 mb-6">If you need assistance, please contact our support team or visit our FAQ page.</p>
      <div className="flex items-center gap-4">
        <a 
          href="mailto: support@company.com"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}