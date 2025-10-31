import { Mail, Instagram, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="text-pink-600">📬</span>
            <h2 className="text-pink-800">Contact Us</h2>
            <p className="text-gray-700">
              We'd love to hear from you.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you have questions, want to book a class, or simply share your love for music, 
              reach out anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 border-pink-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Email</h3>
                    <a href="mailto:kalaashiksha@gmail.com" className="text-pink-600 hover:text-pink-700">
                      kalaashiksha@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-pink-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Instagram</h3>
                    <a 
                      href="https://instagram.com/kalaashiksha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700"
                    >
                      @kalaashiksha
                    </a>
                  </div>
                </div>
              </Card>

              <div className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-2xl p-8">
                <h3 className="text-pink-800 mb-4">Why Choose Kalashiksha?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Online classes from the comfort of your home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Personalized attention in every session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Flexible scheduling to fit your lifestyle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Safe, judgment-free learning environment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-pink-100">
              <h3 className="text-gray-900 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your musical journey or ask us anything..."
                    rows={5}
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>

                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
