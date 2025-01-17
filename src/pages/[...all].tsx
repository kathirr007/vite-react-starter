import { Link } from 'react-router-dom'
// import Button from '@/components/core/Button'

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full  min-h-screen bg-slate-200 dark:bg-primary-900">
      <div className="text-center space-y-8 text-slate-600 dark:text-slate-50">
        <h1 className="flex items-center mb-4 text-red-500">
          <span className="text-8xl  font-bold mx-4"> 404</span>
          {' '}
          <span className="text-4xl">
            |
            Not found
          </span>
        </h1>
        {/* go to home */}
        <CoreButton as={Link} to="/" color="primary" variant="solid" size="lg">
          Go to home
        </CoreButton>
        {/* go back */}
        <CoreButton onClick={() => window.history.back()} color="secondary" variant="text" size="lg">
          Go back
        </CoreButton>
      </div>
    </div>
  )
}
