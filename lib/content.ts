import type { Season } from "./seasons";

export const site = {
  name: "Himangshu Singh",
  initials: "HS",
  title: "Himangshu Singh",// — Software Engineer & Writer",
  description: "Software engineer by day, writer when the light changes.",
  role: "Associate Software Engineer",
  location: "Kolkata, India",
  status: "Open to work",
  email: "singhhimangshu20@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/himangshusingh/",
    github: "https://github.com/himangshusingh",
    substack: "https://substack.com/@catppuccinno",
  },
  footer: "© Himangshu Singh. Built with the seasons in mind.",
};

export const hero = {
  heading: "Hi, I’m Himangshu. I build software by day and write when the light changes.",
  primaryCta: { label: "See my work", href: "#work" },
  secondaryCta: { label: "Read my writing", href: "#writing" },
};

export type Entry = {
  title: string;
  href: string;
  summary: string;
  meta?: string;
  poem?: boolean;
};

export const projects: Entry[] = [
  {
    title: "SignaturePDF",
    href: "https://github.com/himangshusingh/SignaturePDF",
    summary:
      "A desktop app for signing PDFs. Preview the pages, drag a signature onto them, resize it, and save positions across many pages before exporting in one go. Ships as a Windows installer.",
    meta: "Python, PyQt6, PyMuPDF, ReportLab, Inno Setup",
  },
  {
    title: "Louvain-Enhanced",
    href: "https://github.com/himangshusingh/louvain-enhanced",
    summary:
      "A Python package on PyPI for finding communities in large networks with the Louvain method. Works with weighted and unweighted NetworkX graphs, and randomises node order so each run can surface a different partition.",
    meta: "Python, NetworkX, NumPy, PyPI",
  },
  {
    title: "Luc_P",
    href: "https://github.com/himangshusingh/lac_p",
    summary:
      "A command-line search tool that indexes a folder of files, then finds any word or phrase in it and lists every file where it appears. Packaged as a single runnable JAR.",
    meta: "Java, Apache Lucene, Gradle, Gson",
  },
];

export const skills = ["Java", "Kotlin", "Node.js", "Python", "PostgreSQL"];

export const writing: Entry[] = [
  {
    title: "Title of a piece",
    href: "#",
    summary: "Open with the first line here, so readers can hear your voice before they click.",
    meta: "Poem · Autumn",
    poem: true,
  },
  {
    title: "Title of a blog post",
    href: "#",
    summary:
      "A short summary of what the post is about and why someone should read it. Link it to your Substack.",
    meta: "Essay · 6 min read",
  },
  {
    title: "An abstract piece",
    href: "#",
    summary: "Another opening line, in italics, to set the mood of the piece.",
    meta: "Abstract · Winter",
    poem: true,
  },
  {
    title: "Read everything on Substack",
    href: site.links.substack,
    summary: "New pieces land there first. Subscribe to get them in your inbox.",
  },
];

export const substackCard = {
  heading: "On Substack",
  blurb: "Poems, abstract pieces, and essays — whatever shows up.",
  cta: "Subscribe ↗",
  counts: {
    spring: 4,
    summer: 2,
    monsoon: 7,
    autumn: 3,
    winter: 5,
  } satisfies Record<Season, number>,
  quote: "“I leave my typos in so you know I’m not a bot.”",
};

export const contact = {
  note: [
    "Have a role, a project, or a poem to trade?",
    "Write to me. I read everything, and I usually reply within a couple of days.",
  ],
  signoff: "— Himangshu",
  postmark: "Kolkata",
  lines: [
    { label: "GitHub", href: site.links.github, display: "github.com/himangshusingh" },
    { label: "LinkedIn", href: site.links.linkedin, display: "in/himangshusingh" },
    { label: "Substack", href: site.links.substack, display: "substack.com/@catppuccinno" },
  ],
};

export const about = {
  paragraphs: [
    "I’m an Associate Software Engineer based in Kolkata. I like building things that feel simple to use, which usually means a lot of careful work behind the scenes.",
    "Outside work I write whatever needs writing: poems, abstract pieces, essays. It all comes out of the things I’m learning, noticing, and unlearning. The seasons keep showing up in both.",
  ],
  currently: [
    { label: "Reading", value: "BluePrint by Marcus de Sautoy" },
    { label: "Writing", value: "Something abstract, in progress" },
    { label: "Building", value: "A side project" },
    { label: "Listening", value: "An album on repeat" },
  ],
};
