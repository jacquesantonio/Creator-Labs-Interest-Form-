import { Target, Zap, Users, BarChart, Shield, Sparkles } from 'lucide-react';
import { FeaturesBg } from './Background/Patterns';

const features = [
  {
    icon: Target,
    title: 'AI-Powered Matching',
    description: 'Our intelligent algorithm connects brands with creators who share their values, style, and audience demographics.',
  },
  {
    icon: Zap,
    title: 'Seamless Collaboration',
    description: 'From discovery to payment, manage your entire partnership journey in one streamlined platform.',
  },
  {
    icon: Users,
    title: 'Verified Community',
    description: 'Join a curated network of professional creators and established brands committed to authentic partnerships.',
  },
  {
    icon: BarChart,
    title: 'Real-Time Analytics',
    description: 'Track campaign performance, engagement metrics, and ROI with comprehensive analytics dashboards.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Built-in payment protection and automated contracts ensure safe, timely transactions for both parties.',
  },
  {
    icon: Sparkles,
    title: 'Creative Freedom',
    description: 'Maintain your unique voice while accessing tools that amplify your creative potential.',
  },
];

export function Features() {
  return (
    <div className="relative bg-white py-24">
      <FeaturesBg />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Creator Labs?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're building the most comprehensive platform for creator partnerships, designed to make collaboration effortless and successful.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
              <feature.icon className="h-10 w-10 text-purple-600 mb-4 transform transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}