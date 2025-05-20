import { Link } from 'react-router-dom';

const Payment = () => {
  // Mock order details
  const orderNumber = "ORD" + Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your purchase. Your order has been confirmed and is being processed.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8 mx-auto max-w-md">
              <h2 className="text-xl font-semibold mb-4 text-left">Order Details</h2>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="text-gray-800 font-medium">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-800 font-medium">{orderDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="text-gray-800 font-medium">Credit Card</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping Method:</span>
                  <span className="text-gray-800 font-medium">Standard Shipping</span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>$1,079.96</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to your email address. You can track your order status in your account.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
              <Link
                to="/products"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Questions about your order?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or concerns about your order, please contact our customer support team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-800">+92-310-505-9461</span>
            </div>
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-800">support@furniturehub.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 