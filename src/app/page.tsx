import { BookOpen, Calculator, Check, CodeXml, FlaskConical, Globe2, GraduationCap, Languages, MapPin, Monitor, Sparkles, Sprout } from "lucide-react";
import { Brand } from "@/components/brand";

const subjects = [
  { name: "Mathematics", caption: "Make the numbers click", icon: Calculator, color: "sage" },
  { name: "Physics", caption: "Understand the why", icon: FlaskConical, color: "peach" },
  { name: "English", caption: "Find your confidence", icon: Languages, color: "lavender" },
  { name: "Programming", caption: "Build something new", icon: CodeXml, color: "blue" },
  { name: "IELTS", caption: "Open your next door", icon: Globe2, color: "yellow" },
];

export default function Home() {
  return <>
    <div className="announcement"><Sprout size={15} /><span>A little guidance. A world of possibility.</span></div>
    <header className="site-header"><div className="container navbar"><Brand /><nav aria-label="Main navigation"><a href="#subjects">Explore subjects</a><a href="#how-it-works">How it works</a><a className="btn btn-primary nav-cta" href="#learning-options">Find your path</a></nav></div></header>
    <main id="main-content">
      <section className="home-hero container">
        <div className="hero-copy"><p className="eyebrow"><span /> MADE FOR YOUR NEXT CHAPTER</p><h1>Big dreams.<br />The right <span className="serif-word">guidance.</span></h1><p className="hero-description">That tricky subject. That next exam. That skill you’ve always wanted to learn. Find a mentor who helps it all make sense.</p><div className="hero-actions"><a className="btn btn-primary" href="#subjects">Explore subjects</a><a className="btn btn-outline" href="#how-it-works">How it works</a></div><div className="hero-benefits"><span><Check size={16} /> Online & in-person</span><span><Check size={16} /> Learn at your pace</span></div></div>
        <div className="hero-art" aria-label="Illustration of a personal learning journey" role="img">
          <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" /><span className="art-spark"><Sparkles size={34} /></span>
          <div className="learning-card"><div className="learning-card-top"><span className="small-icon"><BookOpen size={23} /></span><span>YOUR NEXT CHAPTER</span><span className="tiny-flower">✳</span></div><div className="illustration"><div className="sun" /><div className="book book-back" /><div className="book book-middle" /><div className="book book-front"><Sprout size={55} strokeWidth={1.3} /></div><div className="pencil" /><div className="plant"><span /><span /><span /></div></div><p>Small steps.<br /><em>Extraordinary possibilities.</em></p><div className="card-rule" /><div className="learning-card-bottom"><span>Curiosity starts here</span><GraduationCap size={22} /></div></div>
          <div className="floating-note note-top"><span className="note-icon"><Monitor size={20} /></span><span>Anywhere you are<strong>Online or in person</strong></span></div><div className="floating-note note-bottom"><span className="note-icon amber"><Sparkles size={22} /></span><span>Your goals, your pace<strong>A little help goes a long way.</strong></span></div>
        </div>
      </section>
      <section className="learning-strip" id="learning-options"><div className="container strip-grid"><p>Different goals.<br /><strong>A place for every learner.</strong></p><span><GraduationCap />School & college</span><span><CodeXml />Career-ready skills</span><span><Globe2 />Language & IELTS</span></div></section>
      <section className="section container" id="subjects"><div className="section-heading"><div><p className="eyebrow">FOLLOW YOUR CURIOSITY</p><h2>What will you learn next?</h2></div><p>A stronger foundation or a fresh start.<br />It begins with a subject you want to explore.</p></div><div className="subject-grid">{subjects.map(({ name, caption, icon: Icon, color }) => <article className="subject-card" key={name}><span className={`subject-icon ${color}`}><Icon size={27} strokeWidth={1.6} /></span><h3>{name}</h3><p>{caption}</p></article>)}</div></section>
      <section className="how-section" id="how-it-works"><div className="container"><div className="center-heading"><p className="eyebrow">LESS SEARCHING. MORE LEARNING.</p><h2>Your next chapter, made simple.</h2><p>Good guidance should be easy to find.</p></div><div className="steps-grid"><article><span className="step-icon"><BookOpen /></span><h3>Find your fit</h3><p>Explore tuition by subject, class, learning mode, and monthly budget.</p></article><article><span className="step-icon"><MapPin /></span><h3>Make the connection</h3><p>Share your learning goals and preferred schedule in your application.</p></article><article><span className="step-icon"><Sprout /></span><h3>Grow from there</h3><p>Once your tutor accepts, take the next step in your learning journey.</p></article></div></div></section>
      <section className="container closing-section"><div><p className="eyebrow">GOOD THINGS START WITH CURIOSITY</p><h2>There’s always more<br />to <em>discover.</em></h2></div><a className="btn btn-primary" href="#subjects">Explore your next subject</a></section>
    </main><footer className="site-footer"><div className="container footer-main"><div><Brand /><p>A little guidance for your biggest goals.<br />Built around the way you learn.</p></div><div><h3>Explore</h3><a href="#subjects">Subjects</a><a href="#how-it-works">How it works</a></div><div><h3>Learning, your way</h3><p>Online & offline mentorship<br />Bangladesh</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MentorLagbe. All rights reserved.</span><span>Stay curious. Keep growing.</span></div></footer>
  </>;
}
