export interface FeatureItem {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  badge?: string
  highlights: string[]
  previewType?: string
}

export const corePlatformFeatures: FeatureItem[] = [
  {
    id: 'ai-tutor',
    title: 'Adaptive AI Learning Companion',
    subtitle: 'Socratic dialogue that fosters genuine comprehension',
    description: 'Unlike generic search engines or raw LLM chatbots that simply produce answers, Edspire’s AI Tutor scaffolds explanations step-by-step. It detects misconceptions, adjusts analogy complexity, and prompts the learner to derive the solution themselves.',
    icon: 'Sparkles',
    badge: 'Core Intelligence',
    highlights: [
      'Multi-level explanation: "Explain simpler", "Give an analogy", "Show real-world application"',
      'Automated diagnostic quizzes generated instantly from current dialogue',
      'Step-by-step math solver that preserves working steps',
      'Audio synthesis for auditory learners and screen reader support'
    ]
  },
  {
    id: 'personalized-learning',
    title: 'Dynamic Personalized Learning Paths',
    subtitle: 'No two learners follow the same trajectory',
    description: 'Every student comes with different background knowledge and learning tempos. Edspire maps subject concepts into continuous prerequisite trees, tailoring lesson depth and practice volume dynamically.',
    icon: 'Compass',
    badge: 'Adaptive Engine',
    highlights: [
      'Diagnostic baseline assessments mapping prerequisite skills',
      'Real-time branching based on quiz performance and response velocity',
      'Adaptive spaced-repetition schedules for long-term retention',
      'Automatic remediation modules when foundation gaps are detected'
    ]
  },
  {
    id: 'digital-library',
    title: 'Curriculum-Aligned Digital Library',
    subtitle: 'Interactive textbooks, simulations, and problem banks',
    description: 'A rich repository of digital textbooks, STEM simulations, chapter summaries, and practice exams designed to match local and international curriculum standards.',
    icon: 'BookOpen',
    badge: 'Rich Content',
    highlights: [
      'Interactive STEM simulations embedded directly in chapters',
      'Instant AI glossary and contextual vocabulary explanations',
      'Offline caching for uninterrupted study in low-bandwidth regions',
      'Multi-format support: text, audio narratives, and visual cheat-sheets'
    ]
  },
  {
    id: 'ai-quizzes',
    title: 'Intelligent Adaptive Assessments',
    subtitle: 'Targeted quizzes that evaluate deep understanding',
    description: 'Generate customized formative assessments on any chapter or topic within seconds. Questions adapt difficulty in real-time to locate the exact boundary of a learner’s mastery.',
    icon: 'CheckCircle2',
    badge: 'Formative Assessment',
    highlights: [
      'Instant mistake analysis explaining why specific distractors were chosen',
      'Concept mastery scoring per sub-topic',
      'Anti-guess mechanisms with confidence ratings',
      'Seamless synchronization with teacher gradebooks'
    ]
  },
  {
    id: 'teacher-intelligence',
    title: 'Teacher Intelligence & Classroom Analytics',
    subtitle: 'Empowering educators with actionable student insights',
    description: 'Teachers can see beyond aggregate letter grades. Edspire analyzes live assignment patterns to flag struggling clusters, highlight high-performing students ready for extension work, and generate targeted group activities.',
    icon: 'BarChart3',
    badge: 'Educator Suite',
    highlights: [
      'Live student struggle alerts categorized by sub-topic',
      'Automated rubric-guided assignment evaluations',
      'One-click differentiated homework assignment',
      'Comprehensive exportable mastery reports for parent conferences'
    ]
  },
  {
    id: 'accessibility-suite',
    title: 'Universal Accessibility Suite',
    subtitle: 'Education built without physical or cognitive barriers',
    description: 'Accessibility is not an afterthought in Edspire — it is foundational. We provide native multi-modal learning tools so neurodivergent learners, low-vision students, and auditory learners thrive equally.',
    icon: 'Eye',
    badge: 'Universal Access',
    highlights: [
      'One-tap text-to-speech with natural pacing and accent options',
      'OpenDyslexic typography mode and customizable line spacing',
      'High-contrast and reduced-motion display presets',
      'Voice input navigation and speech-to-text queries'
    ]
  },
  {
    id: 'gamification-motivation',
    title: 'Mastery Gamification & Streaks',
    subtitle: 'Intrinsic motivation backed by learning psychology',
    description: 'Transform daily study into an engaging adventure with meaningful milestones, skill trees, XP badges, and learning streaks that celebrate daily consistency rather than mere speed.',
    icon: 'Trophy',
    badge: 'Engagement',
    highlights: [
      'Subject mastery leagues with friendly peer encouragement',
      'Custom milestone badges for perseverance and conceptual breakthroughs',
      'Daily challenge quests that take 10 minutes to complete',
      'Zero toxic penalties — positive reinforcement driven design'
    ]
  },
  {
    id: 'classroom-code',
    title: 'Frictionless Class Code System',
    subtitle: 'Instant onboarding with zero IT complexity',
    description: 'Teachers create structured virtual classrooms in seconds and generate short, memorable VIVE class codes (e.g. VIVE-7K42) that students can enter from any device to enroll immediately.',
    icon: 'KeyRound',
    badge: 'Instant Setup',
    highlights: [
      'Instant join via 8-character unique class code or QR scan',
      'Role-based privacy with student anonymity safeguards',
      'Multi-class management for secondary school subject teachers',
      'Easy co-teaching delegation for department heads'
    ]
  },
  {
    id: 'parent-insights',
    title: 'Constructive Parent Insights',
    subtitle: 'Empowering families to support learning without pressure',
    description: 'Parents receive clean weekly summaries highlighting what topics their child explored, where they excelled, and actionable conversation prompts to encourage them at home.',
    icon: 'HeartHandshake',
    badge: 'Family Bridge',
    highlights: [
      'Weekly progress digest delivered via SMS / WhatsApp / Web',
      'Suggested dinner table conversation questions on current school topics',
      'Celebration alerts for completed learning streaks and mastered subjects',
      'Privacy-first design without micro-surveillance'
    ]
  }
]

export const accessibilityFeatures = [
  {
    id: 'listen',
    title: 'Listen',
    subtitle: 'Text-to-Speech & Audio Learning',
    description: 'High-fidelity audio narration for any lesson, textbook page, or quiz question with selectable playback speeds.',
    icon: 'Headphones'
  },
  {
    id: 'read',
    title: 'Read Comfortably',
    subtitle: 'Adjustable Typography & Spacing',
    description: 'Custom font sizing, word spacing, color temperature filters, and bionic reading highlights.',
    icon: 'BookOpen'
  },
  {
    id: 'understand',
    title: 'Understand',
    subtitle: 'Multi-Level Simplified Explanations',
    description: 'Instant "Explain simpler" mode breaking dense textbook paragraphs into clear, intuitive step-by-step bullet points.',
    icon: 'Lightbulb'
  },
  {
    id: 'speak',
    title: 'Speak',
    subtitle: 'Voice-Based Query & Navigation',
    description: 'Ask questions using natural voice input for learners who struggle with standard keyboards.',
    icon: 'Mic'
  },
  {
    id: 'adapt',
    title: 'Adapt',
    subtitle: 'Dyslexia-Friendly Options',
    description: 'One-click switch to OpenDyslexic typeface, high-contrast ruler guides, and tinted screen overlays.',
    icon: 'Glasses'
  },
  {
    id: 'access',
    title: 'Access',
    subtitle: 'Full Keyboard & Screen Reader Ready',
    description: 'Strict WCAG 2.1 AA compliance with logical tab navigation, ARIA landmarks, and high-contrast color schemes.',
    icon: 'Layers'
  }
]
