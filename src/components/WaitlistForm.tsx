import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { WaitlistBg } from './Background/Patterns';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('creator');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log({ email, userType });
    setSubmitted(true);
  };

  return (
    <div id="waitlist" className="relative py-24">
      <WaitlistBg />
      <div className="relative max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Limited Beta Access</h2>
          <p className="text-gray-600">
            Only 50 spots remaining for our private beta. Get exclusive early access and founder-tier benefits that won't be available after launch.
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Spot Reserved!</h3>
            <p className="text-gray-600 mb-6">
              You're in! We'll notify you as soon as your exclusive beta access is ready. Keep an eye on your inbox for important updates.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span>Beta access confirmed</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I am a...
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUserType('creator')}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    userType === 'creator'
                      ? 'border-purple-600 bg-purple-50 text-purple-600'
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                >
                  Creator
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('brand')}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    userType === 'brand'
                      ? 'border-purple-600 bg-purple-50 text-purple-600'
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                >
                  Brand
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center group shadow-lg shadow-purple-500/25"
            >
              Reserve Your Spot
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 mb-1">Only 50 spots remaining</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <p className="text-xs text-gray-400">Beta access includes lifetime founder benefits</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}