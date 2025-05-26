/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function OrderConfirmation({ orderData }: { orderData: any }) {
  return (
    <div className="p-8 text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <CheckCircleIcon className="h-8 w-8 text-green-600" />
      </div>
      
      <h2 className="mt-4 text-2xl font-bold text-gray-900">Payment Successful!</h2>
      <p className="mt-2 text-gray-600">
        Thank you for enrolling in the Quran Recitation Course, {orderData.name.split(' ')[0]}!
      </p>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg text-left">
        <h3 className="text-lg font-medium text-gray-900 mb-4">What&#39;s Next</h3>
        <ol className="space-y-4 text-sm text-gray-600">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 text-secondary mr-3">1</span>
            <span>
              <strong>Check your email</strong> - We&#39;ve sent your course access details to {orderData.email}
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 text-secondary mr-3">2</span>
            <span>
              <strong>Join the student group</strong> - You&#39;ll receive an invitation to our private WhatsApp group
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 text-secondary mr-3">3</span>
            <span>
              <strong>Start learning</strong> - Log in to your account to access all course materials
            </span>
          </li>
        </ol>
      </div>
      
      <div className="mt-8">
        <Link
          href="/account"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
        >
          Go to My Account
        </Link>
      </div>
    </div>
  );
}