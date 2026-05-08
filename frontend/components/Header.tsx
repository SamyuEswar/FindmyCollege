import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-900/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary-600 dark:text-primary-500 font-bold text-xl transition-transform hover:scale-105">
          <GraduationCap size={28} />
          <span>Find my college</span>
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="font-medium hover:text-primary-500 transition-colors">
            Browse
          </Link>
        </nav>
      </div>
    </header>
  );
}
