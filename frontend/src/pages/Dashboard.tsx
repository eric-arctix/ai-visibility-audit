import React from 'react'
import { ChartBarIcon, CogIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const stats = [
  { name: 'AI Visibility Score', value: '0', icon: ChartBarIcon, change: 'Get your first report', changeType: 'neutral' },
  { name: 'Prompts Optimized', value: '0', icon: CogIcon, change: 'Start optimizing', changeType: 'neutral' },
  { name: 'Reports Generated', value: '0', icon: DocumentTextIcon, change: 'Create your first report', changeType: 'neutral' },
  { name: 'Team Members', value: '1', icon: UserGroupIcon, change: 'Invite team members', changeType: 'neutral' },
]

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome to AgentOS LLMO. Boost your AI visibility and optimize your prompts.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{item.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="text-gray-600">{item.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-10 w-10 text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <a href="/visibility" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">Check AI Visibility</p>
                  <p className="text-sm text-gray-500 truncate">See how your business appears in AI search</p>
                </a>
              </div>
            </div>

            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
              <div className="flex-shrink-0">
                <CogIcon className="h-10 w-10 text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <a href="/optimizer" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">Optimize Prompt</p>
                  <p className="text-sm text-gray-500 truncate">Enhance your prompts with AI</p>
                </a>
              </div>
            </div>

            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
              <div className="flex-shrink-0">
                <DocumentTextIcon className="h-10 w-10 text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <a href="/reports" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">View Reports</p>
                  <p className="text-sm text-gray-500 truncate">Access your saved reports</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}