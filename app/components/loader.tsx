// Internal Dependencies
import { cn } from "@/lib/utils";

enum SpeedTiming {
  normal = "0.9s",
  slow = "2s",
  fast = "0.5s",
  default = "1s",
}

type E = keyof typeof SpeedTiming;

interface Loader extends React.ComponentProps<"svg"> {
  speed?: E;
}

const Loader = ({ className, speed = "default" }: Loader) => {
  return (
    <svg
      className={cn(
        "size-5 text-slate-600",
        { "animate-spin": !speed },
        className,
      )}
      style={{ animation: `spin ${SpeedTiming[speed]} linear infinite` }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export default Loader;
