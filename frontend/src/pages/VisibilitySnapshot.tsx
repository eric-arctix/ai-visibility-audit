import React from 'react'

export const VisibilitySnapshot: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          AI Visibility Snapshot
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Check how your business appears in AI search results and get visibility recommendations.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Business Information
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Enter your business details to analyze your AI visibility across platforms like ChatGPT, Claude, and Perplexity.
          </p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <input
                type="text"
                name="business-name"
                id="business-name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your business name"
              />
            </div>
            
            <div>
              <label htmlFor="business-service" className="block text-sm font-medium text-gray-700">
                Service/Industry
              </label>
              <input
                type="text"
                name="business-service"
                id="business-service"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="What service do you provide?"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="button"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Generate Visibility Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}