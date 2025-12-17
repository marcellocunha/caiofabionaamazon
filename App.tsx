import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingOverlay } from './components/LoadingOverlay';
import { LinkCard } from './components/LinkCard';
import { Banner } from './components/Banner';
import { SocialFooter } from './components/SocialFooter';
import { LINK_GROUPS, SOCIALS, BANNER_IMAGE_URL, PROFILE_INFO } from './constants';
import { ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading time for the entrance effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">

      {/* Background Gradient / Atmosphere */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 opacity-80 pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/0 to-transparent pointer-events-none" />

      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && <LoadingOverlay key="loader" />}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 px-4 py-12 sm:py-16 flex flex-col items-center justify-center min-h-screen w-full">

        {/* Profile Header (Optional if Banner covers it, but good for branding) */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 max-w-lg mx-auto"
          >
            {/* If you prefer just the banner, you can remove this avatar section */}
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-40 animate-pulse"></div>
              <img
                src={PROFILE_INFO.avatar}
                alt={PROFILE_INFO.name}
                className="relative w-24 h-24 rounded-full border-2 border-white/20 object-cover shadow-xl"
              />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              {PROFILE_INFO.name}
            </h1>
            <p className="mt-2 text-gray-400 text-sm font-light max-w-xs mx-auto leading-relaxed whitespace-pre-line">
              {PROFILE_INFO.bio}
            </p>
          </motion.div>
        )}

        {/* The Hero Banner */}
        {!loading && (
          <div className="w-full">
            <Banner imageUrl={BANNER_IMAGE_URL} />
          </div>
        )}

        {/* Link Tree Grid */}
        <div className="w-full mt-6 space-y-8 max-w-xl">
          {!loading && LINK_GROUPS.map((group, groupIndex) => (
            <div key={group.title} className="w-full">
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (groupIndex * 0.1) }}
                className="text-lg sm:text-xl font-semibold text-white/90 mb-4 px-2 border-l-4 border-purple-500 pl-3"
              >
                {group.title}
              </motion.h2>
              <div className="space-y-4">
                {group.items.map((link, index) => (
                  <LinkCard key={link.id} item={link} index={(groupIndex * 5) + index} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {!loading && (
          <>
            <SocialFooter items={SOCIALS} />
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center text-xs text-slate-600 mt-auto"
            >
              <div className="flex items-center justify-center gap-1">
                © {new Date().getFullYear()} Caio Fábio D'Araújo Filho
              </div>
            </motion.footer>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
