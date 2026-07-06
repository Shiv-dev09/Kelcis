/**
 * Wireframe line illustrations, drawn with strokes only and tinted via
 * currentColor. Decorative — always rendered with aria-hidden.
 */

type WireProps = {
  className?: string;
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 0.7,
  fill: "none",
} as const;

export function WireSphere({ className }: WireProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g {...stroke}>
        <circle cx="100" cy="100" r="88" />
        <ellipse cx="100" cy="100" rx="88" ry="66" />
        <ellipse cx="100" cy="100" rx="88" ry="40" />
        <ellipse cx="100" cy="100" rx="88" ry="14" />
        <ellipse cx="100" cy="100" rx="66" ry="88" />
        <ellipse cx="100" cy="100" rx="40" ry="88" />
        <ellipse cx="100" cy="100" rx="14" ry="88" />
      </g>
    </svg>
  );
}

export function WireCapsule({ className }: WireProps) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
      <g {...stroke} transform="rotate(24 100 130)">
        <path d="M60 70 a40 40 0 0 1 80 0 v120 a40 40 0 0 1 -80 0 Z" />
        <ellipse cx="100" cy="70" rx="40" ry="12" />
        <ellipse cx="100" cy="110" rx="40" ry="12" />
        <ellipse cx="100" cy="150" rx="40" ry="12" />
        <ellipse cx="100" cy="190" rx="40" ry="12" />
        <path d="M74 38 v184 M100 30 v200 M126 38 v184" />
      </g>
    </svg>
  );
}

export function WireCoil({ className }: WireProps) {
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true">
      <g {...stroke} transform="rotate(-18 100 120)">
        <ellipse cx="100" cy="40" rx="52" ry="16" />
        <ellipse cx="100" cy="72" rx="52" ry="16" />
        <ellipse cx="100" cy="104" rx="52" ry="16" />
        <ellipse cx="100" cy="136" rx="52" ry="16" />
        <ellipse cx="100" cy="168" rx="52" ry="16" />
        <ellipse cx="100" cy="200" rx="52" ry="16" />
        <path d="M48 40 v160 M152 40 v160" />
      </g>
    </svg>
  );
}

export function WireFan({ className }: WireProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M120 24 C 40 60, 16 130, 12 192" />
        <path d="M120 24 C 62 66, 42 134, 40 192" />
        <path d="M120 24 C 84 72, 72 138, 70 192" />
        <path d="M120 24 C 106 78, 100 140, 100 192" />
        <path d="M120 24 C 134 78, 140 140, 140 192" />
        <path d="M120 24 C 156 72, 168 138, 170 192" />
        <path d="M120 24 C 178 66, 198 134, 200 192" />
        <path d="M120 24 C 200 60, 224 130, 228 192" />
        <ellipse cx="120" cy="192" rx="108" ry="6" />
      </g>
    </svg>
  );
}

export function WireArcs({ className }: WireProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M20 180 A100 100 0 0 1 220 180" />
        <path d="M40 180 A80 80 0 0 1 200 180" />
        <path d="M60 180 A60 60 0 0 1 180 180" />
        <path d="M80 180 A40 40 0 0 1 160 180" />
        <path d="M100 180 A20 20 0 0 1 140 180" />
        <path d="M120 180 V60 M120 40 V20" />
      </g>
    </svg>
  );
}
