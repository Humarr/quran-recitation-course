/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import PaymentProcessing from '@/components/checkout/PaymentProcessing';
import OrderConfirmation from '@/components/checkout/OrderConfirmation';

export default function CheckoutPage() {
  const [step, setStep] = useState<'form' | 'processing' | 'complete'>('form');
  const [orderData, setOrderData] = useState<any>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handleSubmit = (data: any) => {
    setOrderData(data);
    setStep('processing');
  };

  const handlePaymentSuccess = (response: any) => {
    setStep('complete');
    // You would typically send this to your backend here
    console.log('Payment successful:', response);
    // Optionally, you can reset the form or redirect the user
    setOrderData(response);
    setPaymentError(null);
    // Reset to initial state after successful payment
    setTimeout(() => {
        setStep('form');
        setOrderData(null);
        }, 5000); // Reset after 5 seconds
  };

  const handlePaymentError = (message: string) => {
    setPaymentError(message);
    setStep('form');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Complete Your Enrollment</h1>
          <p className="mt-2 text-gray-600">Secure checkout for Quran Recitation Course</p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {step === 'form' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <CheckoutForm 
                onSubmit={handleSubmit} 
                error={paymentError}
              />
              <OrderSummary />
            </div>
          )}

          {step === 'processing' && (
            <PaymentProcessing 
              orderData={orderData}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          )}

          {step === 'complete' && orderData && (
            <OrderConfirmation orderData={orderData} />
          )}
        </div>
      </div>
    </div>
  );
}