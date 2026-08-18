import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, MapPin, Linkedin, Send, CheckCircle2, ExternalLink, Youtube } from 'lucide-react'
import Button from '../components/ui/Button'

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams()
  const productParam = searchParams.get('product') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'School / Educator',
    interest: productParam === 'ability'
      ? 'Ability (Accessibility Suite)'
      : productParam === 'vive-ai'
        ? 'Vive-AI (Classroom Intelligence)'
        : 'General Partnership / Inquiry',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 700)
  }

  return (
    <div className="pt-28 bg-navy-950 min-h-screen">

      {/* Header */}
      <div className="border-b border-white/10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Contact & <span className="text-blue-400">Partnerships</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Connect with our Kigali team to pilot Vive-AI or Ability, collaborate on educational research, or build a partnership.
          </p>
        </div>
      </div>

      {/* Form + Info */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-navy-900 border border-white/15">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80">Full Name *</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean-Luc Nkurunziza"
                      className="w-full px-3.5 py-2.5 rounded-md bg-navy-950 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80">Email *</label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@school.rw"
                      className="w-full px-3.5 py-2.5 rounded-md bg-navy-950 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80">School / Organization</label>
                    <input type="text" value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Kigali Science Academy"
                      className="w-full px-3.5 py-2.5 rounded-md bg-navy-950 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80">I am a...</label>
                    <select value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option>School / Educator</option>
                      <option>Partner / NGO</option>
                      <option>Student / Parent</option>
                      <option>Investor / Technical Partner</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-white/80">Interested in</label>
                  <select value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors">
                    <option>General Partnership / Inquiry</option>
                    <option>Vive-AI (Classroom Intelligence)</option>
                    <option>Ability (Accessibility Suite)</option>
                    <option>Both Products</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-white/80">Message *</label>
                  <textarea rows={4} required value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your school or partnership goal..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-navy-950 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                </div>

                <Button type="submit" size="md" variant="primary" disabled={loading} icon={Send} className="w-full sm:w-auto">
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our Kigali team will reply promptly.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="text-xs text-blue-400 font-semibold hover:underline pt-2 block mx-auto">
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-xl bg-navy-900 border border-white/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                <MapPin className="w-4 h-4" /> Headquarters
              </div>
              <h4 className="text-base font-bold text-white">Edspire Rwanda Ltd</h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">Kigali, Rwanda</p>
            </div>

            <div className="p-6 rounded-xl bg-navy-900 border border-white/15 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contacts</h4>
              <div className="space-y-3 text-xs sm:text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href="mailto:edspiree@gmail.com" className="hover:text-white transition-colors">edspiree@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href="mailto:munezeromas@gmail.com" className="hover:text-white transition-colors">munezeromas@gmail.com (Founder)</a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href="https://www.linkedin.com/company/edspire-hub/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline flex items-center gap-1">
                    linkedin.com/company/edspire-hub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Youtube className="w-4 h-4 text-rose-400 shrink-0" />
                  <a href="https://www.youtube.com/watch?v=PctaPk1tdbk&t=242s" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:underline flex items-center gap-1">
                    Watch Presentation <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
