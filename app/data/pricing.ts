export interface PricingTier {
  id: string
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    id: '1',
    name: 'Explorer',
    price: 0,
    currency: 'USD',
    period: 'month',
    description: 'Get started with foundational network access.',
    features: [
      'Access to member directory',
      'Monthly insights and updates',
      'Community forum access',
      'Basic profile creation',
    ],
    cta: 'Get Started',
  },
  {
    id: '2',
    name: 'Professional',
    price: 99,
    currency: 'USD',
    period: 'month',
    description: 'Unlock deeper connections and exclusive content.',
    features: [
      'Everything in Explorer',
      'Direct member messaging',
      'Priority event access',
      'Exclusive webinars',
      'Advanced profile analytics',
      'Networking prioritization',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 499,
    currency: 'USD',
    period: 'month',
    description: 'Full access with dedicated support and custom solutions.',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom API access',
      'Team collaboration tools',
      'White-label options',
      'Priority support (24/7)',
      'Strategic consulting hours',
    ],
    cta: 'Contact Sales',
  },
  {
    id: '4',
    name: 'Organization',
    price: 999,
    currency: 'USD',
    period: 'month',
    description: 'Complete suite for large organizations.',
    features: [
      'Everything in Enterprise',
      'Multi-team management',
      'Advanced analytics dashboard',
      'Custom integrations',
      'Unlimited user seats',
      'Executive strategy sessions',
      'Custom onboarding',
      'Unlimited events access',
    ],
    cta: 'Contact Sales',
  },
]
