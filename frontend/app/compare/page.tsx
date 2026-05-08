'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { compareColleges } from '@/services/api';
import { ArrowLeft, Star, IndianRupee, Briefcase, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const searchParams = useSearchParams();
  const idsParam = searchParams.get('ids');
  const [colleges, setColleges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      if (!idsParam) { setError('No colleges selected for comparison.'); setLoading(false); return; }
      const ids = idsParam.split(',').map(Number);
      if (ids.length < 2 || ids.length > 3) { setError('Please select 2 or 3 colleges to compare.'); setLoading(false); return; }
      try {
        const data = await compareColleges(ids);
        setColleges(data);
      } catch { setError('Failed to fetch comparison data.'); }
      finally { setLoading(false); }
    };
    fetch();
  }, [idsParam]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-4">
      <div className="flex gap-2">
        {[0,1,2].map(i => (
          <div key={i} className="w-3 h-3 rounded-full animate-bounce"
            style={{ background: 'var(--blue-mid)', animationDelay: `${i*0.15}s` }} />
        ))}
      </div>
      <p className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>Analyzing institutions…</p>
    </div>
  );

  if (error) return (
    <div className="text-center py-28 animate-fade-up">
      <div className="inline-flex p-5 rounded-2xl mb-5" style={{ background: 'var(--bg-elevated)' }}>
        <Trophy size={30} style={{ color: 'var(--blue-mid)' }} />
      </div>
      <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{error}</h2>
      <Link href="/" className="text-sm font-semibold underline" style={{ color: 'var(--blue-deep)' }}>Return Home</Link>
    </div>
  );

  /* Per-college accent dot colors */
  const dots = ['#4a90d9', '#4ecdc4', '#a8edea'];

  const rows: { label: string; icon: React.ReactNode; render: (c: any) => React.ReactNode }[] = [
    {
      label: 'Location',
      icon: <MapPin size={16} style={{ color: 'var(--blue-mid)' }} />,
      render: c => <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{c.location}, {c.state}</span>,
    },
    {
      label: 'Total Fees',
      icon: <IndianRupee size={16} style={{ color: '#16a34a' }} />,
      render: c => <span className="font-bold" style={{ color: '#16a34a' }}>₹{c.fees.toLocaleString('en-IN')}</span>,
    },
    {
      label: 'Rating',
      icon: <Star size={16} style={{ color: '#b07800' }} />,
      render: c => (
        <div className="flex items-center gap-1.5">
          <Star size={14} fill="#f5a623" stroke="none" />
          <span className="font-bold" style={{ color: '#b07800' }}>{c.rating}</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>/ 5.0</span>
        </div>
      ),
    },
    {
      label: 'Avg Package',
      icon: <Briefcase size={16} style={{ color: 'var(--blue-mid)' }} />,
      render: c => (
        <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
          {c.placements?.[0]?.averagePackage ?? '—'}
          <span className="text-xs font-normal ml-1" style={{ color: 'var(--text-muted)' }}>LPA</span>
        </span>
      ),
    },
    {
      label: 'Placement Rate',
      icon: <Trophy size={16} style={{ color: 'var(--mint-deep)' }} />,
      render: c => {
        const pct = c.placements?.[0]?.placementPercentage ?? 0;
        return (
          <div className="flex flex-col gap-1.5">
            <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{pct}%</span>
            <div className="w-full max-w-[120px] h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #a8edea, #4a90d9)' }} />
            </div>
          </div>
        );
      },
    },
  ];

  const cols = colleges.length;

  return (
    <div className="animate-fade-up max-w-6xl mx-auto space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link href="/">
          <button className="pal-btn-ghost flex items-center gap-2 px-4 py-2.5 text-sm">
            <ArrowLeft size={16} /> Back to Search
          </button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Compare <span className="gradient-text">Colleges</span>
        </h1>
      </div>

      {/* Table */}
      <div className="pal-card overflow-hidden rounded-3xl">
        <div className="overflow-x-auto w-full pb-2">
          <div style={{ minWidth: `${160 + cols * 240}px` }}>
            {/* College headers */}
            <div className="grid" style={{ gridTemplateColumns: `160px repeat(${cols}, 1fr)` }}>
              <div className="p-5 border-b border-r" style={{ borderColor: 'var(--border-light)', background: 'var(--bg-elevated)' }} />
              {colleges.map((c, idx) => (
                <div key={c.id} className="p-5 border-b text-center"
                  style={{
                    borderColor: 'var(--border-light)',
                    borderRight: idx < cols - 1 ? '1px solid var(--border-light)' : 'none',
                    background: 'var(--bg-surface)',
                  }}>
                  <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ background: dots[idx] }} />
                  <h3 className="font-bold text-sm md:text-base leading-snug" style={{ color: 'var(--text-primary)' }}>{c.name}</h3>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{c.state}</p>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {rows.map((row, rIdx) => (
              <div key={row.label} className="grid"
                style={{
                  gridTemplateColumns: `160px repeat(${cols}, 1fr)`,
                  background: rIdx % 2 === 0 ? 'transparent' : 'rgba(168,237,234,0.12)',
                }}>
                <div className="p-4 md:p-5 flex items-center gap-2.5 border-r"
                  style={{
                    borderColor: 'var(--border-light)',
                    borderBottom: rIdx < rows.length - 1 ? '1px solid var(--border-light)' : 'none',
                  }}>
                  <div className="shrink-0">{row.icon}</div>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                </div>
                {colleges.map((c, idx) => (
                  <div key={c.id} className="p-4 md:p-5 text-sm"
                    style={{
                      borderColor: 'var(--border-light)',
                      borderRight: idx < cols - 1 ? '1px solid var(--border-light)' : 'none',
                      borderBottom: rIdx < rows.length - 1 ? '1px solid var(--border-light)' : 'none',
                    }}>
                    {row.render(c)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pb-4">
        <Link href="/">
          <button className="pal-btn-primary px-8 py-3 text-sm">← Browse More Colleges</button>
        </Link>
      </div>
    </div>
  );
}
