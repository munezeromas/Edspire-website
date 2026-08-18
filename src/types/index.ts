export interface NavItem {
  label: string
  href: string
  children?: {
    label: string
    href: string
    description?: string
    icon?: string
  }[]
}

export interface StudentProfile {
  name: string
  avatar: string
  streakDays: number
  xp: number
  level: number
  badgesCount: number
  subjects: {
    name: string
    progress: number
    color: string
    code: string
  }[]
  tasks: {
    id: string
    title: string
    subject: string
    due: string
    completed: boolean
    xpReward: number
  }[]
}

export interface TeacherInsight {
  id: string
  type: 'urgent' | 'warning' | 'positive'
  title: string
  description: string
  studentCount: number
  topic: string
  action: string
}

export interface ClassData {
  id: string
  name: string
  grade: string
  code: string
  studentsCount: number
  avgMastery: number
  completionRate: number
  needingSupport: number
}

export interface ResourceArticle {
  id: string
  title: string
  category: 'AI in Education' | 'Teacher Resources' | 'Student Success' | 'Accessibility' | 'Learning Guides'
  readTime: string
  date: string
  summary: string
  author: string
  authorRole: string
  slug: string
  featured?: boolean
}
