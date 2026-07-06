import Link from "next/link";
import { KelcisMark } from "./KelcisMark";

type KelcisLockupProps = {
  className?: string;
};

export function KelcisLockup({ className }: KelcisLockupProps) {
  return (
    <Link
      href="/"
      aria-label="Kelcis — home"
      className={`link-arrow inline-flex items-center gap-3 ${className ?? ""}`}
    >
      <KelcisMark className="h-7 w-7" />
      <span className="font-logo text-lg font-medium tracking-[0.3em]">
        KELCIS
      </span>
    </Link>
  );
}
