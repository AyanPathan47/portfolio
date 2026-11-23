"use client"

// Temporary illustrated previews for project cards, shown until real screenshots
// exist. They are abstract wireframes (no real UI or data) and are replaced
// automatically when a project defines `image`.

const palettes = {
  blue: { solid: "bg-blue-400", mid: "bg-blue-500/40", soft: "bg-blue-500/15", border: "border-blue-500/30", text: "text-blue-300" },
  purple: { solid: "bg-purple-400", mid: "bg-purple-500/40", soft: "bg-purple-500/15", border: "border-purple-500/30", text: "text-purple-300" },
  green: { solid: "bg-green-400", mid: "bg-green-500/40", soft: "bg-green-500/15", border: "border-green-500/30", text: "text-green-300" },
  orange: { solid: "bg-orange-400", mid: "bg-orange-500/40", soft: "bg-orange-500/15", border: "border-orange-500/30", text: "text-orange-300" },
  cyan: { solid: "bg-cyan-400", mid: "bg-cyan-500/40", soft: "bg-cyan-500/15", border: "border-cyan-500/30", text: "text-cyan-300" },
}

// ----- primitives -----

function Line({ w = "100%", className = "bg-zinc-700" }) {
  return <div className={`h-1.5 rounded-full ${className}`} style={{ width: w }} />
}

function Phone({ children, className = "" }) {
  return (
    <div
      className={`w-[104px] h-[230px] shrink-0 rounded-[20px] border border-zinc-700/80 bg-zinc-950/90 p-2.5 shadow-xl shadow-black/40 ${className}`}
    >
      <div className="mx-auto mb-2.5 h-1 w-8 rounded-full bg-zinc-800" />
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Browser({ children, className = "" }) {
  return (
    <div
      className={`w-[290px] h-[230px] shrink-0 rounded-xl border border-zinc-700/80 bg-zinc-950/90 shadow-xl shadow-black/40 overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-1 border-b border-zinc-800 px-2.5 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
      </div>
      <div className="p-3">{children}</div>
    </div>
  )
}

// ----- one wireframe per project -----

function Memroix({ c }) {
  return (
    <>
      <Phone className="translate-y-5">
        <div className="flex items-center justify-between">
          <Line w="42px" className="bg-zinc-600" />
          <div className={`h-3.5 w-3.5 rounded-full ${c.solid}`} />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex gap-1.5">
            <div className="flex flex-col items-center">
              <div className={`h-2 w-2 rounded-full ${c.solid}`} />
              <div className="mt-0.5 w-px flex-1 bg-zinc-700" />
            </div>
            <div className={`flex-1 space-y-1.5 rounded-md border ${c.border} ${c.soft} p-1.5`}>
              <Line w="80%" className="bg-zinc-500" />
              <Line w="55%" />
              {i === 0 && <div className={`h-6 rounded ${c.mid}`} />}
            </div>
          </div>
        ))}
      </Phone>
      <Phone>
        <Line w="46px" className="bg-zinc-600" />
        <div className="relative mx-auto mt-3 flex h-14 w-14 items-center justify-center">
          <div className={`absolute inset-0 rounded-full border ${c.border}`} />
          <div className={`absolute inset-2 rounded-full ${c.soft}`} />
          <div className={`h-6 w-6 rounded-full ${c.solid}`} />
        </div>
        <div className="flex h-8 items-center justify-center gap-[3px]">
          {[6, 14, 22, 12, 28, 18, 8, 24, 14, 6].map((h, i) => (
            <div key={i} className={`w-[3px] rounded-full ${c.mid}`} style={{ height: h }} />
          ))}
        </div>
        <Line w="90%" />
        <Line w="70%" />
      </Phone>
    </>
  )
}

function Zupet({ c }) {
  return (
    <>
      <Phone className="translate-y-5">
        <div className="h-4 rounded-full border border-zinc-700 bg-zinc-900" />
        <div className={`relative h-[72px] overflow-hidden rounded-lg border ${c.border} ${c.soft}`}>
          {/* paw */}
          <div className={`absolute left-1/2 top-[34px] h-6 w-7 -translate-x-1/2 rounded-[50%] ${c.mid}`} />
          {[-14, -5, 5, 14].map((x, i) => (
            <div
              key={x}
              className={`absolute h-2.5 w-2.5 rounded-full ${c.mid}`}
              style={{ left: `calc(50% + ${x}px - 5px)`, top: i === 0 || i === 3 ? 26 : 18 }}
            />
          ))}
        </div>
        <Line w="70%" className="bg-zinc-500" />
        <div className="flex gap-1">
          <div className={`h-3 w-8 rounded-full ${c.soft}`} />
          <div className="h-3 w-6 rounded-full bg-zinc-800" />
        </div>
        <div className={`h-5 rounded-md ${c.solid}`} />
      </Phone>
      <Phone>
        <div className="flex items-center gap-1.5">
          <div className={`h-3.5 w-3.5 rounded-full ${c.mid}`} />
          <Line w="38px" className="bg-zinc-600" />
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="w-[70%] space-y-1 rounded-lg rounded-bl-sm bg-zinc-800 p-1.5">
            <Line w="100%" className="bg-zinc-600" />
            <Line w="60%" className="bg-zinc-600" />
          </div>
          <div className={`ml-auto w-[62%] space-y-1 rounded-lg rounded-br-sm ${c.mid} p-1.5`}>
            <Line w="100%" className="bg-zinc-300/60" />
          </div>
          <div className="w-[55%] rounded-lg rounded-bl-sm bg-zinc-800 p-1.5">
            <Line w="100%" className="bg-zinc-600" />
          </div>
          <div className={`ml-auto w-[70%] space-y-1 rounded-lg rounded-br-sm ${c.mid} p-1.5`}>
            <Line w="100%" className="bg-zinc-300/60" />
            <Line w="50%" className="bg-zinc-300/60" />
          </div>
        </div>
      </Phone>
    </>
  )
}

function Inventory({ c }) {
  return (
    <>
      <Phone className="translate-y-5">
        <div className="flex items-center justify-between">
          <Line w="40px" className="bg-zinc-600" />
          <div className={`h-3.5 w-3.5 rounded-full ${c.solid}`} />
        </div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5 rounded-md border border-zinc-800 p-1">
            <div className={`h-5 w-5 rounded ${c.soft} border ${c.border}`} />
            <div className="flex-1 space-y-1">
              <Line w="75%" className="bg-zinc-500" />
              <Line w="45%" />
            </div>
            <div className={`rounded-full px-1.5 py-0.5 text-[7px] font-mono leading-none text-zinc-950 ${c.solid}`}>
              {[24, 8, 56, 12][i]}
            </div>
          </div>
        ))}
      </Phone>
      <Phone>
        <Line w="44px" className="bg-zinc-600" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className={`h-8 rounded-md ${c.soft} border ${c.border}`} />
          <div className="h-8 rounded-md border border-zinc-800 bg-zinc-900" />
        </div>
        <div className="flex h-14 items-end gap-1.5 border-b border-zinc-800 px-1">
          {[40, 70, 35, 90, 60, 80].map((h, i) => (
            <div key={i} className={`flex-1 rounded-t ${i === 3 ? c.solid : c.mid}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <Line w="80%" />
        <div className={`ml-auto flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-zinc-950 ${c.solid}`}>
          +
        </div>
      </Phone>
    </>
  )
}

function Nlp({ c }) {
  return (
    <Browser className="translate-y-5">
      <div className="flex items-stretch gap-2">
        <div className="flex-1 space-y-1.5 rounded-md border border-zinc-800 p-2">
          {["100%", "92%", "100%", "84%", "96%", "70%", "100%", "60%"].map((w, i) => (
            <Line key={i} w={w} />
          ))}
        </div>
        <div className="flex items-center">
          <div className={`rounded-full px-1.5 py-0.5 text-[7px] font-mono leading-none text-zinc-950 ${c.solid}`}>
            TF-IDF
          </div>
        </div>
        <div className={`w-[38%] space-y-1.5 rounded-md border ${c.border} ${c.soft} p-2`}>
          <Line w="100%" className="bg-zinc-400" />
          <Line w="85%" className="bg-zinc-400" />
          <Line w="60%" className="bg-zinc-400" />
        </div>
      </div>
    </Browser>
  )
}

function Phishing({ c }) {
  return (
    <Browser className="translate-y-5">
      <div className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-2 py-1.5">
        <Line w="18px" />
        <div className="h-1.5 w-12 rounded-full bg-orange-400/80" />
        <Line w="30px" className="bg-zinc-500" />
        <Line w="22px" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ["Recall", [38, 82]],
          ["Prec.", [88, 90]],
          ["F1", [52, 85]],
        ].map(([label, [before, after]]) => (
          <div key={label} className="space-y-1">
            <div className="flex h-12 items-end gap-1 border-b border-zinc-800">
              <div className="flex-1 rounded-t bg-zinc-700" style={{ height: `${before}%` }} />
              <div className={`flex-1 rounded-t ${c.solid}`} style={{ height: `${after}%` }} />
            </div>
            <div className="text-center text-[7px] font-mono text-zinc-500">{label}</div>
          </div>
        ))}
      </div>
    </Browser>
  )
}

const previews = { memroix: Memroix, zupet: Zupet, inventory: Inventory, nlp: Nlp, phishing: Phishing }

export default function ProjectPreview({ type, color = "blue" }) {
  const Art = previews[type]
  if (!Art) return null
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-9 z-[5] flex justify-center gap-3 transition-transform duration-500 group-hover:-translate-y-1"
    >
      <Art c={palettes[color] ?? palettes.blue} />
    </div>
  )
}
