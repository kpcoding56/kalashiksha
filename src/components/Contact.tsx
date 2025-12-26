import { Mail, Instagram, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { send, init } from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sent, setSent] = useState(false);

  const validateEmail = (value: string) => {
    // simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSend = () => {
    setEmailError('');
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_USER;

    const templateParams = {
      from_name: name || 'Website Visitor',
      from_email: email,
      message: message || '',
    };

    console.log('EmailJS params', { serviceId, templateId, publicKey, templateParams });

    if (serviceId && templateId && publicKey) {
      // send via EmailJS
      send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setSent(true);
        })
        .catch((err) => {
          console.error('EmailJS send error', err);
          setEmailError('Failed to send message. Please try again or use your email client.');
        });
      return;
    }

    // Fallback to mailto if EmailJS is not configured
    const to = 'kalaashiksha@gmail.com';
    const subject = `Contact from ${name || 'Website Visitor'}`;
    const bodyLines = [] as string[];
    bodyLines.push(`Name: ${name || ''}`);
    bodyLines.push(`Email: ${email}`);
    bodyLines.push('');
    bodyLines.push('Message:');
    bodyLines.push(message || '');
    bodyLines.push('');
    bodyLines.push('— Sent from Kalashiksha website');

    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setSent(true);
  };

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_USER;
    if (publicKey) init(publicKey);
  }, []);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 4000);
    return () => clearTimeout(t);
  }, [sent]);

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
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-pink-200 focus:border-pink-400"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <p className="text-sm text-red-600 mt-2">{emailError}</p>
                  )}
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
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                  />
                </div>

                <Button className="w-full bg-pink-600 hover:bg-pink-700" type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                {sent && (
                  <p className="text-sm text-green-600">Thanks for the email, will revert back soon</p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
