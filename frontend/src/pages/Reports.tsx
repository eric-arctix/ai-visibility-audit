import React from 'react'

export const Reports: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Saved Reports
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          View and manage your AI visibility reports and prompt optimizations.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Reports Yet</h3>
            <p className="text-gray-600 mb-4">
              Generate your first visibility report or optimize a prompt to see saved reports here.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/visibility"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Generate Report
              </a>
              <a
                href="/optimizer"
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md"
              >
                Optimize Prompt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}