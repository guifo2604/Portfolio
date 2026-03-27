import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: "Prompt Master",
    description: "Plataforma para gerenciamento e otimização de prompts inteligentes. Focada em produtividade para usuários de IA.",
    techs: ["React", "Tailwind", "Node.js", "Java", "Oracle"],
    deployLink: "https://prompt-master-pearl.vercel.app/", 
    repoLink: "https://github.com/PromptMaster-1TDSPX-2025/Front"
  },
  {
    id: 2,
    title: "Gerenciador de Tarefas",
    description: "Sistema completo para controle de demandas, prazos e organização pessoal com persistência de dados.",
    techs: ["Java", "Spring Boot", "Oracle", "React"],
    deployLink: "https://seu-link-deploy.com",
    repoLink: "https://github.com/guifo2604/tasks-manager"
  }
]

function App() {
  const [expandedId, setExpandedId] = useState(null);
  const [zoomProject, setZoomProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#F0EAD6] text-[#3E2723] font-sans antialiased">
      
      {/* 1. SOBRE MIM */}
      <section className="max-w-4xl mx-auto pt-16 px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-[#D7CCC8] pb-12">
          <div className="w-40 h-40 rounded-full border-4 border-[#A1887F] overflow-hidden shadow-xl shrink-0">
            <img src="https://github.com/guifo2604.png" alt="Perfil" className="w-full h-full object-cover" 
                 onError={(e) => e.target.src = 'https://via.placeholder.com/150/A1887F/ffffff?text=GS'} />
          </div>
          
          <div className="text-center md:text-left grow">
            <h1 className="text-4xl font-serif font-bold text-[#3E2723]">Guilherme Santos Fonseca</h1>
            <p className="max-w-xl text-[#5D4037] leading-relaxed mt-2 mb-6">
              Desenvolvedor de Software com sólida base em tecnologias como: Python, Java, Banco de Dados Oracle e React adquirida em projetos pessoais e bootcamps.
            </p>
            
            {/* Informações de Contato Superior */}
            <div className="flex flex-col gap-3 text-sm font-medium text-[#795548]">
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                <span className="flex items-center gap-2"><FaMapMarkerAlt /> Santo André, SP</span>
                <span className="flex items-center gap-2"><FaEnvelope /> guilherme.stosfonseca@gmail.com</span>
<a 
  href="https://wa.me/5511974231552" 
  target="_blank" 
  rel="noreferrer" 
  className="flex items-center gap-2 text-[#2E7D32] hover:text-[#1B5E20] transition-colors font-bold"
>
  <FaWhatsapp className="text-lg" /> (11) 97423-1552
</a>              </div>
              
              {/* Links com Ícones */}
              <div className="flex justify-center md:justify-start gap-5 mt-2">
                <a href="https://github.com/guifo2604" target="_blank" rel="noreferrer" 
                   className="flex items-center gap-2 underline decoration-[#A1887F] hover:text-[#3E2723] transition-colors">
                  <FaGithub className="text-lg" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/guilherme-fonseca-2b57b5358" target="_blank" rel="noreferrer"
                   className="flex items-center gap-2 underline decoration-[#A1887F] hover:text-[#3E2723] transition-colors">
                  <FaLinkedin className="text-lg" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LISTA DE PROJETOS */}
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-serif text-[#4E342E] mb-10 border-l-4 border-[#A1887F] pl-4">Projetos Selecionados</h2>
        
        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <div key={p.id} className="border-b border-[#D7CCC8] py-4 transition-all">
              <div 
                onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                className="flex justify-between items-center cursor-pointer group hover:pl-2 transition-all"
              >
                <h3 className="text-xl font-medium text-[#3E2723] group-hover:text-[#8D6E63]">
                  {p.title}
                </h3>
                <span className="text-2xl text-[#A1887F]">{expandedId === p.id ? '−' : '+'}</span>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${expandedId === p.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.techs.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest bg-[#EFEBE9] border border-[#D7CCC8] px-2 py-1 text-[#5D4037]">
                      {t}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setZoomProject(p)}
                  className="text-xs font-bold uppercase tracking-tighter text-[#3E2723] border-b-2 border-[#3E2723] hover:text-[#8D6E63] hover:border-[#8D6E63]"
                >
                  Expandir Detalhes (Zoom In)
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DE ZOOM */}
      {zoomProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2723]/95 backdrop-blur-md p-6">
          <div className="bg-[#F0EAD6] p-8 md:p-16 rounded-sm shadow-2xl max-w-3xl w-full relative">
            <button 
              onClick={() => setZoomProject(null)}
              className="absolute top-6 right-6 text-[#3E2723] font-mono text-xl hover:rotate-90 transition-transform"
            >
              [fechar]
            </button>
            
            <span className="text-[#A1887F] font-mono text-sm uppercase mb-2 block">Projeto // 0{zoomProject.id}</span>
            <h2 className="text-5xl font-serif text-[#3E2723] mb-6">{zoomProject.title}</h2>
            <p className="text-lg text-[#5D4037] leading-relaxed mb-10 border-l-2 border-[#D7CCC8] pl-6">
              {zoomProject.description}
            </p>

            <div className="flex gap-6">
              <a href={zoomProject.deployLink} target="_blank" rel="noreferrer" className="bg-[#3E2723] text-[#F0EAD6] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#5D4037] transition-colors text-center flex-1 md:flex-none">
                Visitar Site
              </a>
              <a href={zoomProject.repoLink} target="_blank" rel="noreferrer" className="border-2 border-[#3E2723] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#3E2723] hover:text-[#F0EAD6] transition-all text-center flex-1 md:flex-none">
                Repositório
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#3E2723] text-[#D7CCC8] py-20 px-6 mt-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-[#F0EAD6] text-xl font-serif mb-4">Sobre o Desenvolvedor</h4>
            <p className="text-sm leading-relaxed opacity-80">
              Trabalho na intersecção entre funcionalidade técnica e estética minimalista. Atualmente focado em ecossistemas Java e Front-end moderno com React.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h4 className="text-[#F0EAD6] text-xl font-serif mb-2">Contato Direto</h4>
            <p className="text-sm flex items-center justify-center md:justify-start gap-2"><FaEnvelope /> guilherme.stosfonseca@gmail.com</p>
            <p className="text-sm flex items-center justify-center md:justify-start gap-2 text-white font-bold"><FaWhatsapp /> (11) 97423-1552</p>
            <div className="flex gap-6 mt-4 justify-center md:justify-start">
              <a href="https://github.com/guifo2604" target="_blank" rel="noreferrer" className="text-[#F0EAD6] border-b border-[#F0EAD6] text-xs uppercase font-bold py-1 flex items-center gap-2"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/guilherme-fonseca-2b57b5358" target="_blank" rel="noreferrer" className="text-[#F0EAD6] border-b border-[#F0EAD6] text-xs uppercase font-bold py-1 flex items-center gap-2"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="max-w-4xl mx-auto mt-16 pt-8 border-t border-[#5D4037] text-[10px] uppercase tracking-[0.3em] text-center opacity-50">
          Handcrafted in 2026 • React + Tailwind CSS
        </p>
      </footer>
    </div>
  )
}

export default App