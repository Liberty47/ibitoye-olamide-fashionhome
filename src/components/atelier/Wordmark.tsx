export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-display text-2xl leading-none tracking-tight text-primary">IO</span>
      {!compact && (
        <span className="font-display text-[13px] uppercase leading-tight tracking-[0.22em] text-foreground">
          Ibitoye Olamide Fashionhome
        </span>
      )}
    </div>
  );
}
