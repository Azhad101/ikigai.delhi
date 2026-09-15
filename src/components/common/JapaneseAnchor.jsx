import React from 'react';

/**
 * Japanese Typography Anchor
 * Renders meaningful Japanese typographic elements paired with English metadata.
 */
export function JapaneseAnchor({ kanji, romaji, translation, vertical = false }) {
  if (vertical) {
    return (
      <div className="japanese-anchor vertical" aria-hidden="true" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span className="text-japanese-vertical">{kanji}</span>
        {romaji && <span className="meta-label" style={{ writingMode: 'vertical-rl', fontSize: '0.65rem' }}>{romaji}</span>}
      </div>
    );
  }

  return (
    <div className="japanese-anchor" aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'baseline', gap: '12px' }}>
      <span className="text-japanese" style={{ fontSize: '1.25rem', color: 'var(--color-accent-vermilion)' }}>
        {kanji}
      </span>
      {romaji && (
        <span className="meta-label" style={{ fontSize: '0.7rem' }}>
          // {romaji} {translation ? `(${translation})` : ''}
        </span>
      )}
    </div>
  );
}
