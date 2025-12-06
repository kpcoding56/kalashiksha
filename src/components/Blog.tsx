import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen, Brain, Wind, Music, Heart } from 'lucide-react';

export function Blog() {
  const articles = [
    {
      icon: Heart,
      title: "How Music Heals: A Science-Backed Perspective",
      description: "Discover the scientific research behind music's healing power and its effects on mental health."
    },
    {
      icon: Brain,
      title: "Neurons & Notes: What Music Does to Your Brain",
      description: "Explore how music activates multiple brain regions and creates lasting neural connections."
    },
    {
      icon: Wind,
      title: "Singing as Breathwork: Calming the Nervous System",
      description: "Learn how singing exercises can serve as powerful breathwork to reduce stress and anxiety."
    },
    {
      icon: Music,
      title: "Why Children Should Hear All Kinds of Music Early",
      description: "Understanding the developmental benefits of exposing children to diverse musical genres."
    },
    {
      icon: BookOpen,
      title: "Why Music Feels Like Therapy — Even When You Don't Realize It",
      description: "Uncover the therapeutic qualities of music and why it resonates so deeply with our emotions."
    }
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="text-pink-600">✍</span>
            <h2 className="text-pink-800">Blog</h2>
            <p className="text-pink-700 italic">
              Words That Heal. Music That Holds You.
            </p>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Kalashiksha's blog simplifies research, stories, and science about music. 
              Discover how music touches the brain, the body, and the soul.
            </p>
          </div>

          {/* Featured Article with Image */}
          <Card className="mb-8 overflow-hidden border-pink-100 hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695510864104-242007d8b5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG5vdGVzJTIwc2hlZXR8ZW58MXx8fHwxNzYxMTYxNjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Music notes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full">
                    Featured Article
                  </div>
                  <h3 className="text-gray-900">
                    How Music Heals: A Science-Backed Perspective
                  </h3>
                  <p className="text-gray-600">
                    Dive deep into the latest research on how music affects our mental and emotional wellbeing, 
                    from reducing anxiety to improving cognitive function.
                  </p>
                  <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Upcoming Articles */}
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.slice(1).map((article, index) => {
                const Icon = article.icon;
                return (
                  <Card key={index} className="p-6 border-pink-100 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-pink-600" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-gray-900">{article.title}</h4>
                        <p className="text-gray-600">{article.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-pink-600 hover:bg-pink-700">
              📚 Read All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
