export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-display text-2xl leading-none tracking-tight text-primary">IO</span>
      {!compact && (
        <span className="flex flex-col">
          <span className="font-display text-[13px] uppercase leading-tight tracking-[0.22em] text-foreground">
            Ibitoye Olamide Fashionhome
          </span>
          <span className="text-[8px] uppercase tracking-[0.32em] text-muted-foreground">
            Made For You
          </span>
        </span>
      )}
    </div>
  );
}
