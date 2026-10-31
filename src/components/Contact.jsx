import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks, emailjsConfig } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: null })

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_email: formData.email,
      email: formData.email,
      message: formData.message,
    }

    // Check if configuration keys are provided
    const isConfigured =
      emailjsConfig.serviceId &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback to mailto if keys are not yet configured in .env.local
      const mailtoSubject = encodeURIComponent(
        `Portfolio message from ${formData.firstName} ${formData.lastName}`,
      )
      const mailtoBody = encodeURIComponent(
        `From: ${formData.firstName} ${formData.lastName} (${formData.email})\n\n${formData.message}`,
      )
      window.location.href = `mailto:${personalInfo.emails.primary}?subject=${mailtoSubject}&body=${mailtoBody}`
      setStatus({
        submitting: false,
        success: true,
        error: null,
      })
      return
    }

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey,
      )
      setStatus({ submitting: false, success: true, error: null })
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to send message via EmailJS. Please try again or use direct email.',
      })
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden text-white"
    >
      {/* Top torn-paper divider flowing from white SoftSkills section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Background ambient red glow circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column: Direct Contact Info (2 cols) */}
          <div
            className="lg:col-span-2 space-y-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">
                Contact Information
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Feel free to reach out directly through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-[#ff2a2a] shrink-0 mt-0.5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest block">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="text-white text-sm font-semibold hover:text-[#ff2a2a] transition-colors break-all"
                  >
                    {personalInfo.emails.primary}
                  </a>
                </div>
              </div>

              {/* Phone */}
              {personalInfo.phone && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-[#ff2a2a] shrink-0 mt-0.5">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest block">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-white text-sm font-semibold hover:text-[#ff2a2a] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              {personalInfo.location && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-[#ff2a2a] shrink-0 mt-0.5">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest block">
                      Location
                    </span>
                    <span className="text-white text-sm font-semibold">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form (3 cols) */}
          <div
            className="lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs uppercase font-bold text-white/70 tracking-widest mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs uppercase font-bold text-white/70 tracking-widest mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase font-bold text-white/70 tracking-widest mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase font-bold text-white/70 tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-all text-sm resize-none"
                />
              </div>

              {/* Feedback Alert */}
              {status.success && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status.error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  {status.error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 rounded-xl bg-[#ff2a2a] text-white font-bold uppercase tracking-wider hover:bg-red-700 active:scale-[0.99] transition-all shadow-lg shadow-red-600/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
