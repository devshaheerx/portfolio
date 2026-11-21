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
import Photo from "./components/Photo";
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

function SectionTitle({ icon: Icon, title, intro }: { icon: LucideIcon; title: string; intro?: string }) {
  return (
    <div className="max-w-[44rem]">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand">
          <Icon size={20} aria-hidden />
        </span>
        <h2 className="font-display text-[32px] font-semibold tracking-tight sm:text-[38px]">{title}</h2>
      </div>
      {intro && <p className="mt-3 text-[17px] leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <li className="rounded-md bg-paper px-2 py-0.5 text-[13px] text-ink ring-1 ring-line">{children}</li>;
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        {/* Hero */}
        <section className="hero-grid text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-36">
            <div>
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
                  className="inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 text-[15px] font-semibold text-ink hover:bg-[#ffb83d]"
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
            <LiveBoard />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
            <Photo />
            <div>
              <SectionTitle icon={User} title="About me" />
              <p className="mt-5 max-w-[42rem] text-[17.5px] leading-relaxed">
                I graduated in 2026 with a B.E. in Computer Systems Engineering and finished my final semester with a
                perfect 4.00 GPA. Since then I&apos;ve completed three internships and shipped nine web projects,
                most of them full-stack apps with real authentication and real-time features.
              </p>
              <p className="mt-4 max-w-[42rem] text-[17.5px] leading-relaxed text-muted">
                Engineering taught me to build things that work outside a demo, from a robot that cleans creeks to the
                web apps I build today. I&apos;m looking for a full-stack or MERN developer role.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="flex items-center gap-2 font-display text-[19px] font-semibold">
                    <GraduationCap size={19} className="text-brand" aria-hidden /> Education
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {education.map((e) => (
                      <li key={e.degree}>
                        <p className="font-semibold">{e.degree}</p>
                        <p className="text-[15px] text-muted">
                          {e.school}, {e.when}
                        </p>
                        <p className="text-[15px] text-muted">{e.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-display text-[19px] font-semibold">
                    <Trophy size={19} className="text-amber" aria-hidden /> Recognition
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-[15.5px]">
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
            </div>
          </div>

          <h3 className="mt-16 font-display text-[22px] font-semibold">What I work with</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => {
              const Icon = skillIcons[s.group] ?? Cpu;
              return (
                <div key={s.group} className="rounded-xl bg-white p-4 ring-1 ring-line">
                  <p className="flex items-center gap-2 text-[15px] font-semibold">
                    <Icon size={17} className="text-brand" aria-hidden /> {s.group}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-y border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <SectionTitle icon={Briefcase} title="Experience" intro="Three internships across full-stack development, front-end engineering, and teaching." />
            <ol className="mt-12 space-y-5">
              {experience.map((e) => (
                <li key={e.org} className="grid gap-4 rounded-2xl p-6 ring-1 ring-line sm:grid-cols-[200px_1fr] sm:gap-8">
                  <div>
                    <p className="text-[15px] font-medium text-brand">{e.when}</p>
                    <p className="text-[14px] text-muted">{e.where}</p>
                  </div>
                  <div>
                    <h3 className="text-[19px] font-semibold">
                      {e.role} <span className="font-normal text-muted">at</span> {e.org}
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-[16px] leading-relaxed text-muted">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5">
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionTitle
            icon={FolderGit2}
            title="Selected work"
            intro="Full-stack MERN apps, each with its code on GitHub. For every project, here's the part that took real thought."
          />
          <div className="mt-12 space-y-5">
            {featured.map((p) => (
              <article
                key={p.name}
                className="grid gap-6 rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8 md:grid-cols-[1fr_260px] md:gap-10"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-[28px] font-semibold leading-none tracking-tight">{p.name}</h3>
                    {p.context && (
                      <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[13px] font-medium text-brand-dark">
                        {p.context}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 max-w-[42rem] text-[17px] leading-relaxed">{p.summary}</p>
                  <p className="mt-4 max-w-[42rem] rounded-lg bg-[#fff6e5] p-4 text-[15.5px] leading-relaxed text-[#5c4413]">
                    <span className="font-semibold text-ink">The hard part: </span>
                    {p.hardPart}
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <ul className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-ink px-3.5 py-2 text-[14.5px] font-medium text-white hover:bg-ink-2"
                    >
                      <GitHubIcon size={16} /> View code
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[14.5px] font-medium text-brand-dark ring-1 ring-brand/40 hover:bg-brand-soft"
                      >
                        <Eye size={16} aria-hidden /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <h3 className="mt-16 font-display text-[22px] font-semibold">More projects</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {more.map((m) => (
              <li key={m.name}>
                <a
                  href={m.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full items-start justify-between gap-4 rounded-xl bg-white p-5 ring-1 ring-line hover:ring-brand/50"
                >
                  <span>
                    <span className="block font-semibold">{m.name}</span>
                    <span className="mt-1 block text-[15px] text-muted">{m.what}</span>
                    <span className="mt-2 block text-[13.5px] font-medium text-brand-dark">{m.stack}</span>
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-muted group-hover:text-brand" aria-label="Open on GitHub" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* University projects */}
        <section id="projects" className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-amber">
                <Bot size={20} aria-hidden />
              </span>
              <h2 className="font-display text-[32px] font-semibold tracking-tight sm:text-[38px]">University projects</h2>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[15px] font-medium text-amber">Final year project, 2025 – 2026</p>
                <h3 className="mt-2 font-display text-[30px] font-semibold leading-tight tracking-tight sm:text-[36px]">
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
              <ol className="space-y-4">
                <li className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                  <p className="font-display text-[19px] font-semibold">Stage 1: Remote-controlled prototype</p>
                  <p className="mt-2 leading-relaxed text-white/70">
                    Arduino Uno and a mobile app drive the motors and a conveyor belt that lifts waste into an onboard
                    bin.
                  </p>
                </li>
                <li className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                  <p className="font-display text-[19px] font-semibold">Stage 2: Semi-autonomous robot</p>
                  <p className="mt-2 leading-relaxed text-white/70">
                    Encoder-based odometry maps and follows routes, it avoids obstacles, and a load cell raises a
                    &quot;Bin full&quot; alert in real time.
                  </p>
                </li>
              </ol>
            </div>

            <h3 className="mt-16 font-display text-[22px] font-semibold">Other university projects</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {uniProjects.map((u) => {
                const Icon = uniIcons[u.icon] ?? Cpu;
                return (
                  <li key={u.name} className="flex gap-4 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-amber">
                      <Icon size={19} aria-hidden />
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
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionTitle icon={Mail} title="Let's work together" />
              <p className="mt-4 max-w-[34rem] text-[17.5px] leading-relaxed text-muted">
                Hiring a full-stack developer? Download my CV or reach out directly by email or LinkedIn.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-7 inline-flex items-center gap-2 break-all font-display text-[20px] font-medium text-brand-dark underline decoration-brand/30 underline-offset-[6px] hover:decoration-brand sm:text-[24px]"
              >
                <Mail size={22} aria-hidden className="shrink-0" /> {profile.email}
              </a>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[15px] font-medium ring-1 ring-line hover:ring-brand/50"
                >
                  <span className="text-[#0a66c2]"><LinkedInIcon /></span> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[15px] font-medium ring-1 ring-line hover:ring-brand/50"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-[20px] font-semibold">Download my CV</h3>
              <p className="mt-1 text-[15px] text-muted">Pick the version that suits you.</p>
              <ul className="mt-5 space-y-3">
                {cvFiles.map((f) => (
                  <li key={f.href}>
                    <a
                      href={f.href}
                      download
                      className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-line hover:ring-brand"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                        <FileText size={22} aria-hidden />
                      </span>
                      <span className="flex-1">
                        <span className="block text-[17px] font-semibold">{f.label}</span>
                        <span className="block text-[14.5px] text-muted">{f.note}</span>
                      </span>
                      <span className="rounded-lg bg-brand px-3 py-1.5 text-[14px] font-medium text-white group-hover:bg-brand-dark">
                        Download
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white/60">
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
