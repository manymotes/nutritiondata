import fs from 'fs'
import path from 'path'

export interface WaterSource {
  name: string
  percentage: number
  type: string
  description: string
}

export interface QualityMetric {
  leadCompliance: number
  bacterialCompliance: number
  chemicalCompliance: number
  turbidity: number
  pH: number
  hardness: number
  chlorineLevel: number
}

export interface Contaminant {
  name: string
  level: number
  unit: string
  legalLimit: number
  healthGoal: number
  status: string
  trend: string
}

export interface ContaminationIncident {
  year: number
  incident: string
  description: string
  resolution: string
}

export interface TreatmentFacility {
  name: string
  location: string
  capacity: string
  technology: string
}

export interface StateAverage {
  leadCompliance: number
  bacterialCompliance: number
  chemicalCompliance: number
  overallScore: number
}

export interface TrendData {
  year: number
  overallScore: number
  [key: string]: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface AdditionalInfo {
  waterUtility: string
  annualWaterReport: string
  customerServicePhone: string
  emergencyPhone: string
  conservationPrograms: string[]
}

export interface WaterQualityData {
  city: string
  state: string
  stateCode: string
  slug: string
  population: number
  waterGrade: string
  overallScore: number
  lastUpdated: string
  waterSources: WaterSource[]
  qualityMetrics: QualityMetric
  contaminants: Contaminant[]
  contaminationHistory: ContaminationIncident[]
  treatmentFacilities: TreatmentFacility[]
  stateAverages: StateAverage
  trends: TrendData[]
  nearbyUtilities: string[]
  faq: FAQ[]
  additionalInfo: AdditionalInfo
}

const DATA_DIR = path.join(process.cwd(), 'data-location', 'waterquality')

export function getWaterQualityData(citySlug: string): WaterQualityData | null {
  try {
    const filePath = path.join(DATA_DIR, `${citySlug}.json`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Error loading water quality data for ${citySlug}:`, error)
    return null
  }
}

export function getAllWaterQualitySlugs(): string[] {
  try {
    const files = fs.readdirSync(DATA_DIR)
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''))
  } catch (error) {
    console.error('Error reading water quality directory:', error)
    return []
  }
}

export function getAllWaterQualityData(): WaterQualityData[] {
  const slugs = getAllWaterQualitySlugs()
  return slugs
    .map(slug => getWaterQualityData(slug))
    .filter((data): data is WaterQualityData => data !== null)
    .sort((a, b) => b.population - a.population)
}

export function getGradeColor(grade: string): string {
  if (grade.startsWith('A')) return 'text-green-600'
  if (grade.startsWith('B')) return 'text-blue-600'
  if (grade.startsWith('C')) return 'text-yellow-600'
  if (grade.startsWith('D')) return 'text-orange-600'
  return 'text-red-600'
}

export function getGradeBackgroundColor(grade: string): string {
  if (grade.startsWith('A')) return 'bg-green-50 border-green-200'
  if (grade.startsWith('B')) return 'bg-blue-50 border-blue-200'
  if (grade.startsWith('C')) return 'bg-yellow-50 border-yellow-200'
  if (grade.startsWith('D')) return 'bg-orange-50 border-orange-200'
  return 'bg-red-50 border-red-200'
}

export function getTrendIndicator(trend: string): string {
  if (trend === 'improving') return '↓'
  if (trend === 'worsening') return '↑'
  return '→'
}

export function getTrendColor(trend: string): string {
  if (trend === 'improving') return 'text-green-600'
  if (trend === 'worsening') return 'text-red-600'
  return 'text-gray-600'
}
