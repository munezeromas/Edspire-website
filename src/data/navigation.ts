import { NavItem } from '../types'

export const navItems: NavItem[] = [
  {
    label: 'Product',
    href: '/product',
    children: [
      {
        label: 'AI Tutor',
        href: '/product#ai-tutor',
        description: 'Socratic, step-by-step companion that guides students to understanding.',
        icon: 'Sparkles'
      },
      {
        label: 'Personalized Learning Paths',
        href: '/product#personalized-learning',
        description: 'Dynamic progression tailored to each student’s current mastery level.',
        icon: 'Compass'
      },
      {
        label: 'Digital Library & Quizzes',
        href: '/product#digital-library',
        description: 'Curated curriculum-aligned content and adaptive evaluations.',
        icon: 'BookOpen'
      },
      {
        label: 'Accessibility Suite',
        href: '/accessibility',
        description: 'TTS, dyslexia-friendly typography, high contrast, and voice-assisted learning.',
        icon: 'Eye'
      }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'For Students',
        href: '/students',
        description: 'Personalized learning, gamified motivation, and 24/7 AI tutoring.',
        icon: 'GraduationCap'
      },
      {
        label: 'For Teachers',
        href: '/teachers',
        description: 'Real-time classroom insights, automated mastery tracking, and smart lesson aids.',
        icon: 'Users'
      },
      {
        label: 'For Schools',
        href: '/schools',
        description: 'Unified ecosystem deployment, cohort analytics, and curriculum alignment.',
        icon: 'Building2'
      },
      {
        label: 'For Parents',
        href: '/solutions#parents',
        description: 'Transparent visibility into progress without invasive surveillance.',
        icon: 'HeartHandshake'
      }
    ]
  },
  {
    label: 'For Students',
    href: '/students'
  },
  {
    label: 'For Teachers',
    href: '/teachers'
  },
  {
    label: 'For Schools',
    href: '/schools'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Resources',
    href: '/resources'
  }
]
