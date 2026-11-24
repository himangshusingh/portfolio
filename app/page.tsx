import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LightningFlash } from "@/components/LightningFlash";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { Postcard } from "@/components/Postcard";
import { Row } from "@/components/Row";
import { SeasonList } from "@/components/SeasonList";
import { SeasonProvider } from "@/components/SeasonProvider";
import { about, projects, site, skills, substackCard, writing } from "@/lib/content";

export default function Home() {
  return (
    <SeasonProvider>
      <ParticleCanvas />
      <LightningFlash />
      <Header />
      <Hero />

      <main>
        <section id="work">
          <h2>Work</h2>
          <div className="split">
            <div className="col">
              {projects.map((p) => (
                <Row key={p.title} {...p} />
              ))}
            </div>
            <aside className="card">
              <div className="av">{site.initials}</div>
              <h3>{site.name}</h3>
              <p>
                {site.role}
                <br />
                {site.location} · {site.status}
              </p>
              <div className="btns">
                <a className="btn pri" href={site.links.linkedin}>LinkedIn ↗</a>
                <a className="btn" href={site.links.github}>GitHub ↗</a>
                <a className="btn" href={`mailto:${site.email}`}>Email me</a>
              </div>
              <div className="chips">
                {skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="writing">
          <h2>Writing</h2>
          <div className="split">
            <div className="col">
              {writing.map((w) => (
                <Row key={w.title} {...w} variant="paper" />
              ))}
            </div>
            <aside className="card">
              <h3>{substackCard.heading}</h3>
              <p>{substackCard.blurb}</p>
              <a className="btn pri" href={site.links.substack} style={{ display: "block", marginBottom: 18 }}>
                {substackCard.cta}
              </a>
              <SeasonList />
              <blockquote>{substackCard.quote}</blockquote>
            </aside>
          </div>
        </section>

        <section id="about">
          <h2>About</h2>
          <div className="split">
            <div className="col">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <aside className="card">
              <h3>Currently</h3>
              <dl>
                {about.currently.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd>{c.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="connect">
          <h2>Connect</h2>
          <Postcard />
        </section>
      </main>

      <Footer />
    </SeasonProvider>
  );
}
