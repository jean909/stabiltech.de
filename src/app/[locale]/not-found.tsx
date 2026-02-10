'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-[150px] font-bold text-white leading-none mb-4">404</h1>
        <p className="text-neutral-400 text-xl mb-8">Page not found</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}
