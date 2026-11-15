import RichText from "../RichText";

type Tone = "good" | "bad" | "hot" | "accent" | "mut";

export type MiniCell =
  | string
  | {
      text: string;
      tone?: Tone;
    };

export function MiniTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: MiniCell[][];
  caption?: string;
}) {
  return (
    <div>
      <table className="mini-table">
        <thead>
          <tr>
            {head.map((cell, index) => (
              <th key={index}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const text = typeof cell === "string" ? cell : cell.text;
                const tone = typeof cell === "string" ? undefined : cell.tone;
                return (
                  <td
                    key={cellIndex}
                    className={`${cellIndex === 0 ? "body" : ""} ${tone ?? ""}`.trim()}
                  >
                    <RichText text={text} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {caption ? <div className="slide-note">{caption}</div> : null}
    </div>
  );
}

export function Kpis({ items }: { items: string[] }) {
  return (
    <div className="slide-kpis">
      {items.map((item, index) => (
        <span className="kpi" key={index}>
          <RichText text={item} />
        </span>
      ))}
    </div>
  );
}

export function SlideNote({ children }: { children: React.ReactNode }) {
  return <div className="slide-note">{children}</div>;
}

export function Legend({ items }: { items: { color: string; label: string }[] }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginTop: "8px",
        fontFamily: "var(--font-mono)",
        fontSize: "10.5px",
        color: "var(--muted)",
      }}
    >
      {items.map((item) => (
        <span key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: 3,
              background: item.color,
              display: "inline-block",
            }}
          />
          {item.label}
        </span>
      ))}
    </div>
  );
}
