import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: Duration & Mini badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-white/40 uppercase text-xs tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight">
          {intern.role}
        </h3>
        <p className="text-xs uppercase tracking-wider text-red-200 font-semibold mb-6 mt-1">
          {intern.organization}
        </p>

        {/* Skills gained bulleted list */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase font-bold text-white/90 tracking-wider mb-2">
              Skills Gained:
            </h4>
            <ul className="space-y-1.5 text-sm text-red-50">
              {intern.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-white/60">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies bottom row */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-4 mt-auto">
          <h4 className="text-[10px] uppercase font-bold text-white/70 tracking-widest mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-black/30 text-white font-mono text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  return (
    <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top edge torn-paper SVG divider flowing from previous dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
            className="fill-[#0a0a0a]"
          />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="absolute bottom-8 left-8 w-8 h-8 text-black opacity-20 animate-pulse pointer-events-none z-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centred Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-xl mx-auto">
            Hands-on software development experience, real-world project contributions, and technical skills honed in collaborative environments.
          </p>
        </div>

        {/* Internships Grid or Availability Message */}
        {internshipsList && internshipsList.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {internshipsList.map((intern, index) => (
              <InternshipCard
                key={`${intern.organization}-${index}`}
                intern={intern}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div
            data-aos="fade-up"
            className="max-w-xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
          >
            <p className="text-white text-lg font-bold mb-2">
              Available for Opportunities
            </p>
            <p className="text-red-100 text-sm">
              Currently open to Python Full Stack Developer roles, internships, and engineering opportunities.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
