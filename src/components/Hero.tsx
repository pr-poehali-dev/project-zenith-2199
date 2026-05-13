interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "Barber Master",
    subtitle: "Professional Barbering Courses",
    description: "Learn the art of barbering from a true professional — from classic cuts to modern techniques",
  },
  de: {
    title: "Barber Master",
    subtitle: "Professionelle Barbier-Kurse",
    description: "Erlernen Sie die Kunst des Barbierens von einem echten Profi — von klassischen Schnitten bis zu modernen Techniken",
  },
  ru: {
    title: "Твой путь\nв барберинг\nначинается здесь",
    subtitle: "Профессиональные курсы по барберингу",
    description: "Освойте искусство барберинга у настоящего мастера — от классических стрижек до современных техник",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/5710d72e-7d57-4634-ab4f-ab0fca2f41dd/bucket/188b49d8-ef57-49f8-8a94-d126555fc79a.jpg"
          alt="Barber master"
          className="w-full h-full object-cover object-[center_10%]"
        />
        <div className="absolute inset-0 bg-charcoal/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl ml-auto text-right">
          <h1 className="text-white mb-6 animate-fade-in-up whitespace-pre-line">{t.title}</h1>
          <h3 className="text-white font-light mb-8 animate-fade-in-up animation-delay-100">{t.subtitle}</h3>
          <div className="line-accent mb-10 animate-fade-in-up animation-delay-200 ml-auto"></div>
          <p className="text-white font-light max-w-2xl mb-16 animate-fade-in-up animation-delay-300">{t.description}</p>

          {/* Social Links */}
          <div className="flex gap-8 animate-fade-in-up animation-delay-400">
            <a
              href="https://vk.com/club215781011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold transition-colors duration-300"
            >
              <span className="sr-only">ВКонтакте</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.597v1.566c0 .425-.135.68-1.253.68-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.597-.491h1.744c.444 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}