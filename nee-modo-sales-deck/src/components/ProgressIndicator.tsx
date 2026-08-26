interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export default function ProgressIndicator({
  current,
  total,
}: ProgressIndicatorProps) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 z-30 w-full md:bottom-auto md:top-0">
      <div className="h-0.5 w-full bg-border/30">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
