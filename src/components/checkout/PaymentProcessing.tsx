/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    PaystackPop: {
      setup: (options: any) => {
        openIframe: () => void;
      };
    };
  }
}

export default function PaymentProcessing({ 
  orderData, 
  onSuccess, 
  onError 
}: { 
  orderData: any, 
  onSuccess: (response: any) => void, 
  onError: (message: string) => void 
}) {
  useEffect(() => {
    if (orderData && window.PaystackPop) {
      initializePayment();
    }
  }, [orderData]);

  const initializePayment = () => {
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
      email: orderData.email,
      amount: 15000 * 100, // Convert to kobo
      currency: 'NGN',
      ref: `QURAN-${Date.now()}`,
      firstname: orderData.name.split(' ')[0],
      lastname: orderData.name.split(' ')[1] || '',
      metadata: {
        custom_fields: [
          {
            display_name: "Phone",
            variable_name: "phone",
            value: orderData.phone
          }
        ]
      },
      callback: (response: any) => {
        // Verify payment on your backend in production
        onSuccess(response);
      },
      onClose: () => {
        onError('Payment window was closed');
      }
    });

    handler.openIframe();
  };

  return (
    <div className="p-8 text-center">
      <Script 
        src="https://js.paystack.co/v1/inline.js" 
        strategy="beforeInteractive"
      />
      
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary mx-auto mb-4"></div>
      <h2 className="text-xl font-medium text-gray-900 mb-2">Processing Payment</h2>
      <p className="text-gray-600">You will be redirected to Paystack to complete your payment</p>
      
      <div className="mt-8 bg-yellow-50 p-4 rounded-md text-left">
        <p className="text-sm text-yellow-700">
          If you&#39;re not redirected automatically, please check if your browser blocked the popup.
        </p>
      </div>
    </div>
  );
}