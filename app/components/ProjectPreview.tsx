// A small illustrated "browser window" for each featured project.
// Swap in a real screenshot later by passing `image` (a file in /public).

type Kind = "orbit" | "ledger" | "pulse" | "snip";

function Body({ kind }: { kind: Kind }) {
  if (kind === "orbit") {
    const cols = [
      ["w-4/5", "w-3/5"],
      ["w-2/3", "w-4/5", "w-1/2"],
      ["w-3/4"],
    ];
    return (
      <div className="grid h-full grid-cols-3 gap-2">
        {cols.map((c, i) => (
          <div key={i} className="rounded-md bg-[#eef2f7] p-1.5">
            <div className="mb-2 h-1.5 w-8 rounded bg-[#c9d3e0]" />
            <div className="space-y-1.5">
              {c.map((w, j) => (
                <div
                  key={j}
                  className={`rounded-md bg-white p-1.5 shadow-sm ${i === 1 && j === 0 ? "ring-2 ring-[#12b886]" : ""}`}
                >
                  <div className={`h-1.5 rounded bg-[#0f1e33]/70 ${w}`} />
                  <div className="mt-1 h-1 w-1/2 rounded bg-[#c9d3e0]" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "ledger") {
    const bars = [45, 70, 55, 85, 60, 95, 75];
    return (
      <div className="grid h-full grid-cols-[1.4fr_1fr] gap-3">
        <div className="flex flex-col rounded-md bg-[#eef2f7] p-2">
          <div className="h-1.5 w-12 rounded bg-[#c9d3e0]" />
          <div className="mt-auto flex h-[70%] items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${i === 5 ? "bg-[#f5a524]" : "bg-[#0e7c86]"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid flex-1 place-items-center rounded-md bg-[#eef2f7]">
            <div
              className="h-14 w-14 rounded-full"
              style={{ background: "conic-gradient(#0e7c86 0 55%, #f5a524 55% 80%, #c9d3e0 80% 100%)" }}
            >
              <div className="m-3 h-8 w-8 rounded-full bg-[#eef2f7]" />
            </div>
          </div>
          <div className="rounded-md bg-[#fff6e5] p-1.5">
            <div className="h-1.5 w-3/4 rounded bg-[#f5a524]" />
          </div>
        </div>
      </div>
    );
  }
  if (kind === "pulse") {
    return (
      <div className="space-y-2">
        {[0, 1].map((i) => (
          <div key={i} className="rounded-md bg-[#eef2f7] p-2">
            <div className="flex items-center gap-1.5">
              <div className={`h-5 w-5 rounded-full ${i === 0 ? "bg-[#f5a524]" : "bg-[#0e7c86]"}`} />
              <div className="h-1.5 w-16 rounded bg-[#0f1e33]/70" />
            </div>
            {i === 0 && <div className="mt-2 h-12 rounded bg-gradient-to-br from-[#bfe6e9] to-[#fde3b0]" />}
            <div className="mt-2 h-1 w-4/5 rounded bg-[#c9d3e0]" />
            <div className="mt-2 flex gap-2">
              <div className="h-1.5 w-6 rounded bg-[#e85d75]" />
              <div className="h-1.5 w-6 rounded bg-[#c9d3e0]" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col justify-center gap-4 px-4">
      <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm ring-1 ring-[#dce3ec]">
        <div className="h-1.5 flex-1 rounded bg-[#c9d3e0]" />
        <div className="rounded-md bg-[#0e7c86] px-3 py-2">
          <div className="h-1.5 w-10 rounded bg-white/90" />
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-[#e3f3f4] p-3">
        <div className="h-1.5 w-20 rounded bg-[#0a5f67]" />
        <div className="h-1.5 w-8 rounded bg-[#0a5f67]/40" />
      </div>
      <div className="flex h-20 items-end gap-1.5">
        {[30, 50, 40, 80, 65, 100, 70, 90].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-[#0e7c86]/70" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectPreview({ kind, url, image }: { kind: Kind; url: string; image?: string }) {
  return (
    <div className="light-scope overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-30px_rgba(15,30,51,0.45)] ring-1 ring-[#dce3ec]">
      <div className="flex items-center gap-2 border-b border-[#dce3ec] bg-[#f5f7fa] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5a524]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#12b886]" />
        <span className="ml-2 flex-1 truncate rounded bg-white px-2 py-0.5 text-[11px] text-[#5b6b82] ring-1 ring-[#dce3ec]">
          {url}
        </span>
      </div>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="aspect-[16/10] w-full object-cover" />
      ) : (
        <div className="aspect-[16/10] p-4">
          <Body kind={kind} />
        </div>
      )}
    </div>
  );
}
