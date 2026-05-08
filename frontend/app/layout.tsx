import './globals.css';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'FindMyCollege – Elite Indian Institutions',
  description: 'Discover and compare top-rated engineering colleges across India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>

        {/* Ambient blobs */}
        <div className="fixed top-[-12%] left-[-8%] w-[42%] h-[42%] glow-blob"
          style={{ background: 'rgba(168,237,234,0.35)' }} />
        <div className="fixed bottom-[-12%] right-[-8%] w-[38%] h-[38%] glow-blob"
          style={{ background: 'rgba(74,144,217,0.18)' }} />
        <div className="fixed top-[45%] right-[3%] w-[22%] h-[22%] glow-blob"
          style={{ background: 'rgba(168,237,234,0.20)' }} />

        {/* Navbar */}
        <header className="fixed top-0 w-full z-50 pal-glass" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">

              <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
                <div className="p-1.5 sm:p-2 shrink-0 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #4a90d9, #1e6fa8)' }}>
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" color="#ffffff" />
                </div>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Find<span className="gradient-text">My</span>College
                </span>
              </Link>

              <nav className="flex items-center gap-1">
                <Link href="/" className="nav-link">
                  Browse
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          {children}
        </main>

        <footer className="border-t py-6 text-center text-sm"
          style={{ borderColor: 'var(--border-light)', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} FindMyCollege · Built for India's future engineers
        </footer>
      </body>
    </html>
  );
}
