import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export const metadata = {
  title: `Nutrition Quizzes - Test Your Knowledge | ${SITE_NAME}`,
  description: 'Take our free nutrition quizzes to discover your diet personality, test your nutrition knowledge, and get personalized recommendations.',
}

const quizzes = [
  {
    slug: 'diet-personality',
    title: 'What\'s Your Diet Personality?',
    description: 'Discover your unique approach to nutrition and get personalized recommendations based on your eating style, goals, and lifestyle.',
    duration: '2 min',
    questions: 8,
    icon: '🎯',
    color: 'primary',
    featured: true,
  },
  // Future quizzes can be added here
  // {
  //   slug: 'nutrition-iq',
  //   title: 'Test Your Nutrition IQ',
  //   description: 'How much do you really know about nutrition? Take this quiz to find out and learn some surprising facts.',
  //   duration: '3 min',
  //   questions: 10,
  //   icon: '🧠',
  //   color: 'blue',
  //   featured: false,
  // },
]

export default function QuizzesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Quizzes</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nutrition Quizzes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover insights about your eating habits, test your nutrition knowledge,
          and get personalized recommendations with our interactive quizzes.
        </p>
      </div>

      {/* Featured Quiz */}
      {quizzes.filter(q => q.featured).map((quiz) => (
        <Link
          key={quiz.slug}
          href={`/quiz/${quiz.slug}`}
          className="block mb-8"
        >
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  Featured Quiz
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {quiz.icon} {quiz.title}
                </h2>
                <p className="text-primary-100 mb-4 max-w-xl">
                  {quiz.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-primary-200">
                  <span>⏱️ {quiz.duration}</span>
                  <span>📝 {quiz.questions} questions</span>
                </div>
              </div>
              <span className="text-6xl hidden md:block">{quiz.icon}</span>
            </div>
            <div className="mt-6">
              <span className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Start Quiz →
              </span>
            </div>
          </div>
        </Link>
      ))}

      {/* Other Quizzes */}
      {quizzes.filter(q => !q.featured).length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">More Quizzes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {quizzes.filter(q => !q.featured).map((quiz) => (
              <Link
                key={quiz.slug}
                href={`/quiz/${quiz.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{quiz.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{quiz.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{quiz.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>⏱️ {quiz.duration}</span>
                      <span>📝 {quiz.questions} questions</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Coming Soon Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          More Quizzes Coming Soon!
        </h3>
        <p className="text-gray-600 mb-4">
          We are working on new quizzes to help you on your nutrition journey:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
            🧠 Nutrition IQ Test
          </span>
          <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
            🍳 Meal Planning Style
          </span>
          <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
            💪 Fitness Nutrition Match
          </span>
        </div>
      </div>

      {/* Related Links */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Also Check Out
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/calculators"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
          >
            <span className="text-2xl mb-2 block">🧮</span>
            <span className="font-medium text-gray-900">Nutrition Calculators</span>
            <p className="text-sm text-gray-500 mt-1">TDEE, macros, BMI and more</p>
          </Link>
          <Link
            href="/meal-prep"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
          >
            <span className="text-2xl mb-2 block">📦</span>
            <span className="font-medium text-gray-900">Meal Prep Guides</span>
            <p className="text-sm text-gray-500 mt-1">Weekly meal prep plans</p>
          </Link>
          <Link
            href="/diets"
            className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
          >
            <span className="text-2xl mb-2 block">📚</span>
            <span className="font-medium text-gray-900">Diet Guides</span>
            <p className="text-sm text-gray-500 mt-1">Keto, Mediterranean & more</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
