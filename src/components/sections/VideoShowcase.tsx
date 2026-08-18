import React from 'react'
import { Youtube, ExternalLink } from 'lucide-react'
import Badge from '../ui/Badge'

export const VideoShowcase: React.FC = () => {
  return (
    <section className="section-padding bg-navy-900 border-b border-white/10" id="media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <Badge variant="blue" size="md" className="mb-3">
            Media & Presentation
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Watch Edspire in Action
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Click play below to watch our live platform presentation and demonstration.
          </p>
        </div>

        {/* Embedded YouTube Player directly playable */}
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/15 bg-navy-950">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src="https://www.youtube.com/embed/PctaPk1tdbk?start=242&enablejsapi=1"
              title="Edspire Feature Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          <div className="p-4 sm:p-5 bg-navy-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                <Youtube className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Edspire Feature Presentation</h4>
                <p className="text-xs text-white/60">Live presentation of AI tutoring and accessible educational technology</p>
              </div>
            </div>

            <a
              href="https://www.youtube.com/watch?v=PctaPk1tdbk&t=242s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Open on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
