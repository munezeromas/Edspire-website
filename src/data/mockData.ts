import { StudentProfile, ClassData, TeacherInsight, ResourceArticle } from '../types'

export const studentMockData: StudentProfile = {
  name: 'Aline',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  streakDays: 7,
  xp: 1240,
  level: 8,
  badgesCount: 4,
  subjects: [
    { name: 'Mathematics', progress: 82, color: '#3b8fe8', code: 'MATH-10' },
    { name: 'Physics', progress: 74, color: '#64b5f6', code: 'PHYS-09' },
    { name: 'Computer Science', progress: 91, color: '#10b981', code: 'CS-101' },
    { name: 'English', progress: 68, color: '#f59e0b', code: 'ENG-08' }
  ],
  tasks: [
    {
      id: 'task-1',
      title: 'Quadratic Functions & Parabola graphing',
      subject: 'Mathematics',
      due: 'Today, 5:00 PM',
      completed: false,
      xpReward: 50
    },
    {
      id: 'task-2',
      title: 'Newtonian Mechanics Lab simulation',
      subject: 'Physics',
      due: 'Tomorrow, 2:00 PM',
      completed: false,
      xpReward: 60
    },
    {
      id: 'task-3',
      title: 'Algorithm Flowcharts Review',
      subject: 'Computer Science',
      due: 'Yesterday',
      completed: true,
      xpReward: 40
    }
  ]
}

export const teacherMockClass: ClassData = {
  id: 'class-9a',
  name: 'Class 9A — STEM Core',
  grade: 'Grade 9',
  code: 'VIVE-7K42',
  studentsCount: 42,
  avgMastery: 78,
  completionRate: 91,
  needingSupport: 6
}

export const teacherInsightsMock: TeacherInsight[] = [
  {
    id: 'insight-1',
    type: 'urgent',
    title: 'Algebraic Factorization Stumbling Block',
    description: '6 students are struggling with factoring trinomials and quadratic expressions.',
    studentCount: 6,
    topic: 'Mathematics · Algebra II',
    action: 'Generate Remedial Activity'
  },
  {
    id: 'insight-2',
    type: 'warning',
    title: 'Pending Energy Conservation Lab Submission',
    description: '3 students have not completed the latest virtual experiment assignment.',
    studentCount: 3,
    topic: 'Physics · Thermodynamics',
    action: 'Send Automated Gentle Reminder'
  },
  {
    id: 'insight-3',
    type: 'positive',
    title: 'Mastery Achieved in Cellular Respiration',
    description: '8 students scored 95%+ and completed supplementary advanced enrichment.',
    studentCount: 8,
    topic: 'Biology · Cell Structure',
    action: 'Assign Extension Problem Set'
  }
]

export const parentMockData = {
  childName: 'Sarah',
  grade: 'Grade 8',
  streakDays: 8,
  subjects: [
    { name: 'Mathematics', score: 81, status: 'On Track', trend: '+4% this month' },
    { name: 'Science', score: 74, status: 'Needs Practice', trend: '+2% this month' },
    { name: 'Language Arts', score: 89, status: 'Excelling', trend: '+6% this month' }
  ],
  completedActivities: 12,
  recommendedFocus: 'Fractions & Proportions',
  lastActive: '32 minutes ago',
  teacherNote: 'Sarah showed great curiosity in today’s physics module on simple machines.'
}

export const resourcesData: ResourceArticle[] = [
  {
    id: 'res-1',
    title: 'How Socratic AI Tutoring Prevents Rote Memorization',
    category: 'AI in Education',
    readTime: '5 min read',
    date: 'August 12, 2026',
    summary: 'Why guiding students with intuitive analogies and step-by-step questioning leads to deeper conceptual understanding than direct answer generation.',
    author: 'Edspire Pedagogy Team',
    authorRole: 'Learning Science Research',
    slug: 'socratic-ai-tutoring-learning-science',
    featured: true
  },
  {
    id: 'res-2',
    title: 'Transforming Mixed-Ability Classrooms with Real-time Diagnostics',
    category: 'Teacher Resources',
    readTime: '6 min read',
    date: 'August 08, 2026',
    summary: 'How teachers use live classroom insight matrices to identify learning gaps early without spending hours grading repetitive paper worksheets.',
    author: 'Jean-Paul Habimana',
    authorRole: 'Master Educator & Curriculum Specialist',
    slug: 'mixed-ability-classrooms-real-time-diagnostics'
  },
  {
    id: 'res-3',
    title: 'Accessible Learning: Designing for Low-Bandwidth & Assistive Tech',
    category: 'Accessibility',
    readTime: '4 min read',
    date: 'July 28, 2026',
    summary: 'A look into how Edspire builds audio-first synthesis, dyslexia-adapted typography, and offline capability for diverse learning environments.',
    author: 'Munezero Aline',
    authorRole: 'Co-Founder & Product Lead',
    slug: 'accessible-learning-low-bandwidth-assistive-tech'
  },
  {
    id: 'res-4',
    title: 'The Psychology of Micro-Habits in Student Study Streaks',
    category: 'Student Success',
    readTime: '5 min read',
    date: 'July 20, 2026',
    summary: 'Explaining how lightweight daily challenges and meaningful mastery badges create long-term intrinsic academic motivation.',
    author: 'Edspire Product Lab',
    authorRole: 'Behavioral UX Research',
    slug: 'psychology-micro-habits-student-study-streaks'
  },
  {
    id: 'res-5',
    title: 'A Principal’s Blueprint for Modernizing STEM Curriculum in Schools',
    category: 'Learning Guides',
    readTime: '7 min read',
    date: 'July 14, 2026',
    summary: 'Step-by-step framework for school administrators to implement AI-assisted STEM labs with zero infrastructural overhead.',
    author: 'Edspire Institutional Advisory',
    authorRole: 'School Partnerships',
    slug: 'principals-blueprint-modernizing-stem-curriculum'
  }
]
