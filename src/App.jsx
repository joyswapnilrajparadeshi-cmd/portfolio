import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  Map,
  Medal,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  X
} from 'lucide-react';
import {
  achievements,
  certifications,
  experience,
  flagshipProjects,
  n8nAgents,
  profile,
  projects,
  proofBadges,
  skills,
  stats
} from './data/portfolio.js';

function Github({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.588 2 12.253c0 4.53 2.865 8.37 6.839 9.727.5.095.683-.222.683-.494 0-.244-.009-.89-.014-1.746-2.782.62-3.369-1.375-3.369-1.375-.455-1.184-1.11-1.5-1.11-1.5-.908-.636.069-.623.069-.623 1.004.073 1.532 1.057 1.532 1.057.892 1.567 2.341 1.115 2.91.853.091-.662.35-1.115.636-1.371-2.221-.259-4.555-1.139-4.555-5.066 0-1.119.39-2.034 1.03-2.751-.103-.26-.446-1.303.098-2.714 0 0 .84-.276 2.75 1.051A9.36 9.36 0 0 1 12 6.957a9.36 9.36 0 0 1 2.504.345c1.909-1.327 2.747-1.05 2.747-1.05.546 1.41.203 2.454.1 2.713.64.717 1.028 1.632 1.028 2.751 0 3.937-2.337 4.804-4.565 5.058.359.317.678.943.678 1.9 0 1.371-.013 2.477-.013 2.814 0 .274.18.593.688.492C19.138 20.62 22 16.782 22 12.253 22 6.588 17.523 2 12 2Z"/>
    </svg>
  );
}

function Linkedin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M6.94 8.95H3.75V20h3.19V8.95ZM5.35 7.44c1.02 0 1.85-.84 1.85-1.86A1.85 1.85 0 0 0 5.35 3.72a1.86 1.86 0 0 0 0 3.72ZM20.25 20h-3.18v-5.38c0-1.28-.02-2.93-1.78-2.93-1.79 0-2.06 1.4-2.06 2.84V20h-3.18V8.95h3.05v1.51h.04c.42-.8 1.46-1.65 3-1.65 3.21 0 3.8 2.11 3.8 4.86V20h.31Z"/>
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

function asset(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('mailto:')) return path;
  return `${import.meta.env.BASE_URL}${path}`;
}

function isPlaceholderLink(link) {
  return !link || link.startsWith('ADD_');
}

function SafeImage({ src, alt, className, fallbackLabel = 'Add image' }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={`image-fallback ${className || ''}`}>
        <Sparkles size={22} />
        <span>{fallbackLabel}</span>
      </div>
    );
  }
  return <img src={asset(src)} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}

function LinkButton({ href, children, variant = 'secondary', icon: Icon = ArrowUpRight }) {
  const disabled = isPlaceholderLink(href);
  if (disabled) {
    return (
      <span className={`btn btn-${variant} btn-disabled`} title="Add this link in src/data/portfolio.js">
        <Icon size={17} /> Add link
      </span>
    );
  }
  return (
    <a className={`btn btn-${variant}`} href={asset(href)} target={href?.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
      <Icon size={17} /> {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  );
}

function Modal({ item, onClose }) {
  if (!item) return null;

  const isJson = item.type === 'json';

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className={`modal-card ${isJson ? 'modal-card-json' : ''}`} onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close preview"><X size={20} /></button>

        {isJson ? (
          <>
            <div className="modal-json-head">
              <div>
                <span>Workflow JSON preview</span>
                <h3>{item.title}</h3>
              </div>
              <a className="btn btn-secondary btn-json-download" href={asset(item.href)} download>
                <FileText size={16} /> Download JSON
              </a>
            </div>
            <pre className="modal-json-code">{item.content}</pre>
          </>
        ) : (
          <>
            <SafeImage src={item.src} alt={item.alt} className="modal-image" fallbackLabel="Preview image missing" />
            <div className="modal-caption">{item.alt}</div>
          </>
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="container hero-grid">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="status-pill"><span /> {profile.availability}</div>
          <h1>{profile.headline}</h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects"><Rocket size={18} /> View flagship work</a>
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}><Mail size={18} /> Let's connect</a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          </div>

          <div className="proof-strip">
            {proofBadges.map((badge) => <span key={badge}><BadgeCheck size={15} /> {badge}</span>)}
          </div>
        </motion.div>

        <motion.aside className="profile-card" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="profile-glow" />
          <div className="profile-photo-wrap">
            <SafeImage src={profile.photo} alt={`${profile.name} profile`} className="profile-photo" fallbackLabel="Place joy-profile.jpg" />
          </div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <div className="profile-mini-grid">
            <div><strong>Current</strong><span>AI Research Intern</span></div>
            <div><strong>Proof</strong><span>GATE + NPTEL Top 5%</span></div>
            <div><strong>Focus</strong><span>AI agents + full-stack</span></div>
            <div><strong>Products</strong><span>CareerTwin + CrisisTwin + DocuMind</span></div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <motion.div className="stat-card" key={stat.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="AI research internship backed by working automation systems."
          description="Building applied AI workflows that connect models, APIs, triggers, vector databases, business tools, and operational outputs."
        />
        <div className="experience-grid">
          {experience.map((job) => (
            <motion.article className="experience-card" key={job.company} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="card-icon"><BriefcaseBusiness size={22} /></div>
              <div className="experience-top">
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company} · {job.location}</p>
                </div>
                <span>{job.period}</span>
              </div>
              <p className="muted-text">{job.description}</p>
              <ul className="check-list">
                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlagshipProjects({ openPreview }) {
  return (
    <section id="projects" className="section-pad alt-section">
      <div className="container">
        <SectionHeader
          eyebrow="Flagship projects"
          title="Live AI products built end-to-end."
          description="Featured full-stack AI systems with deployed demos, real workflows, dashboards, screenshots, authentication, saved data, and export-ready outputs."
        />

        {flagshipProjects.map((project) => (
          <motion.article className="flagship-card" key={project.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flagship-content">
              <div className="tag-row"><span>{project.tag}</span><span>{project.status}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-story">
                <div><strong>Problem</strong><span>{project.problem}</span></div>
                <div><strong>Solution</strong><span>{project.solution}</span></div>
              </div>
              <div className="chip-row">
                {project.stack.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
              <div className="button-row">
  <LinkButton href={project.live} variant="primary" icon={ExternalLink}>Live demo</LinkButton>
  <LinkButton href={project.github} variant="secondary" icon={Github}>GitHub</LinkButton>
  {project.apk && <LinkButton href={project.apk} variant="secondary" icon={Download}>APK demo</LinkButton>}
</div>
            </div>
            <div className="flagship-media">
              <SafeImage src={project.cover} alt={`${project.title} dashboard`} className="flagship-cover" fallbackLabel={`Add ${project.title} screenshot`} />
              <div className="screenshot-grid">
                {project.screenshots.map((shot, index) => (
                  <button key={shot} onClick={() => openPreview({ src: shot, alt: `${project.title} screenshot ${index + 1}` })}>
                    <SafeImage src={shot} alt={`${project.title} screenshot ${index + 1}`} fallbackLabel={`Screenshot ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="feature-list-wide">
              {project.features.map((feature) => <span key={feature}><ChevronRight size={15} /> {feature}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Agents({ openPreview, openJsonPreview }) {
  return (
    <section id="agents" className="section-pad agents-section">
      <div className="container">
        <SectionHeader
          eyebrow="AI automation lab"
          title="AI Automation Lab — nine working n8n agents."
          description="A proof-heavy automation showcase covering chatbots, RAG, voice calls, daily briefings, support desk workflows, meeting setters, appointment systems, email assistants, and meeting intelligence."
        />
        <div className="agents-grid">
          {n8nAgents.map((agent) => {
            const shots = agent.screenshots || [];
            const mainShot = shots[0];
            const extraShots = shots.slice(1);
            return (
              <motion.article className="agent-card" key={agent.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="agent-head">
                  <div className="card-icon"><Bot size={22} /></div>
                  <div>
                    <span>{agent.category}</span>
                    <h3>{agent.title}</h3>
                  </div>
                </div>

                {mainShot && (
                  <div className="agent-showcase">
                    <button className="agent-main-shot" onClick={() => openPreview({ src: mainShot, alt: `${agent.title} main workflow screenshot` })}>
                      <SafeImage src={mainShot} alt={`${agent.title} main workflow screenshot`} fallbackLabel="Workflow image" />
                    </button>
                    {extraShots.length > 0 && (
                      <div className="agent-thumbs">
                        {extraShots.map((shot, index) => (
                          <button key={shot} onClick={() => openPreview({ src: shot, alt: `${agent.title} screenshot ${index + 2}` })}>
                            <SafeImage src={shot} alt={`${agent.title} screenshot ${index + 2}`} fallbackLabel={`Image ${index + 2}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <p className="muted-text">{agent.purpose}</p>
                <div className="agent-code"><Code2 size={16} /> {agent.codePreview}</div>
                <div className="chip-row compact">
                  {agent.tools.map((tool) => <span className="chip" key={tool}>{tool}</span>)}
                </div>
                <div className="workflow-steps">
                  {agent.workflow.map((step, index) => (
                    <div key={step}><strong>{String(index + 1).padStart(2, '0')}</strong><span>{step}</span></div>
                  ))}
                </div>
                <div className="agent-proof-row">
                  <span><Sparkles size={14} /> {shots.length} visual proof{shots.length === 1 ? '' : 's'}</span>
                  <div className="workflow-json-actions">
                    {(agent.workflowFiles || (agent.workflowFile ? [{ label: 'Workflow JSON', href: agent.workflowFile }] : [])).map((file) => (
                      <div className="workflow-json-action" key={file.href}>
                        <button className="btn btn-secondary btn-json" type="button" onClick={() => openJsonPreview(file, agent.title)}>
                          <Workflow size={16} /> View {file.label}
                        </button>
                        <a className="btn btn-ghost btn-json" href={asset(file.href)} download>
                          <FileText size={16} /> Download
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OlderProjects() {
  return (
    <section className="section-pad alt-section">
      <div className="container">
        <SectionHeader
          eyebrow="Full-stack foundation"
          title="Deployed systems that prove engineering fundamentals."
          description="Additional deployed systems across civic tech, agriculture, operations, education, and workflow platforms."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.article className="project-card" key={project.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SafeImage src={project.image} alt={project.title} className="project-image" fallbackLabel="Project image" />
              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-row compact">
                  {project.stack.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
                <div className="button-row small-row">
                  <LinkButton href={project.live} variant="secondary" icon={ExternalLink}>Live demo</LinkButton>
                  {project.github && <LinkButton href={project.github} variant="secondary" icon={Github}>GitHub</LinkButton>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Achievements"
          title="Academic excellence, competitive qualification, and AI learning proof."
          description="A concise proof section highlighting academic strength, AI/NLP performance, workshop learning, and professional momentum."
        />
        <div className="achievement-grid">
          {achievements.map((item) => (
            <motion.article className="achievement-card" key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="card-icon"><Medal size={22} /></div>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.proof ? (
                <a className="text-link" href={asset(item.proof)} target="_blank" rel="noreferrer"><FileText size={16} /> {item.proofLabel}</a>
              ) : (
                <span className="text-link disabled"><ShieldCheck size={16} /> {item.proofLabel}</span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section-pad alt-section">
      <div className="container">
        <SectionHeader
          eyebrow="Certificates"
          title="Credentials, certificates, and recognitions."
          description="A focused gallery of AI, NLP, cybersecurity, cryptography, aptitude, workshop, and academic credentials."
        />
        <div className="cert-grid">
          {certifications.map((cert) => (
            <motion.a className="cert-card" href={asset(cert.file)} target="_blank" rel="noreferrer" key={cert.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="cert-icon"><Award size={22} /></div>
              <span>{cert.category}</span>
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
              <small>Open certificate <ArrowUpRight size={13} /></small>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="Technical skills across programming, web, AI, automation, data, and product systems."
          description="A practical stack built from programming fundamentals, deployed web projects, AI agents, and data-driven workflows."
        />
        <div className="skills-grid">
          {skills.map((group) => (
            <motion.article className="skill-card" key={group.group} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="card-icon"><Layers3 size={22} /></div>
              <h3>{group.group}</h3>
              <div className="chip-row compact">
                {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad alt-section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2>From strong fundamentals to intelligent product systems.</h2>
        </div>
        <div className="about-copy">
          <p>
            I am an AI-focused full-stack developer who enjoys building practical systems that combine AI, automation, web engineering, mobile delivery, and product thinking. My recent work includes CareerTwin AI, CrisisTwin AI, DocuMind AI, n8n-based AI agents, and full-stack platforms with dashboards, workflows, authentication, saved workspaces, PDF reports, deployed demos, PWA support, and Android APK delivery.
          </p>
          <p>
            I focus on turning technical learning into working systems: AI agents, RAG assistants, automation pipelines, geospatial dashboards, document-intelligence workflows, report exports, and deployed full-stack products.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s build useful AI systems.</h2>
          <p>Open to AI research, full-stack development, internships, product engineering, automation workflows, and collaboration opportunities.</p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}><Mail size={18} /> Email me</a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <LinkButton href={profile.resume} variant="ghost" icon={FileText}>Resume</LinkButton>
        </div>
      </div>
    </section>
  );
}

function Navigation() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand"><span>J</span>{profile.shortName}</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Flagship Work</a>
          <a href="#agents">AI Agents</a>
          <a href="#achievements">Proof</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const [preview, setPreview] = useState(null);

  async function openJsonPreview(file, agentTitle) {
    try {
      const response = await fetch(asset(file.href));
      if (!response.ok) {
        throw new Error(`Could not load ${file.href}`);
      }

      const raw = await response.text();
      let formatted = raw;
      try {
        formatted = JSON.stringify(JSON.parse(raw), null, 2);
      } catch {
        formatted = raw;
      }

      setPreview({
        type: 'json',
        title: `${agentTitle} — ${file.label}`,
        href: file.href,
        content: formatted
      });
    } catch (error) {
      setPreview({
        type: 'json',
        title: `${agentTitle} — ${file.label}`,
        href: file.href,
        content: `Unable to load workflow JSON.\n\n${error.message}`
      });
    }
  }

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <FlagshipProjects openPreview={setPreview} />
        <Agents openPreview={setPreview} openJsonPreview={openJsonPreview} />
        <OlderProjects />
        <Achievements />
        <Certifications />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <span>© 2026 {profile.name}. AI agents, full-stack systems, and intelligent automation.</span>
        </div>
      </footer>
      <Modal item={preview} onClose={() => setPreview(null)} />
    </>
  );
}
