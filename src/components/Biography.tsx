interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About the Master",
    paragraphs: [
      "With over 10 years of experience in the barbering industry, our master has worked in the best barbershops in the country and abroad. He honed his craft studying under European barbering champions and brings that expertise directly to his students.",
      "His passion lies not just in the cut, but in passing on the craft. Every course is built on real barbershop practice — no unnecessary theory, only techniques you can apply from day one behind the chair.",
      "Students of all levels are welcome: from complete beginners who have never held clippers, to experienced stylists looking to add barbering to their skill set.",
      "Over 300 graduates have already launched their careers after completing the courses. Many now work in top barbershops or run their own businesses.",
      "The master regularly participates in professional competitions and industry exhibitions, staying at the forefront of trends and bringing the latest techniques to every course.",
    ],
  },
  de: {
    heading: "Über den Meister",
    paragraphs: [
      "Mit über 10 Jahren Erfahrung in der Barbierbranche hat unser Meister in den besten Barbershops des Landes und im Ausland gearbeitet. Er hat sein Handwerk bei europäischen Barbier-Champions verfeinert und bringt dieses Wissen direkt zu seinen Schülern.",
      "Seine Leidenschaft liegt nicht nur im Schnitt, sondern im Weitergeben des Handwerks. Jeder Kurs basiert auf echter Barbershop-Praxis — keine unnötige Theorie, nur Techniken, die Sie vom ersten Tag an anwenden können.",
      "Schüler aller Niveaus sind willkommen: von Anfängern, die noch nie eine Schere in der Hand hatten, bis hin zu erfahrenen Stylisten, die Barbering zu ihrem Repertoire hinzufügen möchten.",
      "Über 300 Absolventen haben nach den Kursen ihre Karriere gestartet. Viele arbeiten jetzt in Top-Barbershops oder führen ihre eigenen Unternehmen.",
      "Der Meister nimmt regelmäßig an Fachbewerben und Branchenausstellungen teil und bringt die neuesten Techniken in jeden Kurs.",
    ],
  },
  ru: {
    heading: "О мастере",
    paragraphs: [
      "Более 10 лет опыта в индустрии барберинга — мастер работал в лучших барбершопах страны и за рубежом. Своё мастерство он оттачивал у чемпионов Европы по барберингу и передаёт эти знания своим ученикам.",
      "Его страсть — не только в стрижке, но и в передаче ремесла. Каждый курс построен на реальной практике барбершопа — без лишней теории, только техники, которые можно применять с первого дня работы.",
      "Курсы подходят для всех уровней: от полных новичков, никогда не державших машинку, до опытных стилистов, желающих добавить барберинг в свой арсенал.",
      "Более 300 выпускников уже построили карьеру после обучения. Многие работают в топовых барбершопах или открыли собственный бизнес.",
      "Мастер регулярно участвует в профессиональных соревнованиях и выставках индустрии, следит за актуальными трендами и привносит новейшие техники в каждый курс.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}