type KelcisMarkProps = {
  className?: string;
};

/**
 * The Kelcis piano-key K. Master geometry — do not redraw; recolor via
 * `currentColor` and resize via className.
 */
export function KelcisMark({ className }: KelcisMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="6" y="6" width="10" height="88" />
      <rect x="19" y="6" width="10" height="88" />
      <rect x="32" y="31" width="10" height="38" />
      <rect x="45" y="26" width="10" height="23" />
      <rect x="45" y="51" width="10" height="23" />
      <rect x="58" y="19" width="10" height="21" />
      <rect x="58" y="60" width="10" height="21" />
      <rect x="71" y="12" width="10" height="19" />
      <rect x="71" y="69" width="10" height="19" />
      <rect x="84" y="6" width="10" height="17" />
      <rect x="84" y="77" width="10" height="17" />
    </svg>
  );
}
