/** Long thin arrow used on primary links, Vuna-style. */
export function ArrowLong({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 16"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 8h60M54 2l8 6-8 6"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
