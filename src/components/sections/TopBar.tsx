import React from 'react'
import { Award, ArrowRight, ExternalLink } from 'lucide-react'

export const TopBar: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white text-xs py-2 px-4 border-b border-blue-500 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-white text-blue-700 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
            Announcement
          </span>
          <span className="font-medium">
            Edspire awarded 1st place at the Global Learning & AI Hackathon for AI & Accessibility
          </span>
        </div>
        <a
          href="https://www.linkedin.com/company/edspire-hub/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold underline text-blue-100 hover:text-white shrink-0 text-[11px]"
        >
          <span>Follow our journey</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

export default TopBar
