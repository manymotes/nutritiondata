import { SITE_NAME } from '@/lib/constants'

export const metadata = {
  title: `Diet Personality Quiz - Find Your Nutrition Style | ${SITE_NAME}`,
  description: 'Discover your unique diet personality and get personalized nutrition recommendations. Take our free 2-minute quiz to find the best approach for your goals.',
  keywords: ['diet quiz', 'nutrition personality', 'eating style', 'diet type', 'weight loss quiz', 'healthy eating'],
}

export default function DietPersonalityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
