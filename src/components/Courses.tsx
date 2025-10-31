import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mic, BookOpen, PenTool, Baby } from 'lucide-react';

export function Courses() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      icon: Mic,
      title: "Voice & Expression",
      subtitle: "Beginner-Friendly",
      features: [
        "Basics of pitch, breath, and rhythm",
        "Explore emotional depth in singing",
        "Build confidence in your natural voice"
      ],
      color: "pink"
    },
    {
      icon: BookOpen,
      title: "Story-Singing",
      subtitle: "Music & Narrative",
      features: [
        "Learn to sing with expression",
        "Connect lyrics and storytelling",
        "Ideal for those who love poetry + music"
      ],
      color: "purple"
    },
    {
      icon: PenTool,
      title: "Writing Through Music",
      subtitle: "Creative Expression",
      features: [
        "Creative journaling and reflective writing inspired by songs",
        "Combine rhythm, silence, and words"
      ],
      color: "yellow"
    },
    {
      icon: Baby,
      title: "Kalashiksha Kids",
      subtitle: "Ages 5–12",
      features: [
        "Fun introduction to music through songs, rhythm games, folk tunes, and lullabies",
        "Exposure to multiple genres to spark curiosity and confidence"
      ],
      color: "blue"
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="text-pink-600">🎵</span>
            <h2 className="text-pink-800">Courses Offered</h2>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card key={index} className="p-8 border-pink-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-${course.color}-100 flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 text-${course.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-gray-900">{course.title}</h3>
                        <p className="text-pink-600 italic">{course.subtitle}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <p className="text-gray-700 italic">
              Learn at your own pace. From anywhere.
            </p>
            <p className="text-gray-600">
              All classes are online (Zoom/Google Meet). Each session is 45 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => scrollToSection('pricing')} className="bg-pink-600 hover:bg-pink-700">
                👉 Book a Free Demo
              </Button>
              <Button onClick={() => scrollToSection('pricing')} variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
