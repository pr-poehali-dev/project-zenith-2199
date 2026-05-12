import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Sign Up for a Course",
    subheading: "Leave your details and we'll get back to you within a day",
    email: "Email",
    phone: "Phone",
    message: "Which course interests you?",
    send: "Send Application",
    location: "Location",
    name: "Your Name",
    successMessage: "Your application has been sent! We'll contact you soon.",
    locationValue: "Barbershop Studio, city centre",
    phoneValue: "+7 (999) 123-45-67",
  },
  de: {
    heading: "Für einen Kurs anmelden",
    subheading: "Hinterlassen Sie Ihre Daten und wir melden uns innerhalb eines Tages",
    email: "E-Mail",
    phone: "Telefon",
    message: "Welcher Kurs interessiert Sie?",
    send: "Anfrage senden",
    location: "Standort",
    name: "Ihr Name",
    successMessage: "Ihre Anfrage wurde gesendet! Wir melden uns bald.",
    locationValue: "Barbershop Studio, Stadtzentrum",
    phoneValue: "+7 (999) 123-45-67",
  },
  ru: {
    heading: "Записаться на курс",
    subheading: "Оставьте свои данные и мы свяжемся с вами в течение дня",
    email: "Эл. почта",
    phone: "Телефон",
    message: "Какой курс вас интересует?",
    send: "Отправить заявку",
    location: "Адрес студии",
    name: "Ваше имя",
    successMessage: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
    locationValue: "Барбер-студия, центр города",
    phoneValue: "+7 (999) 123-45-67",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:hello@example.com?subject=${encodeURIComponent(`New message from ${formData.name}`)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.email}</small>
              <p className="text-charcoal">hello@example.com</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.phone}</small>
              <p className="text-charcoal">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            {submitted && (
              <div className="p-4 bg-gold/10 border border-gold/20 text-charcoal rounded text-sm">
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-warm-white py-3 font-medium hover:bg-charcoal/90 transition-colors duration-300"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}