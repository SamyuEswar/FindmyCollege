import Link from 'next/link';
import { MapPin, Star, IndianRupee, Building2, ArrowRight, PlusCircle, CheckCircle2 } from 'lucide-react';

export default function CollegeCard({ college, onCompareToggle, isCompared }: {
  college: any; onCompareToggle: any; isCompared: boolean;
}) {
  return (
    <div className="pal-card flex flex-col overflow-hidden group">

      {/* Mint-to-blue accent strip */}
      <div className="h-1.5 w-full"
        style={{ background: 'linear-gradient(90deg, #a8edea, #4a90d9, #1e6fa8)' }} />

      <div className="p-5 flex flex-col flex-grow gap-4">

        {/* Name + Rating */}
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-base font-bold leading-snug line-clamp-2 transition-colors duration-200"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--blue-mid)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
          >
            {college.name}
          </h2>
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold"
            style={{ background: 'rgba(245,166,35,0.12)', color: '#b07800', border: '1px solid rgba(245,166,35,0.28)' }}>
            <Star size={12} fill="currentColor" />
            {college.rating}
          </div>
        </div>

        {/* Info rows */}
        <ul className="space-y-2.5 flex-grow">
          <li className="flex items-center gap-2.5 text-sm">
            <span className="p-1.5 rounded-lg shrink-0" style={{ background: 'var(--bg-elevated)' }}>
              <MapPin size={14} style={{ color: 'var(--blue-mid)' }} />
            </span>
            <span className="line-clamp-1 font-medium" style={{ color: 'var(--text-secondary)' }}>
              {college.location}, {college.state}
            </span>
          </li>
          <li className="flex items-center gap-2.5 text-sm">
            <span className="p-1.5 rounded-lg shrink-0" style={{ background: 'var(--bg-elevated)' }}>
              <IndianRupee size={14} style={{ color: '#16a34a' }} />
            </span>
            <span className="font-bold" style={{ color: '#16a34a' }}>
              ₹{college.fees.toLocaleString('en-IN')}
              <span className="font-normal text-xs ml-1" style={{ color: 'var(--text-muted)' }}>Total Fees</span>
            </span>
          </li>
          <li className="flex items-center gap-2.5 text-sm">
            <span className="p-1.5 rounded-lg shrink-0" style={{ background: 'var(--bg-elevated)' }}>
              <Building2 size={14} style={{ color: 'var(--mint-deep)' }} />
            </span>
            <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>
              {college.type || 'Engineering College'}
            </span>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex gap-2.5 pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
          <Link href={`/college/${college.id}`} className="flex-1">
            <button id={`btn-view-${college.id}`}
              className="pal-btn-primary w-full py-2.5 text-sm flex items-center justify-center gap-1.5">
              View Details <ArrowRight size={14} />
            </button>
          </Link>
          <button
            id={`btn-compare-${college.id}`}
            onClick={() => onCompareToggle(college)}
            className="px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200"
            style={isCompared
              ? { background: 'rgba(168,237,234,0.30)', border: '1.5px solid rgba(78,205,196,0.50)', color: '#1a8c85' }
              : { background: 'var(--bg-elevated)', border: '1.5px solid var(--border-light)', color: 'var(--text-secondary)' }
            }
          >
            {isCompared
              ? <><CheckCircle2 size={15} /> Added</>
              : <><PlusCircle size={15} /> Compare</>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
