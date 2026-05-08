'use client';

import { useState, useEffect } from 'react';
import { getColleges } from '@/services/api';
import CollegeCard from '@/components/CollegeCard';
import { Search, MapPin, Star, Briefcase, IndianRupee, Filter, X, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [minRating, setMinRating] = useState('');
  const [minPlacement, setMinPlacement] = useState('');
  const [maxFees, setMaxFees] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [compareList, setCompareList] = useState<any[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const fetchColleges = async () => {
    setLoading(true);
    try {
      const data = await getColleges({ search, state: stateFilter, minRating, minPlacement, maxFees, page, limit: 12 });
      setColleges(data.colleges);
      setTotalPages(Math.ceil(data.total / data.limit));
    } catch (e) {
      console.error('Failed to fetch colleges', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const t = setTimeout(fetchColleges, 500);
    return () => clearTimeout(t);
  }, [search, stateFilter, minRating, minPlacement, maxFees, page]);

  const toggleCompare = (college: any) => {
    setCompareList(prev => {
      if (prev.find(c => c.id === college.id)) return prev.filter(c => c.id !== college.id);
      if (prev.length >= 3) { alert('You can compare up to 3 colleges.'); return prev; }
      return [...prev, college];
    });
  };

  const clearFilters = () => {
    setSearch(''); setStateFilter(''); setMinRating(''); setMinPlacement(''); setMaxFees(''); setPage(1);
  };

  const hasFilters = search || stateFilter || minRating || minPlacement || maxFees;

  return (
    <div className="space-y-10 animate-fade-up">

      {/* ── Hero ── */}
      <section className="relative rounded-3xl overflow-hidden px-5 py-10 sm:p-8 md:p-16 text-center"
        style={{
          background: 'linear-gradient(135deg, #ddf6f4 0%, #ccf2f0 40%, #b8ebe8 70%, #dbeffe 100%)',
          border: '1px solid rgba(168,237,234,0.55)',
          boxShadow: '0 8px 40px rgba(74,144,217,0.14)',
        }}>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none animate-float"
          style={{ background: 'radial-gradient(circle, rgba(168,237,234,0.50), transparent 65%)' }} />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(74,144,217,0.20), transparent 65%)' }} />

        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 pal-badge mb-6 uppercase tracking-wider text-[10px] sm:text-xs">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-mint inline-block shrink-0"
            style={{ background: 'var(--blue-mid)' }} />
          <span className="text-wrap">100+ Premier Engineering Colleges</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 tracking-tight leading-tight"
          style={{ color: 'var(--text-primary)' }}>
          Discover India's{' '}
          <span className="gradient-text">Elite</span>{' '}
          Institutions
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 font-medium"
          style={{ color: 'var(--text-secondary)' }}>
          Make data-driven decisions. Compare top-rated engineering colleges by placements, fees, and real student ratings.
        </p>

        {/* Search */}
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="relative flex items-center rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(240,255,254,0.92)',
              border: '1.5px solid rgba(74,144,217,0.30)',
              boxShadow: '0 4px 20px rgba(74,144,217,0.12)',
              backdropFilter: 'blur(12px)',
            }}>
            <Search className="ml-5 shrink-0" size={22} style={{ color: 'var(--blue-mid)' }} />
            <input
              id="hero-search"
              type="text"
              placeholder="Search IITs, NITs, BITS, VIT, SRM…"
              className="w-full min-w-0 bg-transparent pl-3 sm:pl-4 pr-3 sm:pr-4 py-4 text-sm sm:text-base font-medium focus:outline-none"
              style={{ color: 'var(--text-primary)' }}
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
            />
            <button className="md:hidden shrink-0 mr-3 p-2 rounded-xl" onClick={() => setShowFilters(!showFilters)}
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex justify-center gap-6 sm:gap-10 mt-10 flex-wrap">
          {[{ label: 'Colleges', value: '100+' }, { label: 'States', value: '20+' }, { label: 'Avg Placement', value: '85%' }].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Layout ── */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}
        <aside className={`lg:w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="pal-card p-6 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Filter size={16} style={{ color: 'var(--blue-mid)' }} />
                Refine Search
              </h2>
              <div className="flex items-center gap-2">
                {hasFilters && (
                  <button onClick={clearFilters}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                    style={{ color: 'var(--blue-deep)', background: 'var(--bg-elevated)' }}>
                    Clear
                  </button>
                )}
                {showFilters && (
                  <button onClick={() => setShowFilters(false)} className="lg:hidden" style={{ color: 'var(--text-muted)' }}>
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-5">
              {[
                { id: 'filter-state', label: 'State', placeholder: 'e.g. Maharashtra', icon: <MapPin size={15} style={{ color: 'var(--blue-mid)' }} />, value: stateFilter, onChange: (v: string) => { setStateFilter(v); setPage(1); }, type: 'text' },
                { id: 'filter-rating', label: 'Min Rating', placeholder: '4.5', icon: <Star size={15} style={{ color: '#b07800' }} />, value: minRating, onChange: (v: string) => { setMinRating(v); setPage(1); }, type: 'number' },
                { id: 'filter-placement', label: 'Min Placement %', placeholder: '90', icon: <Briefcase size={15} style={{ color: 'var(--blue-mid)' }} />, value: minPlacement, onChange: (v: string) => { setMinPlacement(v); setPage(1); }, type: 'number' },
                { id: 'filter-fees', label: 'Max Total Fees (₹)', placeholder: '1000000', icon: <IndianRupee size={15} style={{ color: '#16a34a' }} />, value: maxFees, onChange: (v: string) => { setMaxFees(v); setPage(1); }, type: 'number' },
              ].map(f => (
                <div key={f.id} className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{f.label}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">{f.icon}</span>
                    <input id={f.id} type={f.type} placeholder={f.placeholder}
                      className="pal-input w-full pl-9 pr-4 py-2.5 text-sm"
                      value={f.value} onChange={e => f.onChange(e.target.value)} />
                  </div>
                </div>
              ))}

              <button onClick={clearFilters} className="pal-btn-ghost w-full py-2.5 text-sm mt-1">
                Reset All Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Results */}
        <section className="flex-1 min-w-0">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="skeleton h-72" style={{ animationDelay: `${i * 0.07}s` }} />
              ))}
            </div>
          ) : colleges.length > 0 ? (
            <div className="space-y-8">
              <p className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                Showing <span style={{ color: 'var(--blue-mid)' }}>{colleges.length}</span> results
                {hasFilters && ' · filtered'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {colleges.map((college, i) => (
                  <div key={college.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                    <CollegeCard college={college} onCompareToggle={toggleCompare}
                      isCompared={compareList.some(c => c.id === college.id)} />
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
                  <button id="btn-prev-page" disabled={page === 1}
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    className="pal-btn-ghost px-4 sm:px-5 py-2 sm:py-2.5 text-sm disabled:opacity-40">
                    ← Prev
                  </button>
                  <span className="text-sm font-semibold px-4 py-2 rounded-xl"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)' }}>
                    {page} / {totalPages}
                  </span>
                  <button id="btn-next-page" disabled={page === totalPages}
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    className="pal-btn-ghost px-5 py-2.5 text-sm disabled:opacity-40">
                    Next →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-28 pal-card rounded-3xl">
              <div className="inline-flex p-5 rounded-2xl mb-5" style={{ background: 'var(--bg-elevated)' }}>
                <Search size={30} style={{ color: 'var(--blue-mid)' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>No results found</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>No colleges match your current filters.</p>
              <button onClick={clearFilters} className="pal-btn-primary px-7 py-3 text-sm">Clear Filters</button>
            </div>
          )}
        </section>
      </div>

      {/* Compare floating bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-5 px-6 py-3 rounded-full shadow-xl animate-fade-up"
          style={{
            background: 'rgba(240,255,254,0.96)',
            backdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(74,144,217,0.35)',
            boxShadow: '0 8px 32px rgba(74,144,217,0.25)',
          }}>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'var(--blue-mid)' }}>
              {compareList.length}
            </span>
            <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/compare?ids=${compareList.map(c => c.id).join(',')}`}>
              <button id="btn-compare-now" className="pal-btn-primary px-6 py-2.5 text-sm rounded-full">
                Compare Now →
              </button>
            </Link>
            <button onClick={() => setCompareList([])}
              className="p-2 rounded-full transition-colors"
              style={{ color: 'var(--text-muted)' }}
              title="Clear selection">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
