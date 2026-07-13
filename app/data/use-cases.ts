export interface UseCase {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
}

export const useCases: UseCase[] = [
  {
    id: '1',
    title: 'Strategic Advisory',
    description: 'Get guidance from experienced leaders on critical business decisions.',
    icon: '📊',
    benefits: ['Expert insights', 'Proven frameworks', 'Risk mitigation'],
  },
  {
    id: '2',
    title: 'Executive Networking',
    description: 'Build relationships with peers facing similar challenges and opportunities.',
    icon: '🤝',
    benefits: ['Valuable connections', 'Shared learning', 'Collaborative growth'],
  },
  {
    id: '3',
    title: 'Talent Acquisition',
    description: 'Access a curated network of top leadership talent.',
    icon: '👥',
    benefits: ['Quality candidates', 'Industry expertise', 'Cultural fit'],
  },
  {
    id: '4',
    title: 'Partnership Development',
    description: 'Identify and establish strategic partnerships for mutual growth.',
    icon: '🔗',
    benefits: ['Expansion opportunities', 'Shared resources', 'Market access'],
  },
  {
    id: '5',
    title: 'Knowledge Sharing',
    description: 'Learn from industry leaders and cutting-edge practices.',
    icon: '💡',
    benefits: ['Best practices', 'Innovation insights', 'Trend forecasting'],
  },
  {
    id: '6',
    title: 'Leadership Development',
    description: 'Accelerate your leadership journey with personalized coaching.',
    icon: '📈',
    benefits: ['Skill development', 'Mentorship', 'Career acceleration'],
  },
]
