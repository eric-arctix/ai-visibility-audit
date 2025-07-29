import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  role: 'admin' | 'user'
  created_at: string
  updated_at: string
}

export interface VisibilityReport {
  id: string
  user_id: string
  business_name: string
  business_service: string
  visibility_score: number
  recommendations: string[]
  created_at: string
}

export interface PromptOptimization {
  id: string
  user_id: string
  original_prompt: string
  optimized_prompt: string
  improvement_notes: string
  created_at: string
}