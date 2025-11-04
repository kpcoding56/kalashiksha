import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import kalaashikha from '@/images/kalaashiksha.jpeg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-pink-600">🌸</span>
            </div>
            <h1 className="text-pink-800">
              Kalashiksha
            </h1>
            <p className="text-pink-700 italic">
              Where music becomes a way back to yourself.
            </p>
            <div className="prose prose-lg text-gray-700">
              <p>
                At Kalashiksha, music isn't just something you learn, it's something you return to. 
                Whether you're a beginner, rediscovering your voice, or simply curious, this is a space where music 
                is taught gently and soulfully. Not for perfection, but for presence.
              </p>
              <p>
                Here, music heals. It calms the mind, nurtures the heart, and belongs to everyone - children, adults, 
                beginners, or dreamers. It is also our way of keeping traditions alive, carrying forward the culture 
                and legacy of music for generations to come.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => scrollToSection('pricing')} className="bg-pink-600 hover:bg-pink-700">
                🎶 Book a Demo Class
              </Button>
              <Button onClick={() => scrollToSection('courses')} variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                🪷 Explore Courses
              </Button>
              <Button onClick={() => scrollToSection('blog')} variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                📚 Read Articles
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={kalaashikha}
                alt="South Indian traditional music instruments"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-200 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
