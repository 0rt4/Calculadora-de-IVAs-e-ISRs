interface ResultCampProps {
  label: string;
  TOTAL: number;
}

export function ResultCamp({ label, TOTAL }: ResultCampProps) {
  return (
      <div className="space-y-2">
          <div
              className="rounded-lg border-2 border-primary bg-primary/5 p-4 cursor-pointer hover:bg-primary/10 transition-colors active:scale-[0.98]"
              role="button"
              tabIndex={0}
          >
              <h2>{label}</h2>
              <p className="text-3xl font-bold text-primary">$ {TOTAL}</p>
              <p className="text-xs text-muted-background mt-1">Click para copiar</p>
          </div>
      </div>
  );
}