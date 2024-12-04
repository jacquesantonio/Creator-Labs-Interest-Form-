import { ArrowRight } from 'lucide-react';
import { HeroBg } from './Background/Patterns';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <HeroBg />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-purple-100 text-purple-600 rounded-full">
          Private Beta Opening Soon
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          The Future of<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Creator Partnerships
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          We're revolutionizing how brands and creators collaborate. Limited spots available for our exclusive beta launch.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#waitlist"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors group shadow-lg shadow-purple-500/25"
          >
            Reserve Your Spot
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm">95% of beta spots filled</span>
          </div>
        </div>
      </div>
    </div>
  );
}