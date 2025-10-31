import { Heart, Users, Sparkles, Music2 } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const beliefs = [
    {
      icon: Users,
      text: "Music is for everyone; not just the trained or the talented."
    },
    {
      icon: Heart,
      text: "Learning should feel like a return to yourself, not a race for perfection."
    },
    {
      icon: Sparkles,
      text: "Children exposed to many genres early on learn not just music, but also self-expression and choice."
    },
    {
      icon: Music2,
      text: "Music can heal - easing anxiety, regulating the nervous system, and opening space for joy."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <span className="text-pink-600">🙌</span>
          </div>
          <h2 className="text-pink-800">About Us</h2>
          <p className="text-pink-700 italic">
            Every note has a story. Every learner has a place.
          </p>
          
          <p className="text-gray-700">
            At Kalashiksha, we believe:
          </p>

          {/* Beliefs Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <Card key={index} className="p-6 border-pink-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <p className="text-gray-700 text-left pt-2">
                      {belief.text}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <p className="text-gray-700 pt-8">
            This is your safe, welcoming corner to sing, learn, and reconnect at your own rhythm.
          </p>

          {/* Founder's Note */}
          <div className="mt-16 bg-gradient-to-br from-pink-50 to-yellow-50 rounded-2xl p-8 md:p-12 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-600">🌸</span>
                <h3 className="text-pink-800">Founder's Note</h3>
              </div>
              <div className="prose prose-lg text-gray-700">
                <p>
                  I started Kalashiksha with a simple belief - that music touches every heart differently, yet connects 
                  us all. From my own journey, I've seen how music can comfort, energize, and even heal the mind. 
                  This venture is my way of sharing that gift, while also keeping alive the traditions and cultural 
                  legacy we inherit through music. A space where anyone, regardless of age or background, can 
                  discover how music shapes not just their skills, but their wellbeing.
                </p>
              </div>
              <p className="text-gray-600 italic">
                — Navya Rao, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
