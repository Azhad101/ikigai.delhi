import React from 'react';

/**
 * Editorial Section Divider
 * Hairline rule with subtle metadata and optional Enso arc marker.
 */
export function SectionDivider({ sectionNumber, label }) {
  return (
    <div
      className="container"
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}
      aria-hidden="true"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        {sectionNumber && <span className="meta-number">{sectionNumber}</span>}
        {label && <span className="meta-label">// {label}</span>}
      </div>
      <div
        style={{
          flexGrow: 1,
          height: '1px',
          background: 'linear-gradient(90deg, var(--color-hairline-strong) 0%, var(--color-hairline) 70%, transparent 100%)'
        }}
      />
    </div>
  );
}
