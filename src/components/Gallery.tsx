import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Gallery",
  },
  de: {
    heading: "Galerie",
  },
  ru: {
    heading: "Галерея",
  },
}

const photos = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/5710d72e-7d57-4634-ab4f-ab0fca2f41dd/bucket/a940bd0c-7202-40c7-85f5-2ead3507dda8.png",
    title: { en: "Practice", de: "Übung", ru: "Практика" },
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/projects/5710d72e-7d57-4634-ab4f-ab0fca2f41dd/bucket/94732e53-25bc-426e-ba01-5f2f29b0a1bd.png",
    title: { en: "Blow-dry technique", de: "Föhntechnik", ru: "Техника укладки" },
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/5710d72e-7d57-4634-ab4f-ab0fca2f41dd/bucket/850e4f06-3c8b-42c8-bf8f-089ba3d88ad4.png",
    title: { en: "Scissor work", de: "Scherenarbeit", ru: "Работа ножницами" },
  },
  {
    id: 4,
    image: "https://cdn.poehali.dev/projects/5710d72e-7d57-4634-ab4f-ab0fca2f41dd/bucket/26171f53-4184-415c-b307-2e6a5fec5681.JPG",
    title: { en: "With a student", de: "Mit Schüler", ru: "С учеником" },
  },
  {
    id: 5,
    image: "https://cdn.poehali.dev/projects/5710d72e-7d57-4634-ab4f-ab0fca2f41dd/bucket/4c1cca6a-1c5b-4ae3-a366-b106577e0fdc.png",
    title: { en: "Haircut", de: "Haarschnitt", ru: "Стрижка" },
  },
]

const galleryItems = {
  en: photos.map((p) => ({ ...p, title: p.title.en })),
  de: photos.map((p) => ({ ...p, title: p.title.de })),
  ru: photos.map((p) => ({ ...p, title: p.title.ru })),
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % items.length
      setSelectedId(items[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length
      setSelectedId(items[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group overflow-hidden bg-charcoal/5 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <small className="text-charcoal/70 font-medium">{item.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}