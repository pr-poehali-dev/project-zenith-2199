interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Upcoming Courses",
    learnMore: "Sign Up",
  },
  de: {
    heading: "Kommende Kurse",
    learnMore: "Anmelden",
  },
  ru: {
    heading: "Ближайшие курсы",
    learnMore: "Записаться",
  },
}

const concerts = {
  en: [
    {
      date: "02.06.2026",
      time: "10:00",
      title: "Beginner Barbering Intensive",
      venue: "Barbershop Studio",
      location: "3 days · 5 spots left",
    },

  ],
  de: [
    {
      date: "02.06.2026",
      time: "10:00",
      title: "Anfänger Intensivkurs Barbering",
      venue: "Barbershop Studio",
      location: "3 Tage · 5 Plätze frei",
    },

  ],
  ru: [
    {
      date: "2 июня 2026",
      time: "10:00",
      title: "Интенсив для начинающих барберов",
      venue: "Барбер-студия",
      location: "3 дня · осталось 5 мест",
    },

  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}