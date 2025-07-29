import React from 'react'

export const PromptOptimizer: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Prompt Optimizer
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Enhance your prompts using AI-powered optimization techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Original Prompt */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Original Prompt
            </h3>
            <div className="mt-1">
              <textarea
                rows={8}
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Paste your prompt here to optimize it..."
              />
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Optimize Prompt
              </button>
            </div>
          </div>
        </div>

        {/* Optimized Prompt */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Optimized Prompt
            </h3>
            <div className="mt-1">
              <div className="min-h-[192px] p-3 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-600">
                Your optimized prompt will appear here after processing...
              </div>
            </div>
            <div className="mt-4 flex space-x-3">
              <button
                type="button"
                disabled
                className="bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded-md cursor-not-allowed"
              >
                Copy to Clipboard
              </button>
              <button
                type="button"
                disabled
                className="bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded-md cursor-not-allowed"
              >
                Save Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}