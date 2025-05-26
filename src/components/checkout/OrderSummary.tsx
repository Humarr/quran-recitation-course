export default function OrderSummary() {
  const coursePrice = 15000; // ₦15,000

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Quran Recitation Course</span>
          <span className="font-medium">₦{coursePrice.toLocaleString()}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="text-base font-medium text-gray-900">Total</span>
            <span className="text-base font-bold">₦{coursePrice.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-blue-800">What&#39;s included</h3>
          <ul className="mt-2 text-sm text-blue-700 space-y-1">
            <li>• 5 Full Modules (Video + Audio + PDFs)</li>
            <li>• Lifetime Access</li>
            <li>• Certificate of Completion</li>
            <li>• Private Support Group</li>
            <li>• Bonus: Duas & Consistency Tips</li>
          </ul>
        </div>
      </div>
    </div>
  );
}