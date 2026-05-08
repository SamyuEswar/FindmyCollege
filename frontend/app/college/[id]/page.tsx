'use client';

import { useEffect, useState } from 'react';
import { getCollegeById } from '@/services/api';
import { MapPin, Star, IndianRupee, ArrowLeft, BookOpen, Briefcase, GraduationCap, Clock } from 'lucide-react';
import Link from 'next/link';

export default function CollegeDetail({ params }: { params: { id: string } }) {
  const [college, setCollege] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCollegeById(Number(params.id))
      .then(data => { if (!data) setError(true); else setCollege(data); })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-4">
      <div className="flex gap-2">
        {[0,1,2].map(i => (
          <div key={i} className="w-3 h-3 rounded-full animate-bounce"
            style={{ background: 'var(--blue-mid)', animationDelay: `${i*0.15}s` }} />
        ))}
      </div>
      <p className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>Loading college…</p>
    </div>
  );

  if (error || !college) return (
    <div className="text-center py-28 animate-fade-up">
      <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Error loading college details</h2>
      <Link href="/" className="text-sm font-semibold underline" style={{ color: 'var(--blue-deep)' }}>Return Home</Link>
    </div>
  );

  return (
    <div className="animate-fade-up max-w-5xl mx-auto space-y-8">

      {/* Back */}
      <Link href="/">
        <button className="pal-btn-ghost flex items-center gap-2 px-4 py-2.5 text-sm">
          <ArrowLeft size={16} /> Back to Search
        </button>
      </Link>

      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden p-8 md:p-12"
        style={{
          background: 'linear-gradient(135deg, #ddf6f4 0%, #ccf2f0 40%, #b8ebe8 70%, #dbeffe 100%)',
          border: '1px solid rgba(168,237,234,0.55)',
          boxShadow: '0 8px 40px rgba(74,144,217,0.14)',
        }}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,237,234,0.50), transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(74,144,217,0.18), transparent 70%)' }} />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 pal-badge mb-5 text-xs uppercase tracking-widest">
            <GraduationCap size={14} /> Elite Institution
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {college.name}
          </h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: 'rgba(240,255,254,0.85)', color: 'var(--text-secondary)', border: '1px solid var(--border-light)' }}>
              <MapPin size={16} style={{ color: 'var(--blue-mid)' }} />
              {college.location}, {college.state}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: 'rgba(240,255,254,0.85)', color: '#16a34a', border: '1px solid rgba(34,197,94,0.25)' }}>
              <IndianRupee size={16} /> ₹{college.fees.toLocaleString('en-IN')} Total
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: 'rgba(245,166,35,0.10)', color: '#b07800', border: '1px solid rgba(245,166,35,0.25)' }}>
              <Star size={16} fill="currentColor" /> {college.rating} / 5.0
            </div>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Courses */}
        <div className="pal-card p-7">
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2.5" style={{ color: 'var(--text-primary)' }}>
            <div className="p-2 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
              <BookOpen size={18} style={{ color: 'var(--blue-mid)' }} />
            </div>
            Offered Courses
          </h2>
          <div className="space-y-3">
            {college.courses?.map((c: any) => (
              <div key={c.id}
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl transition-all duration-200 cursor-default"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-mid)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--bg-hover)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--bg-elevated)';
                }}
              >
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{c.name}</span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg shrink-0"
                  style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)' }}>
                  <Clock size={12} />
                  <span className="text-xs font-semibold">{c.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placements */}
        <div className="pal-card p-7">
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2.5" style={{ color: 'var(--text-primary)' }}>
            <div className="p-2 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
              <Briefcase size={18} style={{ color: 'var(--blue-mid)' }} />
            </div>
            Placement Statistics
          </h2>
          {college.placements?.map((p: any) => (
            <div key={p.id} className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl text-center"
                style={{ background: 'linear-gradient(135deg, #ddf6f4, #ccf2f0)', border: '1px solid var(--border-light)' }}>
                <div className="text-2xl font-extrabold mb-1" style={{ color: '#16a34a' }}>
                  {p.averagePackage}<span className="text-base font-semibold ml-1">LPA</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Avg Package</div>
              </div>
              <div className="p-5 rounded-2xl text-center"
                style={{ background: 'linear-gradient(135deg, #dbeffe, #b8dffd)', border: '1px solid var(--border-light)' }}>
                <div className="text-2xl font-extrabold mb-1 gradient-text">{p.placementPercentage}%</div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Placement Rate</div>
              </div>
              <div className="col-span-2 mt-1">
                <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                  <div className="h-full rounded-full"
                    style={{ width: `${p.placementPercentage}%`, background: 'linear-gradient(90deg, #a8edea, #4a90d9)' }} />
                </div>
                <p className="text-xs mt-1.5 text-right font-semibold" style={{ color: 'var(--text-muted)' }}>
                  {p.placementPercentage}% students placed
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center pb-4">
        <Link href="/">
          <button className="pal-btn-primary px-8 py-3 text-sm">← Explore More Colleges</button>
        </Link>
      </div>
    </div>
  );
}
