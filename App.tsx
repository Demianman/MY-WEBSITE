
import React, { useState, useEffect } from 'react';
import { 
  PERSONAL_INFO, 
  EDUCATION, 
  WORK_EXPERIENCE, 
  PROJECTS, 
  SKILLS, 
  AWARDS, 
  LEADERSHIP 
} from './constants';
import { Project } from './types';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F5F2ED]/95 backdrop-blur-md py-4 border-b border-black/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-3">
          <div className="w-6 h-6 bg-[#E13D3D] rounded-full"></div>
          <span className="serif italic">Yiman Wu</span>
        </a>
        <div className="hidden md:flex space-x-12 text-[10px] font-extrabold uppercase tracking-[0.3em]">
          {['About', 'Education', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#E13D3D] transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="px-6 py-2 border-2 border-black rounded-full text-[10px] font-black uppercase hover:bg-black hover:text-white transition-all">
                Contact
            </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; id: string }> = ({ title, subtitle, id }) => (
  <div id={id} className="mb-20 pt-32">
    <div className="flex flex-col items-start">
        <span className="text-[#E13D3D] mono text-[10px] font-bold tracking-[0.4em] uppercase mb-4">[{id}]</span>
        <h2 className="text-5xl md:text-7xl serif font-black tracking-tighter leading-tight">
            <span className="formal-stroke">{title}</span>
        </h2>
        {subtitle && <p className="mt-4 text-black/50 font-semibold tracking-widest uppercase text-xs">{subtitle}</p>}
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white p-10 rounded-xl card-shadow border border-black/5 hover:border-[#E13D3D]/40 transition-all group flex flex-col h-full">
    <div className="flex justify-between items-start mb-10">
      <span className="text-[10px] font-black uppercase tracking-widest bg-[#E13D3D]/5 text-[#E13D3D] px-3 py-1 rounded">
        {project.category}
      </span>
      <span className="text-black/30 mono text-[10px]">{project.period}</span>
    </div>
    <div className="flex-grow">
        <h3 className="text-3xl serif font-black mb-4 group-hover:text-[#E13D3D] transition-colors leading-tight italic">{project.title}</h3>
        <p className="text-[#E13D3D] text-[9px] mb-8 mono uppercase tracking-widest font-bold">// {project.role}</p>
        <ul className="space-y-4 mb-10">
          {project.description.map((desc, i) => (
            <li key={i} className="text-black/70 text-sm leading-relaxed flex items-start">
              <span className="text-[#E13D3D] mr-4 text-lg font-black">•</span>
              {desc}
            </li>
          ))}
        </ul>
    </div>
    <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5">
      {project.techStack?.map((tech) => (
        <span key={tech} className="text-[9px] font-black text-black/40 mono border border-black/5 px-3 py-1 rounded-sm uppercase bg-black/5">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - High Contrast Refinement */}
      <header className="min-h-screen flex flex-col justify-center px-8 relative overflow-hidden pt-20">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 ppt-oval opacity-[0.03] -z-10"></div>
        
        <div className="container mx-auto">
          <div className="max-w-6xl">
            <p className="text-[#E13D3D] font-black uppercase tracking-[0.6em] text-[12px] mb-12">
                Engineering Innovation • Healthcare Precision
            </p>
            <h1 className="text-7xl md:text-[11rem] serif font-black text-black mb-10 tracking-tighter leading-[0.85] italic">
                Optimizing <br/> For <span className="text-[#E13D3D]">Impact.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-10 mt-4">
              <div className="bg-black text-white px-10 py-6 rounded-sm card-shadow inline-block">
                <p className="text-xl md:text-3xl font-light tracking-tight italic">
                    <span className="font-bold">Yiman Wu</span> | MS in AI @ Carnegie Mellon
                </p>
              </div>
              <p className="max-w-md text-black/60 text-lg font-medium leading-tight">
                Specialized in the synthesis of <span className="text-black font-bold underline decoration-[#E13D3D] decoration-4 underline-offset-4 italic">Neural Computing</span> and clinical diagnostic technologies.
              </p>
            </div>
            <div className="flex gap-6 mt-16">
              <a href="#projects" className="btn-hover px-12 py-5 bg-[#E13D3D] text-white rounded-full font-black tracking-widest uppercase text-[11px] shadow-lg">
                  Explore Work
              </a>
              <a href="#contact" className="btn-hover px-12 py-5 border-2 border-black text-black rounded-full font-black tracking-widest uppercase text-[11px]">
                  Get In Touch
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 pb-40">
        {/* Profile Section - Cleaned up */}
        <section id="about" className="grid lg:grid-cols-2 gap-24 items-start py-40">
            <div>
                <span className="text-[#E13D3D] mono text-[10px] font-black tracking-[0.5em] uppercase mb-8 block">/ IDENTITY /</span>
                <h2 className="text-6xl serif font-black leading-none mb-12 italic tracking-tighter">
                    Bridging Clinical <br/><span className="text-[#E13D3D]">Intelligence.</span>
                </h2>
                <p className="text-2xl text-black/80 leading-[1.6] font-light mb-16 tracking-tight">
                    {PERSONAL_INFO.summary}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {PERSONAL_INFO.hobbies.map(hobby => (
                        <div key={hobby.name} className="flex items-center space-x-6">
                            <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm text-xl flex-shrink-0">
                                <i className={`fa-solid ${hobby.icon}`}></i>
                            </div>
                            <div>
                                <h4 className="text-black font-black text-sm uppercase italic">{hobby.name}</h4>
                                <p className="text-xs text-black/40 font-medium tracking-tight">{hobby.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-black/5 card-shadow lg:mt-24">
                <div className="border-l-8 border-[#E13D3D] pl-10 py-6">
                    <h3 className="text-4xl serif font-black italic mb-4 tracking-tighter italic">Philosophy</h3>
                    <p className="text-xl text-black/70 font-medium italic leading-relaxed">
                        "{PERSONAL_INFO.philosophy}"
                    </p>
                </div>
                <div className="mt-12 p-8 bg-[#E13D3D] text-white rounded-sm">
                    <p className="mono text-[10px] font-bold tracking-widest uppercase mb-2">Technical Core</p>
                    <p className="text-2xl font-black serif italic">Merging Data Science with Biological Life.</p>
                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeader title="Selected Projects" subtitle="R&D CASE STUDIES" id="projects" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <SectionHeader title="Education" subtitle="ACADEMIC CAREER" id="education" />
          <div className="grid gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-white p-12 rounded-xl border border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-12 group hover:border-[#E13D3D]/30 transition-all card-shadow">
                <div className="flex items-start gap-10">
                    <div className="text-5xl font-black serif italic text-black/5 group-hover:text-[#E13D3D]/10 transition-colors">0{idx+1}</div>
                    <div>
                        <h3 className="text-4xl serif font-black text-black mb-2 italic tracking-tighter">{edu.school}</h3>
                        <p className="text-black/60 text-xl font-medium tracking-tight">{edu.degree}</p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {edu.highlights?.map(h => (
                                <span key={h} className="text-[10px] font-black uppercase text-[#E13D3D] mono bg-[#E13D3D]/5 px-4 py-1.5 border border-[#E13D3D]/10 rounded-sm">
                                    {h}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:text-right flex flex-col gap-2 border-l-2 md:border-l-0 md:border-r-4 border-[#E13D3D] pl-6 md:pl-0 md:pr-8">
                    <span className="text-2xl font-black text-black mono tracking-tighter">
                        {edu.period}
                    </span>
                    <p className="text-black/40 text-[10px] font-bold tracking-[0.3em] uppercase">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Awards Section */}
        <div className="grid lg:grid-cols-2 gap-24 mt-20">
            <section id="skills">
                <SectionHeader title="Technical Core" subtitle="CAPABILITIES" id="skills" />
                <div className="grid gap-12">
                    {SKILLS.map((cat) => (
                        <div key={cat.category}>
                            <h4 className="text-black font-black uppercase text-xs tracking-[0.4em] mb-8 flex items-center">
                                <span className="w-12 h-1.5 bg-[#E13D3D] mr-4"></span>
                                {cat.category}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-6 py-3 bg-white text-black text-[10px] font-extrabold rounded-full border border-black/5 hover:bg-black hover:text-white transition-all cursor-default shadow-sm uppercase tracking-widest">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="awards">
                <SectionHeader title="Honors" subtitle="RECOGNITIONS" id="awards" />
                <div className="space-y-4">
                    {AWARDS.map((award, idx) => (
                        <div key={idx} className="flex items-center p-8 bg-white rounded-xl border border-black/5 group hover:bg-black transition-all shadow-sm">
                            <div className="w-12 h-12 bg-[#E13D3D] text-white flex items-center justify-center text-lg mr-8 shadow-md">
                                <i className="fa-solid fa-award"></i>
                            </div>
                            <div>
                                <span className="text-[#E13D3D] text-[10px] font-black uppercase tracking-[0.4em] mb-1 block">{award.year}</span>
                                <h4 className="text-black font-black text-xl serif group-hover:text-white transition-colors italic leading-tight tracking-tight">{award.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        {/* Contact CTA */}
        <section id="contact" className="mt-60">
            <div className="bg-[#E13D3D] rounded-xl p-16 md:p-32 text-center text-white card-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 ppt-oval bg-white/10 -mr-48 -mt-48"></div>
                <div className="relative z-10">
                    <p className="text-white/70 font-black uppercase tracking-[0.6em] mb-10 text-[10px]">Ready for Calibration</p>
                    <h2 className="text-5xl md:text-8xl font-black serif italic tracking-tighter mb-16 leading-tight">
                        Let's Engineer <br/> the Next <span className="text-black">Solution.</span>
                    </h2>
                    <div className="flex flex-col items-center gap-12">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-3xl md:text-5xl font-black text-white hover:text-black transition-all border-b-4 border-white pb-4 tracking-tighter italic">
                            {PERSONAL_INFO.email}
                        </a>
                        <div className="flex gap-12 mt-10">
                            <a href="#" className="text-white text-4xl hover:scale-125 transition-transform"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="text-white text-4xl hover:scale-125 transition-transform"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="py-24 border-t border-black/10 text-center bg-[#F5F2ED]">
          <div className="container mx-auto px-8">
            <p className="text-black/30 mono text-[10px] uppercase tracking-[0.6em] font-bold">
              © {new Date().getFullYear()} Yiman Wu • Designed for Engineering Excellence
            </p>
          </div>
      </footer>
    </div>
  );
};

export default App;
