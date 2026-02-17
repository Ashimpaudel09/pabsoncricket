import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kathpabson@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+977-9851025511',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kathmandu, Nepal',
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-blue-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-blue-200 font-bold uppercase tracking-widest mb-2 text-sm">
          Get in Touch
        </h2>
        <h3 className="text-4xl md:text-5xl font-black mb-8">CONTACT US</h3>
        <p className="text-blue-100 text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
          Interested in registering your school or sponsoring the league? Reach
          out to us directly through any of the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8" />
              </div>
              <p className="text-blue-200 text-xs font-bold uppercase mb-2">
                {item.label}
              </p>
              <p className="font-bold text-lg break-all">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
