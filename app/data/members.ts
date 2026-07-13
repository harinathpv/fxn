export interface Member {
  id: string
  name: string
  title: string
  company: string
  image: string
  tags: string[]
  bio?: string
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Chief Strategy Officer',
    company: 'TechVentures Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['Strategy', 'Technology', 'Leadership'],
    bio: 'Visionary leader with 15+ years in strategic tech initiatives',
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    title: 'Head of Product',
    company: 'Innovation Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['Product', 'Design', 'Innovation'],
    bio: 'Product visionary driving digital transformation',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    title: 'Director of Operations',
    company: 'Global Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Operations', 'Management', 'Excellence'],
    bio: 'Operational excellence expert with proven scaling track record',
  },
  {
    id: '4',
    name: 'James Wilson',
    title: 'VP Engineering',
    company: 'NextGen Tech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Engineering', 'Technology', 'Architecture'],
    bio: 'Engineering leader building scalable systems',
  },
  {
    id: '5',
    name: 'Priya Patel',
    title: 'Head of Business Development',
    company: 'ConnectIO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['Business', 'Growth', 'Partnerships'],
    bio: 'Growth strategist focused on sustainable partnerships',
  },
  {
    id: '6',
    name: 'David Kim',
    title: 'Chief Financial Officer',
    company: 'FinanceFirst',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Finance', 'Strategy', 'Analytics'],
    bio: 'Financial strategist with Fortune 500 experience',
  },
  {
    id: '7',
    name: 'Sophie Martin',
    title: 'Chief Marketing Officer',
    company: 'BrandWorks',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Marketing', 'Brand', 'Communications'],
    bio: 'Brand strategist building iconic companies',
  },
  {
    id: '8',
    name: 'Ahmed Hassan',
    title: 'Head of AI Research',
    company: 'AI Future',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['AI', 'Research', 'Innovation'],
    bio: 'AI researcher pushing boundaries of technology',
  },
  {
    id: '9',
    name: 'Lisa Thompson',
    title: 'VP Sales',
    company: 'SalesMax',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['Sales', 'Business', 'Growth'],
    bio: 'Sales leader with record-breaking performance',
  },
  {
    id: '10',
    name: 'Robert Chen',
    title: 'Chief Operating Officer',
    company: 'OptiFlow',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Operations', 'Management', 'Process'],
    bio: 'Operations strategist optimizing global teams',
  },
  {
    id: '11',
    name: 'Natasha Volkov',
    title: 'Head of Design',
    company: 'DesignStudio',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Design', 'UX', 'Leadership'],
    bio: 'Design leader shaping digital experiences',
  },
  {
    id: '12',
    name: 'Carlos Sanchez',
    title: 'VP Product Innovation',
    company: 'InnovateCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['Innovation', 'Product', 'Strategy'],
    bio: 'Innovation leader transforming industries',
  },
  {
    id: '13',
    name: 'Jennifer Liu',
    title: 'Chief People Officer',
    company: 'TalentHub',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['HR', 'Culture', 'Leadership'],
    bio: 'People leader building exceptional teams',
  },
  {
    id: '14',
    name: 'Michael O\'Brien',
    title: 'Executive Director',
    company: 'Growth Ventures',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Venture', 'Growth', 'Strategy'],
    bio: 'Venture leader identifying next big opportunities',
  },
  {
    id: '15',
    name: 'Zara Khan',
    title: 'Head of Sustainability',
    company: 'EcoFuture',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Sustainability', 'Impact', 'ESG'],
    bio: 'Sustainability leader driving positive change',
  },
  {
    id: '16',
    name: 'Thomas Anderson',
    title: 'VP Technology',
    company: 'TechCore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['Technology', 'Infrastructure', 'Innovation'],
    bio: 'Technology architect building future systems',
  },
  {
    id: '17',
    name: 'Isabella Martinez',
    title: 'Chief Experience Officer',
    company: 'CustomerFirst',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['Customer Experience', 'Service', 'Design'],
    bio: 'CX strategist transforming customer relationships',
  },
  {
    id: '18',
    name: 'Dmitri Petrov',
    title: 'VP Business Strategy',
    company: 'StrategyWorks',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Strategy', 'Business', 'Leadership'],
    bio: 'Strategic advisor to Fortune 500 executives',
  },
  {
    id: '19',
    name: 'Keisha Williams',
    title: 'Head of Analytics',
    company: 'DataInsights',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Analytics', 'Data', 'Insights'],
    bio: 'Data leader uncovering business intelligence',
  },
  {
    id: '20',
    name: 'Vikram Singh',
    title: 'Chief Innovation Officer',
    company: 'FutureBuilt',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['Innovation', 'Strategy', 'Technology'],
    bio: 'Innovation strategist pioneering new frontiers',
  },
  {
    id: '21',
    name: 'Amber Johnson',
    title: 'VP Marketing',
    company: 'BrandTech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['Marketing', 'Digital', 'Brand'],
    bio: 'Marketing leader building global brands',
  },
  {
    id: '22',
    name: 'Felix Zhang',
    title: 'Director of Engineering',
    company: 'CodeFuture',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Engineering', 'Leadership', 'Tech'],
    bio: 'Engineering leader scaling high-performance teams',
  },
  {
    id: '23',
    name: 'Olivia Grace',
    title: 'Head of Community',
    company: 'CommunityHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Community', 'Engagement', 'Growth'],
    bio: 'Community leader building engaged networks',
  },
  {
    id: '24',
    name: 'Nathan Cross',
    title: 'VP Partnerships',
    company: 'PartnerSync',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['Partnerships', 'Business', 'Strategy'],
    bio: 'Partnership strategist creating win-win alliances',
  },
  {
    id: '25',
    name: 'Grace Lee',
    title: 'Chief Strategy Officer',
    company: 'StrategyVentures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['Strategy', 'Leadership', 'Growth'],
    bio: 'Strategic visionary shaping market direction',
  },
  {
    id: '26',
    name: 'Hassan Ibrahim',
    title: 'VP Product Management',
    company: 'ProductCo',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Product', 'Management', 'Innovation'],
    bio: 'Product leader delivering market-winning solutions',
  },
  {
    id: '27',
    name: 'Yuki Tanaka',
    title: 'Head of Global Operations',
    company: 'GlobalOps',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Operations', 'Global', 'Management'],
    bio: 'Operations leader managing worldwide teams',
  },
  {
    id: '28',
    name: 'Luis Gonzalez',
    title: 'Chief Commercial Officer',
    company: 'CommerceFirst',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['Commercial', 'Sales', 'Revenue'],
    bio: 'Commercial leader driving revenue growth',
  },
  {
    id: '29',
    name: 'Rachel Cohen',
    title: 'VP Human Resources',
    company: 'TalentFirst',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tags: ['HR', 'Culture', 'Talent'],
    bio: 'HR leader transforming workplace culture',
  },
  {
    id: '30',
    name: 'Adrian Powell',
    title: 'Executive VP Strategy',
    company: 'StrategyFirst',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tags: ['Strategy', 'Executive', 'Leadership'],
    bio: 'Strategic executive guiding organizational vision',
  },
  {
    id: '31',
    name: 'Sophia Romano',
    title: 'VP Innovation',
    company: 'InnovateLab',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tags: ['Innovation', 'R&D', 'Leadership'],
    bio: 'Innovation leader developing breakthrough solutions',
  },
  {
    id: '32',
    name: 'Jordan Blake',
    title: 'Chief Digital Officer',
    company: 'DigitalFuture',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tags: ['Digital', 'Transformation', 'Leadership'],
    bio: 'Digital transformation leader modernizing enterprises',
  },
]

// Get all unique tags
export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  members.forEach(member => {
    member.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}

// Filter members by tags (supports both AND and OR logic)
export function filterMembers(selectedTags: string[], filterMode: 'AND' | 'OR' = 'AND'): Member[] {
  if (selectedTags.length === 0) return members

  if (filterMode === 'OR') {
    return members.filter(member =>
      member.tags.some(tag => selectedTags.includes(tag))
    )
  }

  // AND mode
  return members.filter(member =>
    selectedTags.every(tag => member.tags.includes(tag))
  )
}
