'use client';

import { OutlinedText } from '../typography/OutlinedText';

export function ContactSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black text-white" id="contact">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="flex items-center gap-4 mb-2">
            <OutlinedText as="h2" size="xl" variant="white">
              Contact
            </OutlinedText>
          </div>
          <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-tight">
            Let&apos;s connect! Say hello and have a chat.
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* FACEBOOK CARD - Diperbesar ke 200px */}
          <ContactCard 
            href="https://www.facebook.com/timotiussimanjuntak24" 
            label="Facebook"
            className="lg:col-span-2 lg:row-span-2"
          >
            <svg width="200" height="200" viewBox="0 0 24 24" fill="white" className="drop-shadow-2xl">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </ContactCard>

          <ContactCard href="https://github.com/timotismjntk" label="Github">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256">
              <g>
                <path d="M84,240a23.9,23.9,0,0,0,24-24V168" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                <path d="M172,240a23.9,23.9,0,0,1-24-24V168" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                <path d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                <path d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                <path d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
              </g>
            </svg>
          </ContactCard>

          <ContactCard href="mailto:timotius.simanjuntak@binus.ac.id" label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256">
              <g>
                <polyline points="224 56 128 144 32 56" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></polyline>
                <path d="M32,56H224V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56Z" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                <line x1="110.5" y1="128" x2="34.5" y2="197.7" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
                <line x1="221.5" y1="197.7" x2="145.5" y2="128" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
              </g>
            </svg>
          </ContactCard>

          <ContactCard href="https://www.linkedin.com/in/timotius-simanjuntak" label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256">
              <g>
                <rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></rect>
                <line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
                <line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></line>
                <path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
                <circle cx="88" cy="80" r="12" fill="white"></circle>
              </g>
            </svg>
          </ContactCard>

          <ContactCard href="https://www.instagram.com/timotius.simanjuntak24/" label="Instagram">
            <svg width="80" height="80" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="36" y="36" width="184" height="184" rx="48" stroke="white" strokeWidth="12"/>
              <circle cx="128" cy="128" r="42" stroke="white" strokeWidth="12"/>
              <circle cx="184" cy="72" r="12" fill="white"/>
            </svg>
          </ContactCard>

        </div>
      </div>
    </section>
  );
}

function ContactCard({ 
  href, 
  label, 
  children, 
  className = "" 
}: { 
  href: string; 
  label: string; 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener"
      className={`group bg-zinc-900/40 border border-zinc-800/60 rounded-[2.5rem] p-6 flex flex-col items-center justify-between transition-all duration-300 hover:border-zinc-500 hover:scale-[0.98] ${className}`}
    >
      <div className="outline-none flex flex-col justify-start shrink-0">
        <h3 className="text-white text-[14px] font-bold leading-[1.5em] text-center tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity font-sans">
          {label}
        </h3>
      </div>

      <div className="text-white transform transition-transform duration-500 group-hover:scale-110 flex items-center justify-center flex-grow">
        {children}
      </div>
    </a>
  );
}