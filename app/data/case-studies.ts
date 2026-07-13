export interface CaseStudy {
  id: string
  title: string
  company: string
  challenge: string
  solution: string
  results: string[]
  image: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Digital Transformation Success',
    company: 'TechCorp Global',
    challenge: 'Legacy systems hindering growth and innovation capabilities.',
    solution: 'Implemented modern technology stack with FxN leadership guidance.',
    results: [
      '40% increase in operational efficiency',
      '50% faster time to market',
      '200% ROI within 18 months',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Market Expansion',
    company: 'Innovation Labs',
    challenge: 'Entering new geographic markets without local expertise.',
    solution: 'Leveraged FxN network for market insights and strategic partnerships.',
    results: [
      'Successfully entered 5 new markets',
      '30% revenue growth YoY',
      'Established 12 strategic partnerships',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Organizational Restructuring',
    company: 'Global Ventures',
    challenge: 'Inefficient organizational structure limiting agility.',
    solution: 'Redesigned organization with FxN leadership expertise.',
    results: [
      'Decision-making speed improved by 60%',
      'Employee engagement up 45%',
      '25% cost reduction',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
]
