import LiveBoard from "./components/LiveBoard";
import {
  profile,
  featured,
  more,
  experience,
  skills,
  awards,
  certifications,
} from "./data";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-white px-2 py-0.5 text-[13px] text-ink">{children}</li>
  );
}

const btnPrimary =
  "inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-[15px] font-medium text-white hover:bg-[#22324d]";
const btnSecondary =
  "inline-flex items-center gap-2 rounded-lg border border-ink/20 bg-white px-4 py-2.5 text-[15px] font-medium text-ink hover:border-ink/50";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/85 backdrop-blur">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8"
        >
          <a href="#top" className="font-display text-[17px] font-semibold tracking-tight">
            Shaheer Ahmed
          </a>
          <div className="flex items-center gap-5 text-[15px]">
            <a href="#work" className="hidden text-muted hover:text-ink sm:inline">Work</a>
            <a href="#experience" className="hidden text-muted hover:text-ink sm:inline">Experience</a>
            <a href="#about" className="hidden text-muted hover:text-ink sm:inline">About</a>
            <a href={profile.cv} download className="rounded-lg border border-ink/20 bg-white px-3 py-1.5 font-medium hover:border-ink/50">
              Download CV
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-[14px] font-medium text-[#0b7a5a]">
              <span className="pulse-dot h-2 w-2 rounded-full bg-signal" aria-hidden />
              Available for full-stack roles
            </p>
            <h1 className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[60px]">
              I build web apps that stay secure, fast, and in sync.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[18px] leading-relaxed text-muted">
              I&apos;m Syed Shaheer Ahmed, a full-stack MERN developer in Karachi. I enjoy the parts most apps get
              wrong: sign-in, live updates, and real users. Three internships, nine shipped projects, and one robot
              that cleans creeks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className={btnPrimary}>See my work</a>
              <a href={`mailto:${profile.email}`} className={btnSecondary}>Email me</a>
              <a href={profile.github} className={btnSecondary} target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>
          <LiveBoard />
        </section>

        {/* Selected work */}
        <section id="work" className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="font-display text-[34px] font-semibold tracking-tight sm:text-[40px]">Selected work</h2>
            <p className="mt-3 max-w-[40rem] text-[17px] text-muted">
              Full-stack MERN apps, each with the code on GitHub. For every project, here&apos;s the part that took
              real thought.
            </p>

            <div className="mt-12 divide-y divide-line border-y border-line">
              {featured.map((p) => (
                <article key={p.name} className="grid gap-6 py-10 md:grid-cols-[220px_1fr_260px] md:gap-10">
                  <div>
                    <h3 className="font-display text-[30px] font-semibold leading-none tracking-tight">{p.name}</h3>
                    {p.context && <p className="mt-2 text-[14px] text-muted">{p.context}</p>}
                  </div>
                  <div className="max-w-[40rem]">
                    <p className="text-[17px] leading-relaxed">{p.summary}</p>
                    <p className="mt-4 border-l-2 border-signal pl-4 text-[15.5px] leading-relaxed text-muted">
                      <span className="font-medium text-ink">The hard part: </span>
                      {p.hardPart}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 text-[15px] font-medium">
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue hover:underline">
                        <GitHubIcon /> View code
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="text-blue hover:underline">
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="mt-16 font-display text-[22px] font-semibold">More projects</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {more.map((m) => (
                <li key={m.name} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr_auto] sm:items-center sm:gap-6">
                  <span className="font-semibold">{m.name}</span>
                  <span className="text-muted">
                    {m.what} <span className="text-ink/70">({m.stack})</span>
                  </span>
                  <a href={m.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-blue hover:underline">
                    <GitHubIcon /> Code
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HydroBin X */}
        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-[34px] font-semibold leading-tight tracking-tight sm:text-[40px]">
                HydroBin X, my final year project, is a robot that collects floating waste from urban creeks.
              </h2>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-white/75">
                I presented it at the 41st All Pakistan IEEEP Students&apos; Seminar 2026, and its demo video passed
                80,000 views on LinkedIn.
              </p>
            </div>
            <ol className="space-y-6 self-end">
              <li className="rounded-xl border border-white/15 p-5">
                <p className="font-display text-[19px] font-semibold">Stage 1: Remote-controlled prototype</p>
                <p className="mt-2 text-white/75">
                  Arduino Uno and a mobile app drive the motors and a conveyor belt that lifts waste into an onboard bin.
                </p>
              </li>
              <li className="rounded-xl border border-white/15 p-5">
                <p className="font-display text-[19px] font-semibold">Stage 2: Semi-autonomous robot</p>
                <p className="mt-2 text-white/75">
                  Encoder-based odometry maps and follows routes, it avoids obstacles, and a load cell raises a
                  &quot;Bin full&quot; alert in real time.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-display text-[34px] font-semibold tracking-tight sm:text-[40px]">Experience</h2>
          <ol className="mt-10 border-l-2 border-line">
            {experience.map((e) => (
              <li key={e.org} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-paper bg-ink" aria-hidden />
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-[19px] font-semibold">
                    {e.role}, <span className="font-normal">{e.org}</span>
                  </h3>
                  <p className="text-[15px] text-muted">
                    {e.when}, {e.where}
                  </p>
                </div>
                <ul className="mt-3 max-w-[44rem] list-disc space-y-1.5 pl-5 text-[16px] leading-relaxed text-muted marker:text-line">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" className="border-t border-line bg-white">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="font-display text-[34px] font-semibold tracking-tight sm:text-[40px]">About</h2>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-relaxed">
                I graduated in 2026 with a B.E. in Computer Systems Engineering from Muhammad Ali Jinnah University,
                finishing my final semester with a 4.00 GPA. Engineering taught me to build things that work in the
                real world, from robots to the web apps I build today.
              </p>
              <p className="mt-4 max-w-[34rem] text-[17px] leading-relaxed text-muted">
                I&apos;m looking for a full-stack or MERN developer role, on-site in Karachi or remote.
              </p>

              <h3 className="mt-10 font-display text-[20px] font-semibold">Recognition</h3>
              <ul className="mt-3 space-y-2 text-[16px]">
                {awards.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
                    {a}
                  </li>
                ))}
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-line" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-[20px] font-semibold lg:mt-3">What I work with</h3>
              <dl className="mt-5 divide-y divide-line border-y border-line">
                {skills.map((s) => (
                  <div key={s.group} className="grid gap-2 py-4 sm:grid-cols-[150px_1fr]">
                    <dt className="text-[15px] text-muted">{s.group}</dt>
                    <dd>
                      <ul className="flex flex-wrap gap-1.5">
                        {s.items.map((i) => (
                          <Tag key={i}>{i}</Tag>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <h2 className="max-w-[46rem] font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
            Hiring a full-stack developer? Let&apos;s talk.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block break-all font-display text-[22px] font-medium text-blue underline decoration-blue/30 underline-offset-[6px] hover:decoration-blue sm:text-[28px]"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btnSecondary}>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={btnSecondary}>
              <GitHubIcon /> GitHub
            </a>
            <a href={profile.cv} download className={btnPrimary}>Download CV</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-6 text-[14px] text-muted sm:px-8">
          <p>© 2026 Syed Shaheer Ahmed</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}
