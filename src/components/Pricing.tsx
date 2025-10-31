import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check, Zap } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      icon: "🌸",
      name: "Demo Class",
      subtitle: "Start Small",
      duration: "1 Free Class (45 mins)",
      action: "Book Demo Class",
      featured: true
    },
    {
      icon: "🎶",
      name: "4-Class Pack",
      subtitle: "Start Small",
      duration: "4 Weeks · 1 class/week",
      action: "Register Now"
    },
    {
      icon: "🎶",
      name: "10-Class Pack",
      subtitle: "Build a Habit",
      duration: "10 Weeks · 1 class/week",
      action: "Register Now",
      popular: true
    },
    {
      icon: "🎶",
      name: "20-Class Pack",
      subtitle: "Master Your Flow",
      duration: "20 Weeks · 1 class/week",
      action: "Register Now"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="text-pink-600">✨</span>
            <h2 className="text-pink-800">Plans & Pricing</h2>
            <p className="text-gray-600">Standard Pace – 1 Class/Week</p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-6 relative ${
                  plan.featured 
                    ? 'border-pink-300 bg-gradient-to-br from-pink-50 to-white' 
                    : plan.popular
                    ? 'border-pink-400 shadow-lg'
                    : 'border-pink-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-3xl">{plan.icon}</div>
                    <h3 className="text-gray-900">{plan.name}</h3>
                    <p className="text-pink-600">{plan.subtitle}</p>
                  </div>

                  <div className="space-y-2 text-center">
                    <p className="text-gray-600">{plan.duration}</p>
                  </div>

                  <Button 
                    className={`w-full ${
                      plan.featured || plan.popular
                        ? 'bg-pink-600 hover:bg-pink-700'
                        : 'bg-pink-500 hover:bg-pink-600'
                    }`}
                  >
                    {plan.action}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Accelerated Pack */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-purple-800 mb-2">🌟 Accelerated Pack (Optional)</h3>
                  <p className="text-purple-700">🚀 Want to learn faster? Choose 2 classes per week for quicker progress.</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Available for 4, 10, or 20 class packs",
                  "Flexible scheduling possible",
                  "Faster progress with 2 classes per week"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-purple-600 hover:bg-purple-700">
                👉 Choose Accelerated Pack
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
