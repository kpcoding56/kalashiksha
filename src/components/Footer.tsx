import { Music, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pink-900 text-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6 text-pink-300" />
                <span className="text-pink-100">Kalashiksha</span>
              </div>
              <p className="text-pink-200 mb-4">
                Where music becomes a way back to yourself. Join us on a journey of musical discovery and healing.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-pink-100 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-pink-200 hover:text-pink-100 transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('courses')} className="text-pink-200 hover:text-pink-100 transition-colors">
                    Courses
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pricing')} className="text-pink-200 hover:text-pink-100 transition-colors">
                    Pricing
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('blog')} className="text-pink-200 hover:text-pink-100 transition-colors">
                    Articles
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-pink-100 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:kalaashiksha@gmail.com" className="text-pink-200 hover:text-pink-100 transition-colors">
                    kalaashiksha@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/kalaashiksha" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-pink-100 transition-colors">
                    @kalaashiksha
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-pink-800 pt-8 text-center">
            <p className="text-pink-200 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-pink-400" /> for music lovers everywhere
            </p>
            <p className="text-pink-300 mt-2">
              © 2025 Kalashiksha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
