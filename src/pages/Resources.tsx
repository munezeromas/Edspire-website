import React, { useState } from 'react'
import {
  BookOpen,
  Sparkles,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  X,
  Share2,
  Bookmark
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { resourcesData } from '../data/mockData'
import { ResourceArticle } from '../types'

const CATEGORIES = [
  'All',
  'AI in Education',
  'Teacher Resources',
  'Student Success',
  'Accessibility',
  'Learning Guides'
] as const

export const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null)

  const filteredArticles = resourcesData.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <Badge variant="blue" size="md" className="mb-4">
          Knowledge Base & Thought Leadership
        </Badge>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Pedagogical Insights & <span className="text-gradient">EdTech Research</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Guides, whitepapers, and best practices on AI tutoring, formative classroom diagnostics, and universal accessibility.
        </p>

        {/* Search & Category Filter */}
        <div className="max-w-2xl mx-auto mt-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, pedagogical guides, topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-900 border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-navy-900 border border-white/10 text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 text-white/50 text-sm">
            No articles found matching your query. Try searching for "AI", "diagnostics", or "accessibility".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="p-6 rounded-2xl bg-navy-900 border border-white/10 hover:border-blue-500/40 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="blue" size="sm">{art.category}</Badge>
                    <span className="text-[11px] text-white/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 mt-2.5 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/60">
                  <div>
                    <span className="font-semibold text-white block">{art.author}</span>
                    <span className="text-[10px] text-white/40">{art.authorRole}</span>
                  </div>
                  <span className="text-blue-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-white/15 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl custom-scroll">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="blue" size="sm">{activeArticle.category}</Badge>
                <span className="text-xs text-white/40">{activeArticle.date}</span>
                <span className="text-xs text-white/40">• {activeArticle.readTime}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-3 py-3 border-y border-white/10 text-xs text-white/60">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
                  {activeArticle.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{activeArticle.author}</div>
                  <div>{activeArticle.authorRole}</div>
                </div>
              </div>

              <div className="text-sm text-white/80 leading-relaxed space-y-4 pt-2">
                <p className="text-base text-blue-200 font-medium leading-relaxed">
                  {activeArticle.summary}
                </p>
                <p>
                  Educational research demonstrates that when artificial intelligence is deployed as an answer dispenser, student problem-solving resilience decreases. In contrast, Socratic intervention mirrors the master tutor method — identifying cognitive bottlenecks and generating step-level analogies.
                </p>
                <p>
                  By synthesizing formative diagnostic data continuously, teachers regain hours previously lost to manual grading and can dedicate precious in-person classroom time to rich group discussions and laboratory exploration.
                </p>
                <p>
                  At Edspire, we believe technology should always adapt to the learner. As we deploy our pilot programs in schools across Rwanda, we continue to measure how multi-modal accessibility elevates comprehension for all students.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40">Published by Edspire Research Lab</span>
                <Button size="sm" variant="primary" onClick={() => setActiveArticle(null)}>
                  Close Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Resources
