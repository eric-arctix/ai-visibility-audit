import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'AI Visibility Snapshot', href: '/visibility', icon: ChartBarIcon },
  { name: 'Prompt Optimizer', href: '/optimizer', icon: CogIcon },
  { name: 'Workflows', href: '/workflows', icon: DocumentTextIcon },
  { name: 'Saved Reports', href: '/reports', icon: FolderIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Sidebar: React.FC = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-sm ring-1 ring-gray-900/5">
      <div className="flex h-16 shrink-0 items-center">
        <div className="text-xl font-bold gradient-bg bg-clip-text text-transparent">
          AgentOS LLMO
        </div>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )
                    }
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}