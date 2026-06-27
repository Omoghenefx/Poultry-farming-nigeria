import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, AlertCircle, TrendingUp, Users, Zap, Star } from 'lucide-react';

export default function AgroIncomePremium() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌾</div>
            <div>
              <div className="font-bold text-lg text-emerald-700">Agro Income Nigeria</div>
              <div className="text-xs text-amber-600 font-semibold">Farming Made Profitable</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#problem" className="text-gray-700 hover:text-emerald-700 transition font-medium">The Problem</a>
            <a href="#solution" className="text-gray-700 hover:text-emerald-700 transition font-medium">The Solution</a>
            <a href="#journey" className="text-gray-700 hover:text-emerald-700 transition font-medium">Your Journey</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-700 transition font-medium">Proof</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6" style={{ background: 'linear-gradient(135deg, #1B4D2B 0%, #2E7D4E 100%)' }}>
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 rounded-full px-4 py-2 mb-6">
            <span className="text-lg">⭐</span>
            <span className="text-xs sm:text-sm font-semibold">Join 150+ Successful Naija Farmers</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Turn ₦0 Into a Thriving Farm Business
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop struggling. The proven poultry farming system that helped 150+ Nigerians build profitable businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
            <a href="https://selar.com/y7012778ff" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg">
              Get Blueprint ₦1,000
            </a>
            <a href="#problem" className="bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition border border-white/50">
              Learn More
            </a>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6 border border-white/20">
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-amber-300">150+</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Farmers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-emerald-300">₦50M+</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Revenue</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-amber-300">6 Wks</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">To Profit</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Why Most Nigerian Farmers Fail</h2>
            <p className="text-lg sm:text-xl text-gray-600">You're not lazy. The system is broken.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {[
              { icon: '❌', title: 'False Starts', desc: 'Spend ₦200k on birds, feed, medication... then lose everything to disease in month 2.' },
              { icon: '💰', title: 'Money Disappears', desc: 'Feed costs more than expected. Mortality rates aren\'t what the seller promised. Profit margin vanishes.' },
              { icon: '😔', title: 'Going Solo', desc: 'You\'re making every mistake yourself. Costly trial & error. Other farmers won\'t share secrets.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border-l-4 border-red-500">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 sm:p-8 border-2 border-red-200">
            <div className="flex gap-4">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">The Real Cost of Trial & Error</h4>
                <p className="text-gray-700 text-sm sm:text-base">Most farmers lose ₦300k - ₦500k in their first year. That's money that should've been profit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              The Poultry Farming Blueprint
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Everything you need. Nothing you don't.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What's Inside</h3>
              
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Complete startup checklist (pen design, bird sourcing, feed suppliers)',
                  'Exact feed formulas & cost per bird (tested with real naija prices)',
                  'Disease prevention protocol (stop losing birds to common illnesses)',
                  'Breeding & genetics simplified (which birds profit the most)',
                  'Market channels breakdown (where to sell for maximum profit)',
                  'Real financial models (₦50k to ₦2M revenue pathway)',
                  '12-week action plan (weekly checklist to stay on track)',
                  'Email support & updates (I\'ll keep you ahead)',
                  '100+ tips learned from 50+ successful farms'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Check className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 sm:p-10 border-2 border-emerald-200">
              <div className="text-7xl mb-4">🐔</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The Promise</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-600">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Week 1-2</p>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">Pen built & birds acquired</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-600">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Week 6-8</p>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">First eggs/meat ready for sale</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-amber-600">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Week 12</p>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">₦50k+ in profit (conservative)</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-amber-600">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Month 6</p>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">Scaled to 500+ birds or expanding products</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-emerald-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Your Investment</p>
                <p className="text-4xl font-bold text-emerald-700">₦1,000</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">One-time. Lifetime access. Email support included.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Your 6-Month Journey
            </h2>
            <p className="text-xl text-gray-600">From zero to thriving farm business</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-amber-400 md:left-1/2 md:transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                { month: 'Month 1', title: 'Foundation', desc: 'Build your pen, source birds, get equipment. Follow our exact checklist.' },
                { month: 'Month 2', title: 'Momentum', desc: 'Birds growing well. First feed optimization. Learn the market.' },
                { month: 'Month 3', title: 'First Sales', desc: 'Start selling eggs/meat. First revenue! Reinvest to scale.' },
                { month: 'Month 4', title: 'Optimization', desc: 'You now know what works. Cut waste. Increase profit margins.' },
                { month: 'Month 5', title: 'Scaling', desc: 'Add second batch or expand product line. Revenue 2-3x higher.' },
                { month: 'Month 6', title: 'Established', desc: 'You\'re a real farmer now. Consistent ₦50k-₦100k+ monthly profit.' }
              ].map((stage, idx) => (
                <div key={idx} className={`relative flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 pl-24 md:pl-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-emerald-200">
                      <p className="text-sm font-bold text-amber-600 uppercase tracking-wide mb-2">{stage.month}</p>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{stage.title}</h3>
                      <p className="text-gray-600">{stage.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-12 h-12 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Real Results From Real Farmers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">These are actual people using the blueprint right now</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Chukwu Okonkwo',
                role: 'Poultry Farmer, Enugu',
                avatar: '👨‍🌾',
                text: 'I started with 100 birds in January. By month 3, I was already making ₦80k profit monthly.',
                profit: '₦80k/month'
              },
              {
                name: 'Zainab Adebayo',
                role: 'Farm Owner, Lagos',
                avatar: '👩‍🌾',
                text: 'This guide gave me a step-by-step roadmap. Now I manage 2 farm locations with staff.',
                profit: '₦150k/month'
              },
              {
                name: 'Emeka Nwosu',
                role: 'Returning Farmer, Anambra',
                avatar: '👨‍🌾',
                text: 'I used to lose money every cycle. Implemented the disease prevention protocols—zero bird loss in 6 months.',
                profit: '₦60k/month'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border-t-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic text-sm sm:text-base">"{testimonial.text}"</p>

                <div className="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-200">
                  <p className="text-xs text-gray-600 mb-1">Current Profit</p>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-700">{testimonial.profit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Questions Farmers Ask
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "Do I need farming experience?",
                a: "No. The blueprint is for complete beginners. We explain everything from pen design to basic biology."
              },
              {
                q: "How much does it cost to start?",
                a: "Total startup cost is ₦30k-₦50k. The guide breaks this down by supplier and helps you find the best prices."
              },
              {
                q: "What if I live in Lagos/Abuja/small town?",
                a: "The blueprint works everywhere in Nigeria. We include supplier lists for different regions."
              },
              {
                q: "What if my birds get sick?",
                a: "Prevention is 80% of the battle. The disease prevention checklist helps 95%+ of farmers avoid losses."
              },
              {
                q: "Is ₦1,000 really it?",
                a: "Yes. One payment, lifetime access, email support included. No recurring charges, no upsells."
              },
              {
                q: "What if it doesn't work for me?",
                a: "Email us within 14 days for a full refund. But it works—150+ farmers have proven it."
              }
            ].map((item, idx) => (
              <details key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-emerald-300 transition cursor-pointer">
                <summary className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-gray-900 hover:bg-emerald-50 transition flex justify-between items-center text-sm sm:text-base">
                  {item.q}
                  <span className="text-emerald-600 ml-2">+</span>
                </summary>
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 text-gray-700 border-t border-gray-200 text-sm sm:text-base">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="buy" className="py-12 sm:py-20 px-4 sm:px-6" style={{ background: 'linear-gradient(135deg, #1B4D2B 0%, #2E7D4E 100%)' }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Stop Losing Money. Start Profiting.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            The Poultry Farming Blueprint has helped 150+ Nigerians build thriving farm businesses. Your turn starts now.
          </p>

          <div className="bg-white/20 backdrop-blur rounded-xl p-6 sm:p-8 border border-white/30 mb-8">
            <div className="text-4xl sm:text-5xl font-bold text-amber-300 mb-2">₦1,000</div>
            <p className="text-sm sm:text-base text-white/80">One-time payment • Lifetime access • Email support • Free updates</p>
          </div>

          <a 
            href="https://selar.com/y7012778ff"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl transition transform hover:scale-105 shadow-lg mb-6"
          >
            Get Access Now → 
          </a>

          <p className="text-xs sm:text-sm text-white/70">
            14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 sm:p-10 border-2 border-emerald-200 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Get Free Farming Tips Weekly</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">Market updates, cost breakdowns, and practical strategies sent to your inbox. Join 500+ farmers.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            {subscribed && (
              <p className="text-emerald-700 text-xs sm:text-sm font-medium mt-3">✓ Check your email for confirmation</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🌾</span>
                <div>
                  <p className="font-bold text-white text-sm">Agro Income Nigeria</p>
                  <p className="text-xs text-amber-600">Farming Made Profitable</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm">Helping Nigerian farmers build profitable businesses.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#problem" className="hover:text-white transition">Problem</a></li>
                <li><a href="#solution" className="hover:text-white transition">Solution</a></li>
                <li><a href="#journey" className="hover:text-white transition">Journey</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm">Support</h4>
              <p className="text-xs sm:text-sm mb-2">support@agro.ng</p>
              <p className="text-xs sm:text-sm">24-hour response</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="text-center text-xs sm:text-sm">
              <p className="mb-2">&copy; 2024 Agro Income Nigeria. All rights reserved.</p>
              <p className="text-gray-600">Empowering Nigerian farmers, one blueprint at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}