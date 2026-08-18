import React, { useState, useEffect, useRef } from 'react'
import {
  Send,
  Volume2,
  VolumeX,
  RotateCcw,
  BookOpen,
  HelpCircle,
  ImageIcon,
  ArrowRight,
  Bot,
  User,
  CheckCircle,
  Lightbulb,
  Sparkles
} from 'lucide-react'
import Badge from '../ui/Badge'

interface Message {
  id: string
  sender: 'student' | 'ai'
  text: string
  timestamp: string
  diagram?: boolean
  quiz?: {
    question: string
    options: string[]
    correct: number
    explanation: string
  }
}

const PRESET_CONVERSATIONS: Record<string, { query: string; response: string; followUps: string[] }> = {
  photosynthesis: {
    query: 'Explain photosynthesis step by step.',
    response: 'Think of a green leaf as an efficient biochemical system:\n\n1. Sunlight provides the activation energy.\n2. Water from the roots and Carbon Dioxide from the atmosphere provide the chemical inputs.\n3. Inside the chloroplasts, chlorophyll molecules convert these inputs into Glucose (chemical energy) and release Oxygen gas.\n\nWould you like to examine the molecular reaction, see a schematic diagram, or test your understanding with a quiz?',
    followUps: ['Give me an example', 'Quiz me', 'Show me a diagram', 'Explain simpler']
  },
  quadratic: {
    query: 'I need help understanding quadratic equations.',
    response: 'Let us break it down systematically. A quadratic equation is any polynomial equation where the highest variable exponent is squared, structured as ax² + bx + c = 0.\n\nGeometrically, graphing this equation produces a parabola. Finding the roots or solutions corresponds to locating the exact x-intercepts where the curve crosses the horizontal axis.\n\nWhich area would you like to review: factoring, applying the quadratic formula, or graphing the vertex?',
    followUps: ['Explain simpler', 'Give me an example', 'Quiz me', 'Show the formula']
  },
  gravity: {
    query: 'Why do planets orbit the sun instead of falling directly into it?',
    response: 'Orbital motion represents a continuous state of balance between gravitational pull and tangential velocity.\n\nThe sun exerts a constant inward gravitational force, while the planet possesses forward momentum through space. This continuous deflection curves the path into an ellipse, creating a stable orbit without collision.\n\nWould you like a diagnostic quiz or a vector velocity breakdown?',
    followUps: ['Quiz me', 'Give me an example', 'Explain simpler', 'Show orbital velocity']
  }
}

export const AITutorDemo: React.FC<{ initialPreset?: string; compact?: boolean }> = ({
  initialPreset = 'photosynthesis',
  compact = false
}) => {
  const [activePreset, setActivePreset] = useState<string>(initialPreset)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [inputText, setInputText] = useState('')
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [quizSelected, setQuizSelected] = useState<number | null>(null)
  const [showDiagram, setShowDiagram] = useState(false)
  const chatBottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadPreset(activePreset)
  }, [activePreset])

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const loadPreset = (key: string) => {
    const data = PRESET_CONVERSATIONS[key] || PRESET_CONVERSATIONS.photosynthesis
    setMessages([
      {
        id: 'msg-1',
        sender: 'student',
        text: data.query,
        timestamp: '10:42 AM'
      }
    ])
    setIsTyping(true)
    setShowDiagram(false)
    setQuizSelected(null)

    setTimeout(() => {
      setMessages([
        {
          id: 'msg-1',
          sender: 'student',
          text: data.query,
          timestamp: '10:42 AM'
        },
        {
          id: 'msg-2',
          sender: 'ai',
          text: data.response,
          timestamp: '10:42 AM'
        }
      ])
      setIsTyping(false)
    }, 700)
  }

  const handleAction = (action: string) => {
    if (isTyping) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'student',
      text: action,
      timestamp: 'Just now'
    }

    setMessages(prev => [...prev, userMsg])
    setIsTyping(true)

    setTimeout(() => {
      let aiResponseText = ''
      let hasDiagram = false
      let quizData = undefined

      if (action === 'Explain simpler') {
        aiResponseText = 'In core terms: Plants absorb sunlight, carbon dioxide, and water to synthesize glucose for energy, releasing breathable oxygen in the process.'
      } else if (action === 'Give me an example') {
        aiResponseText = 'Consider an agricultural apple tree: throughout the season, solar radiation and soil water are transformed into carbohydrate sugars stored within the fruit.'
      } else if (action === 'Show me a diagram' || action === 'Show the formula') {
        hasDiagram = true
        aiResponseText = 'Here is the step-by-step schematic breakdown of the chemical transformation:'
        setShowDiagram(true)
      } else if (action === 'Quiz me') {
        aiResponseText = 'Here is a targeted concept check on this module:'
        quizData = {
          question: 'What gas is released into the atmosphere as a byproduct of the light-dependent reactions in photosynthesis?',
          options: ['Carbon Dioxide (CO₂)', 'Oxygen Gas (O₂)', 'Nitrogen Gas (N₂)', 'Methane (CH₄)'],
          correct: 1,
          explanation: 'Correct. Water molecules are photolyzed inside the thylakoid membrane, releasing Oxygen (O₂).'
        }
      } else {
        aiResponseText = `Relevant query regarding "${action}". The AI Tutor dynamically evaluates prerequisite mastery to deliver step-level guidance.`
      }

      setMessages(prev => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiResponseText,
          timestamp: 'Just now',
          diagram: hasDiagram,
          quiz: quizData
        }
      ])
      setIsTyping(false)
    }, 800)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim() || isTyping) return
    const text = inputText.trim()
    setInputText('')
    handleAction(text)
  }

  return (
    <div className="bg-navy-900 border border-white/15 rounded-xl overflow-hidden flex flex-col h-[540px] max-w-2xl w-full mx-auto">
      {/* Header bar */}
      <div className="bg-navy-950 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">Edspire AI Tutor</h3>
              <Badge variant="blue" size="sm">Socratic Companion</Badge>
            </div>
            <p className="text-[11px] text-white/50">Adaptive Step-by-Step Learning</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsSpeaking(!isSpeaking)}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
              isSpeaking
                ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                : 'bg-white/5 text-white/60 border-white/10 hover:text-white'
            }`}
            title="Read Aloud Simulation"
          >
            {isSpeaking ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="text-[10px] hidden sm:inline">{isSpeaking ? 'Audio Active' : 'Read Aloud'}</span>
          </button>

          <button
            onClick={() => loadPreset(activePreset)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
            title="Reset Conversation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Preset topic selector pills */}
      <div className="bg-navy-950 px-4 py-2 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-white/40 shrink-0 font-medium">Topic:</span>
        <button
          onClick={() => setActivePreset('photosynthesis')}
          className={`px-2.5 py-1 rounded-md transition-colors shrink-0 ${
            activePreset === 'photosynthesis'
              ? 'bg-blue-600 text-white font-medium'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          Biology: Photosynthesis
        </button>
        <button
          onClick={() => setActivePreset('quadratic')}
          className={`px-2.5 py-1 rounded-md transition-colors shrink-0 ${
            activePreset === 'quadratic'
              ? 'bg-blue-600 text-white font-medium'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          Mathematics: Quadratic Equations
        </button>
        <button
          onClick={() => setActivePreset('gravity')}
          className={`px-2.5 py-1 rounded-md transition-colors shrink-0 ${
            activePreset === 'gravity'
              ? 'bg-blue-600 text-white font-medium'
              : 'bg-white/5 text-white/70 hover:bg-white/10'
          }`}
        >
          Physics: Orbital Mechanics
        </button>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 custom-scroll bg-navy-900">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === 'student' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'ai' && (
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'student'
                  ? 'bg-blue-600 text-white'
                  : 'bg-navy-950 border border-white/10 text-white/90'
              }`}
            >
              <div className="whitespace-pre-line">{msg.text}</div>

              {msg.diagram && (
                <div className="mt-3 p-3 rounded-lg bg-navy-900 border border-blue-500/20 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Chemical Reaction Balance</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded bg-white/5 border border-white/5">
                      <div className="text-white/90 font-bold">Reactants</div>
                      <div className="text-[11px] text-white/70">6CO₂ + 6H₂O + Photons</div>
                    </div>
                    <div className="flex items-center justify-center text-blue-400 font-bold text-xs">
                      Chloroplast
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/5">
                      <div className="text-emerald-400 font-bold">Products</div>
                      <div className="text-[11px] text-white/70">C₆H₁₂O₆ + 6O₂</div>
                    </div>
                  </div>
                </div>
              )}

              {msg.quiz && (
                <div className="mt-3 p-3.5 rounded-lg bg-navy-900 border border-blue-500/30 text-xs space-y-2.5">
                  <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Concept Check</span>
                  </div>
                  <p className="text-white font-medium">{msg.quiz.question}</p>
                  <div className="space-y-1.5">
                    {msg.quiz.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setQuizSelected(i)}
                        className={`w-full text-left p-2 rounded border transition-colors flex items-center justify-between ${
                          quizSelected === null
                            ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80'
                            : i === msg.quiz?.correct
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-semibold'
                            : quizSelected === i
                            ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                            : 'bg-white/5 border-white/5 text-white/40'
                        }`}
                      >
                        <span>{opt}</span>
                        {quizSelected !== null && i === msg.quiz?.correct && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                  {quizSelected !== null && (
                    <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]">
                      {msg.quiz.explanation}
                    </div>
                  )}
                </div>
              )}

              <div className="mt-1 text-[10px] text-white/40 text-right">
                {msg.timestamp}
              </div>
            </div>

            {msg.sender === 'student' && (
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-2.5 justify-start">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-navy-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white/60">
              AI Tutor is analyzing...
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Suggested Follow-up Actions */}
      <div className="bg-navy-950 px-4 py-2 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto">
        <span className="text-[11px] text-white/40 shrink-0 font-medium">Actions:</span>
        {['Explain simpler', 'Give me an example', 'Quiz me', 'Show me a diagram'].map((action) => (
          <button
            key={action}
            onClick={() => handleAction(action)}
            disabled={isTyping}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 transition-colors shrink-0 disabled:opacity-50"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Chat Input form */}
      <form
        onSubmit={handleSendMessage}
        className="bg-navy-950 p-3 border-t border-white/10 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask a follow-up question..."
          className="flex-1 bg-navy-900 border border-white/10 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}

export default AITutorDemo
