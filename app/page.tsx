import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bot,
  Briefcase,
  Camera,
  Cpu,
  Database,
  Eye,
  FileText,
  FolderGit2,
  GraduationCap,
  Layout,
  Mail,
  MapPin,
  Music,
  Route,
  Server,
  ShieldCheck,
  Trophy,
  User,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import LiveBoard from "./components/LiveBoard";
import Navbar from "./components/Navbar";
import RevealObserver from "./components/RevealObserver";
import Photo from "./components/Photo";
import ProjectPreview from "./components/ProjectPreview";
import CvMenu from "./components/CvMenu";
import { GitHubIcon, LinkedInIcon } from "./components/icons";
import {
  profile,
  cvFiles,
  featured,
  more,
  experience,
  skills,
  awards,
  certifications,
  uniProjects,
  education,
} from "./data";

const skillIcons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Auth & security": ShieldCheck,
  Tools: Wrench,
  Also: Cpu,
};

const uniIcons: Record<string, LucideIcon> = { waves: Waves, camera: Camera, route: Route, music: Music };

const previewUrl: Record<string, string> = {
  orbit: "orbit.app/projects/launch",
  ledger: "ledger.app/dashboard",
  pulse: "pulse.app/feed",
  snip: "snip.link/new",
};

const delay = (i: number) => ({ "--delay": `${i * 90}ms` }) as React.CSSProperties;

function SectionTitle({
  icon: Icon,
  title,
  intro,
  center = false,
  dark = false,
}: {
  icon: LucideIcon;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`reveal max-w-[44rem] ${center ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span
          className={`grid h-11 w-11 place-items-center rounded-xl ${
            dark ? "bg-white/10 text-amber" : "bg-brand-soft text-brand"
          }`}
        >
          <Icon size={21} aria-hidden />
        </span>
        <h2 className="font-display text-[34px] font-semibold tracking-tight sm:text-[42px]">{title}</h2>
      </div>
      <span
        className={`mt-4 block h-1 w-14 rounded-full bg-amber ${center ? "mx-auto" : ""}`}
        aria-hidden
      />
      {intro && (
        <p className={`mt-4 text-[17px] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <li className="rounded-md bg-bg px-2 py-0.5 text-[13px] text-fg ring-1 ring-line">{children}</li>;
}

function Blob({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden />
      <Navbar />
      <RevealObserver />

      <main id="top">
        {/* Hero */}
        <section className="hero-grid relative overflow-hidden text-white">
          <Blob className="-right-40 -top-40 h-[480px] w-[480px] bg-brand/25" />
          <Blob className="-bottom-48 -left-40 h-[420px] w-[420px] bg-amber/10" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-36">
            <div className="hero-in">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[14px] font-medium text-white ring-1 ring-white/15">
                <span className="pulse-dot h-2 w-2 rounded-full bg-signal" aria-hidden />
                Available for full-stack roles
              </p>
              <h1 className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[62px]">
                I build web apps that stay secure, fast, and in sync.
              </h1>
              <p className="mt-6 max-w-[34rem] text-[18px] leading-relaxed text-white/75">
                I&apos;m Syed Shaheer Ahmed, a full-stack MERN developer in Karachi. I enjoy the parts most apps get
                wrong: sign-in, live updates, and real users.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 text-[15px] font-semibold text-[#0f1e33] hover:bg-[#ffb83d]"
                >
                  <FolderGit2 size={17} aria-hidden /> See my work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[15px] font-medium text-white ring-1 ring-white/30 hover:bg-white/10"
                >
                  <Mail size={17} aria-hidden /> Contact me
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-[15px] text-white/60">
                <MapPin size={16} aria-hidden /> {profile.location}, open to on-site and remote
              </p>
            </div>
            <div className="board-in">
              <LiveBoard />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative overflow-hidden">
          <Blob className="-left-32 top-24 h-80 w-80 bg-brand/10" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid items-start gap-14 lg:grid-cols-[340px_1fr] lg:gap-16">
              <div className="reveal reveal-left relative mx-auto w-full max-w-[320px]">
                <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-brand/50" />
                <div className="relative">
                  <Photo />
                </div>
              </div>

              <div>
                <SectionTitle icon={User} title="About me" />
                <p className="reveal mt-6 max-w-[42rem] text-[18px] leading-relaxed">
                  I graduated in 2026 with a B.E. in Computer Systems Engineering. Since then I&apos;ve completed three
                  internships and shipped nine web projects, most of them full-stack apps with real authentication and
                  real-time features.
                </p>
                <p className="reveal mt-4 max-w-[42rem] text-[17.5px] leading-relaxed text-muted">
                  Engineering taught me to build things that work outside a demo, from a robot that cleans creeks to
                  the web apps I build today. I&apos;m looking for a full-stack or MERN developer role.
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Briefcase, label: "3 internships", sub: "Full-stack, front-end, teaching" },
                    { icon: FolderGit2, label: "9 web projects", sub: "All on GitHub" },
                    { icon: Award, label: "IEEEP presenter", sub: "National seminar, 2026" },
                  ].map((f, i) => (
                    <li key={f.label} style={delay(i)} className="reveal lift flex items-center gap-3 rounded-xl bg-surface p-3.5 ring-1 ring-line">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                        <f.icon size={19} aria-hidden />
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold">{f.label}</span>
                        <span className="block text-[13px] text-muted">{f.sub}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <div className="reveal reveal-left rounded-2xl bg-surface p-6 ring-1 ring-line">
                <h3 className="flex items-center gap-2 font-display text-[20px] font-semibold">
                  <GraduationCap size={20} className="text-brand" aria-hidden /> Education
                </h3>
                <ul className="mt-5 space-y-5">
                  {education.map((e) => (
                    <li key={e.degree} className="border-l-2 border-brand/40 pl-4">
                      <p className="font-semibold">{e.degree}</p>
                      <p className="text-[15px] text-muted">
                        {e.school}, {e.when}
                      </p>
                      <p className="text-[15px] text-muted">{e.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal reveal-right rounded-2xl bg-surface p-6 ring-1 ring-line">
                <h3 className="flex items-center gap-2 font-display text-[20px] font-semibold">
                  <Trophy size={20} className="text-amber" aria-hidden /> Recognition
                </h3>
                <ul className="mt-5 space-y-3 text-[15.5px]">
                  {awards.map((a) => (
                    <li key={a} className="flex gap-2.5">
                      <Award size={17} className="mt-0.5 shrink-0 text-amber" aria-hidden />
                      {a}
                    </li>
                  ))}
                  {certifications.map((c) => (
                    <li key={c} className="flex gap-2.5 text-muted">
                      <BadgeCheck size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="reveal mt-16 font-display text-[24px] font-semibold">What I work with</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s, i) => {
                const Icon = skillIcons[s.group] ?? Cpu;
                return (
                  <div key={s.group} style={delay(i)} className="reveal reveal-scale lift rounded-xl bg-surface p-4 ring-1 ring-line">
                    <p className="flex items-center gap-2 text-[15px] font-semibold">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-brand">
                        <Icon size={16} aria-hidden />
                      </span>
                      {s.group}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {s.items.map((it) => (
                        <Tag key={it}>{it}</Tag>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionTitle
              icon={Briefcase}
              title="Experience"
              intro="Three internships across full-stack development, front-end engineering, and teaching."
              center
            />

            <ol className="timeline relative mx-auto mt-16 max-w-5xl">
              <span aria-hidden className="absolute bottom-0 left-5 top-0 w-0.5 bg-line md:left-1/2 md:-translate-x-1/2">
                <span className="timeline-fill block h-full w-full origin-top bg-brand" />
              </span>

              {experience.map((e, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={e.org} className="relative grid pb-12 pl-16 last:pb-0 md:grid-cols-2 md:gap-16 md:pl-0">
                    <span
                      aria-hidden
                      className="reveal reveal-scale absolute left-5 top-1 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-brand text-white ring-[6px] ring-surface md:left-1/2"
                    >
                      <Briefcase size={17} />
                    </span>

                    <div className={`hidden md:block ${right ? "md:order-2" : "md:text-right"} pt-2`}>
                      <p className="reveal font-display text-[22px] font-semibold text-brand-dark">{e.when}</p>
                      <p className="reveal text-[15px] text-muted">{e.where}</p>
                    </div>

                    <div
                      className={`reveal ${right ? "reveal-left md:order-1" : "reveal-right"} lift rounded-2xl bg-bg p-6 ring-1 ring-line`}
                    >
                      <p className="text-[14px] font-medium text-brand-dark md:hidden">
                        {e.when}, {e.where}
                      </p>
                      <h3 className="text-[19px] font-semibold leading-snug">{e.role}</h3>
                      <p className="mt-0.5 text-[16px] font-medium text-muted">{e.org}</p>
                      <ul className="mt-4 space-y-2 text-[15.5px] leading-relaxed text-muted">
                        {e.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="relative overflow-hidden">
          <Blob className="-right-40 top-40 h-96 w-96 bg-amber/10" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionTitle
              icon={FolderGit2}
              title="Selected work"
              intro="Full-stack MERN apps, each with its code on GitHub. For every project, here's the part that took real thought."
            />

            <div className="mt-14 space-y-20 lg:space-y-24">
              {featured.map((p, i) => {
                const flip = i % 2 === 1;
                return (
                  <article key={p.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <div className={`reveal ${flip ? "reveal-right lg:order-2" : "reveal-left"}`}>
                      <div className="relative">
                        <div
                          aria-hidden
                          className={`absolute -inset-3 -z-0 rounded-2xl ${i % 2 ? "bg-amber/15" : "bg-brand/15"} rotate-[-2deg]`}
                        />
                        <div className="relative">
                          <ProjectPreview kind={p.preview} url={previewUrl[p.preview]} image={p.image} />
                        </div>
                      </div>
                    </div>

                    <div className={`reveal ${flip ? "reveal-left lg:order-1" : "reveal-right"}`}>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3 className="font-display text-[34px] font-semibold leading-none tracking-tight">{p.name}</h3>
                        {p.context && (
                          <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[13px] font-medium text-brand-dark">
                            {p.context}
                          </span>
                        )}
                      </div>
                      <p className="mt-4 text-[17px] leading-relaxed">{p.summary}</p>
                      <p className="mt-4 rounded-xl bg-amber-soft p-4 text-[15.5px] leading-relaxed text-amber-ink">
                        <span className="font-semibold text-fg">The hard part: </span>
                        {p.hardPart}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {p.stack.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-[15px] font-medium text-surface hover:opacity-90"
                        >
                          <GitHubIcon size={16} /> View code
                        </a>
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[15px] font-medium text-brand-dark ring-1 ring-brand/40 hover:bg-brand-soft"
                          >
                            <Eye size={16} aria-hidden /> Live demo
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <h3 className="reveal mt-24 font-display text-[24px] font-semibold">More projects</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {more.map((m, i) => (
                <li key={m.name} style={delay(i)} className="reveal reveal-scale">
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noreferrer"
                    className="lift group flex h-full items-start justify-between gap-4 rounded-xl bg-surface p-5 ring-1 ring-line hover:ring-brand/50"
                  >
                    <span>
                      <span className="block font-semibold">{m.name}</span>
                      <span className="mt-1 block text-[15px] text-muted">{m.what}</span>
                      <span className="mt-2 block text-[13.5px] font-medium text-brand-dark">{m.stack}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      aria-label="Open on GitHub"
                    />
                  </a>
                </li>
              ))}
              <li style={delay(more.length)} className="reveal reveal-scale">
                <a
                  href={`${profile.github}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="lift group flex h-full items-center justify-between gap-4 rounded-xl border-2 border-dashed border-brand/40 bg-brand-soft/60 p-5 hover:border-brand"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-fg text-bg">
                      <GitHubIcon size={20} />
                    </span>
                    <span>
                      <span className="block font-semibold">More projects on GitHub</span>
                      <span className="mt-0.5 block text-[15px] text-muted">
                        Counter app, to-do list, digital clock, and everything else I build
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-brand-dark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* University projects */}
        <section id="projects" className="relative overflow-hidden bg-navy text-white">
          <Blob className="-left-40 top-10 h-[420px] w-[420px] bg-brand/20" />
          <Blob className="-bottom-40 right-0 h-96 w-96 bg-amber/10" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionTitle icon={Bot} title="University projects" dark />

            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div className="reveal reveal-left">
                <p className="text-[15px] font-medium text-amber">Final year project, 2025 – 2026</p>
                <h3 className="mt-2 font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[40px]">
                  HydroBin X: a robot that collects floating waste from urban creeks
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2 text-[14px]">
                  <li className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1">
                    <Award size={15} className="text-amber" aria-hidden /> Presented at the 41st All Pakistan IEEEP Seminar
                  </li>
                  <li className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1">
                    <Eye size={15} className="text-amber" aria-hidden /> 80,000+ views on LinkedIn
                  </li>
                </ul>
              </div>
              <ol className="relative space-y-4 border-l-2 border-dashed border-white/20 pl-8">
                {[
                  {
                    t: "Stage 1: Remote-controlled prototype",
                    d: "Arduino Uno and a mobile app drive the motors and a conveyor belt that lifts waste into an onboard bin.",
                  },
                  {
                    t: "Stage 2: Semi-autonomous robot",
                    d: 'Encoder-based odometry maps and follows routes, it avoids obstacles, and a load cell raises a "Bin full" alert in real time.',
                  },
                ].map((s, i) => (
                  <li key={s.t} style={delay(i)} className="reveal reveal-right relative rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                    <span
                      aria-hidden
                      className="absolute -left-[45px] top-6 grid h-7 w-7 place-items-center rounded-full bg-amber text-[13px] font-bold text-navy"
                    >
                      {i + 1}
                    </span>
                    <p className="font-display text-[19px] font-semibold">{s.t}</p>
                    <p className="mt-2 leading-relaxed text-white/70">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            <h3 className="reveal mt-20 font-display text-[24px] font-semibold">Other university projects</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {uniProjects.map((u, i) => {
                const Icon = uniIcons[u.icon] ?? Cpu;
                return (
                  <li
                    key={u.name}
                    style={delay(i)}
                    className="reveal reveal-scale lift flex gap-4 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-amber">
                      <Icon size={20} aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold">{u.name}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-white/70">{u.what}</p>
                      {u.badge && (
                        <p className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-amber">
                          <Trophy size={14} aria-hidden /> {u.badge}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="reveal reveal-scale relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-12">
            <Blob className="-right-24 -top-24 h-72 w-72 bg-brand/30" />
            <Blob className="-bottom-24 -left-24 h-72 w-72 bg-amber/15" />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-amber">
                  <Mail size={21} aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[46px]">
                  Hiring a full-stack developer? Let&apos;s talk.
                </h2>
                <p className="mt-4 max-w-[30rem] text-[17px] leading-relaxed text-white/70">
                  Download my CV, or reach out directly by email or LinkedIn.
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-7 inline-flex items-center gap-2 break-all font-display text-[19px] font-medium text-amber underline decoration-amber/40 underline-offset-[6px] hover:decoration-amber sm:text-[22px]"
                >
                  {profile.email}
                </a>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-[15px] font-medium ring-1 ring-white/15 hover:bg-white/20"
                  >
                    <LinkedInIcon /> LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-[15px] font-medium ring-1 ring-white/15 hover:bg-white/20"
                  >
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-display text-[20px] font-semibold">Download my CV</h3>
                <p className="mt-1 text-[15px] text-white/60">Pick the version that suits you.</p>
                <ul className="mt-5 space-y-3">
                  {cvFiles.map((f) => (
                    <li key={f.href}>
                      <a
                        href={f.href}
                        download
                        className="group flex items-center gap-4 rounded-2xl bg-white p-5 text-[#0f1e33] transition-transform hover:-translate-y-0.5"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e3f3f4] text-[#0e7c86]">
                          <FileText size={22} aria-hidden />
                        </span>
                        <span className="flex-1">
                          <span className="block text-[17px] font-semibold">{f.label}</span>
                          <span className="block text-[14px] text-[#5b6b82]">{f.note}</span>
                        </span>
                        <span className="rounded-lg bg-amber px-3 py-1.5 text-[14px] font-semibold text-[#0f1e33]">
                          Download
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-[14px] sm:px-8">
          <p>© 2026 Syed Shaheer Ahmed</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
              <Mail size={18} />
            </a>
            <CvMenu size="sm" tone="dark" up />
          </div>
        </div>
      </footer>
    </>
  );
}
