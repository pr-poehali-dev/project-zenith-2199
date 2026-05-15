import { useState } from "react"

interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Upcoming Courses",
    learnMore: "Sign Up",
    modalTitle: "Sign Up for the Course",
    name: "Your Name",
    phone: "Phone Number",
    email: "Email",
    submit: "Submit",
    cancel: "Cancel",
    success: "Thank you! We will contact you shortly.",
    namePlaceholder: "John Smith",
    phonePlaceholder: "+1 234 567 8900",
    emailPlaceholder: "email@example.com",
  },
  de: {
    heading: "Kommende Kurse",
    learnMore: "Anmelden",
    modalTitle: "Für den Kurs anmelden",
    name: "Ihr Name",
    phone: "Telefonnummer",
    email: "E-Mail",
    submit: "Absenden",
    cancel: "Abbrechen",
    success: "Danke! Wir melden uns bald bei Ihnen.",
    namePlaceholder: "Max Mustermann",
    phonePlaceholder: "+49 123 456 7890",
    emailPlaceholder: "email@beispiel.de",
  },
  ru: {
    heading: "Ближайшие курсы",
    learnMore: "Записаться",
    modalTitle: "Запись на курс",
    name: "Ваше имя",
    phone: "Номер телефона",
    email: "Email",
    submit: "Отправить",
    cancel: "Отмена",
    success: "Спасибо! Мы свяжемся с вами в ближайшее время.",
    namePlaceholder: "Иван Иванов",
    phonePlaceholder: "+7 999 123 45 67",
    emailPlaceholder: "email@example.com",
  },
}

const courseDescription = {
  ru: "На курсах вы:\n• освоите профессиональные техники стрижек и ухода за бородой;\n• научитесь работать с разными типами волос и формами лица;\n• узнаете секреты общения с клиентами;\n• получите практические навыки от опытного мастера.\n\nМы гарантируем индивидуальный подход: группа состоит не более чем из 4 человек — каждый ученик получает достаточно времени и внимания от преподавателя.\n\nПроцесс обучения:\n• начальный этап — отработка техник на учебных головах;\n• продвинутый этап — работа с реальными клиентами под наблюдением наставника.\n\n5 недель обучения — и у вас есть практический опыт, портфолио и готовность к трудоустройству.",
  en: "During the course you will:\n• master professional haircut and beard care techniques;\n• learn to work with different hair types and face shapes;\n• discover the secrets of client communication;\n• gain practical skills from an experienced master.\n\nWe guarantee individual attention: groups of no more than 4 students.\n\nTraining process:\n• initial stage — technique practice on training heads;\n• advanced stage — working with real clients under mentor supervision.\n\n5 weeks of training — and you have practical experience, a portfolio and readiness for employment.",
  de: "Im Kurs werden Sie:\n• professionelle Haarschnitt- und Bartpflegetechniken beherrschen;\n• mit verschiedenen Haartypen und Gesichtsformen arbeiten;\n• die Geheimnisse der Kundenkommunikation lernen;\n• praktische Fähigkeiten von einem erfahrenen Meister erwerben.\n\nWir garantieren individuelle Betreuung: Gruppen von maximal 4 Schülern.\n\nLernprozess:\n• Anfangsstufe — Technikübungen an Lernköpfen;\n• Fortgeschrittene Stufe — Arbeit mit echten Kunden unter Anleitung.\n\n5 Wochen Ausbildung — und Sie haben Praxiserfahrung, ein Portfolio und Berufsreife.",
}

const concerts = {
  en: [
    {
      date: "02.06.2026",
      time: "10:00",
      title: "Beginner Barbering Intensive",
      venue: "Barbershop Studio",
      location: "3 days · 5 spots left",
      description: courseDescription.en,
    },
  ],
  de: [
    {
      date: "02.06.2026",
      time: "10:00",
      title: "Anfänger Intensivkurs Barbering",
      venue: "Barbershop Studio",
      location: "3 Tage · 5 Plätze frei",
      description: courseDescription.de,
    },
  ],
  ru: [
    {
      date: "2 июня 2026",
      time: "10:00",
      title: "Интенсив для начинающих барберов",
      venue: "Барбер-студия",
      location: "3 дня · осталось 5 мест",
      description: courseDescription.ru,
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  const [isOpen, setIsOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")
  const [form, setForm] = useState({ name: "", phone: "", email: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleOpen = (title: string) => {
    setSelectedCourse(title)
    setSubmitted(false)
    setForm({ name: "", phone: "", email: "" })
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
                  {concert.description && (
                    <p className="text-charcoal/80 text-sm leading-relaxed mt-4 whitespace-pre-line">{concert.description}</p>
                  )}
                </div>
                <div className="flex justify-start md:justify-end">
                  <button
                    onClick={() => handleOpen(concert.title)}
                    className="text-gold hover:text-gold/80 transition-colors text-sm font-medium"
                  >
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={handleClose}
        >
          <div
            className="bg-background border border-taupe/30 rounded-lg p-8 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-charcoal text-xl font-semibold mb-1">{t.modalTitle}</h3>
            <p className="text-taupe text-sm mb-6">{selectedCourse}</p>

            {submitted ? (
              <div className="text-center py-6">
                <p className="text-charcoal text-base">{t.success}</p>
                <button
                  onClick={handleClose}
                  className="mt-6 text-gold hover:text-gold/80 transition-colors text-sm font-medium"
                >
                  {t.cancel}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-charcoal/70 text-sm mb-1">{t.name}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="w-full bg-transparent border border-taupe/40 rounded px-3 py-2 text-charcoal placeholder-taupe/50 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-charcoal/70 text-sm mb-1">{t.phone}</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.phonePlaceholder}
                    className="w-full bg-transparent border border-taupe/40 rounded px-3 py-2 text-charcoal placeholder-taupe/50 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-charcoal/70 text-sm mb-1">{t.email}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className="w-full bg-transparent border border-taupe/40 rounded px-3 py-2 text-charcoal placeholder-taupe/50 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-gold text-background py-2 rounded text-sm font-medium hover:bg-gold/90 transition-colors"
                  >
                    {t.submit}
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 border border-taupe/40 text-charcoal py-2 rounded text-sm font-medium hover:border-taupe transition-colors"
                  >
                    {t.cancel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
