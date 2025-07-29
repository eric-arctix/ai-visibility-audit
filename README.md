# AgentOS LLMO

**AI Visibility & LLM Optimization Platform** - A SaaS MVP that helps small businesses get visibility in AI tools like ChatGPT, Claude, and Perplexity.

Think of it as "Shopify for AI Agents and LLM Optimization."

## 🚀 Features

### Core MVP Features
- **User Authentication** - Email + Google OAuth via Supabase
- **AI Visibility Snapshot** - Check how your business appears in AI search
- **Prompt Optimizer** - Enhance prompts using AI-powered optimization
- **Dashboard** - Beautiful, responsive interface with analytics
- **Report Management** - Save and manage generated reports
- **Admin Panel** - User management and platform metrics

## 🛠 Tech Stack

### Frontend
- **React** + **TypeScript** - Modern UI development
- **Tailwind CSS** - Utility-first styling
- **Headless UI** - Accessible UI components
- **React Router** - Client-side routing
- **Supabase Auth UI** - Pre-built authentication components

### Backend
- **Node.js** + **Express** - REST API server
- **Supabase** - Database and authentication
- **OpenAI GPT-4o** - AI prompt optimization
- **JWT** - Token-based authentication

### Deployment
- **Frontend**: Vercel
- **Backend**: Render/Heroku
- **Database**: Supabase (PostgreSQL)

## 📁 Project Structure

```
agentOS-llmo/
├── frontend/                 # React TypeScript app
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Auth/        # Authentication components
│   │   │   └── Layout/      # Layout components
│   │   ├── contexts/        # React contexts
│   │   ├── lib/             # Utilities and configurations
│   │   ├── pages/           # Page components
│   │   └── App.tsx          # Main app component
│   ├── public/
│   └── package.json
├── backend/                  # Node.js Express API
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   └── index.js         # Main server file
│   ├── .env.example         # Environment variables template
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- OpenAI API key (for production)

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd agentOS-llmo

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Environment Setup

#### Frontend (.env)
```bash
cd frontend
cp .env.example .env
```

Edit `frontend/.env`:
```
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

#### Backend (.env)
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```
PORT=5000
NODE_ENV=development

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key

# OpenAI (optional for MVP demo)
OPENAI_API_KEY=your-openai-api-key

# JWT
JWT_SECRET=your-secret-key
```

### 3. Start Development

```bash
# Terminal 1 - Start backend
cd backend
npm run dev

# Terminal 2 - Start frontend
cd frontend
npm start
```

Visit `http://localhost:3000` to see the app!

## 🔧 Development Status

### ✅ Completed
- [x] Project scaffolding
- [x] React + TypeScript + Tailwind setup
- [x] Supabase authentication integration
- [x] Dashboard layout with sidebar navigation
- [x] Protected routes and auth context
- [x] Responsive UI components
- [x] Backend API structure with Express
- [x] Mock API endpoints for all features

### 🚧 In Progress
- [ ] AI Visibility Snapshot with real API integration
- [ ] Prompt Optimizer with OpenAI integration
- [ ] Supabase database schema and integration
- [ ] Report storage and management
- [ ] Admin panel functionality

### 📋 Next Steps
1. **Supabase Database Setup** - Create tables for users, reports, and optimizations
2. **AI Integration** - Connect OpenAI API for real prompt optimization
3. **Visibility Analysis** - Implement business visibility checking logic
4. **Report Storage** - Save and retrieve user reports
5. **Admin Dashboard** - User management and analytics
6. **Docker Setup** - Containerization for deployment
7. **Production Deployment** - Deploy to Vercel + Render

## 🎯 MVP Demo Features

The current build includes:

1. **Beautiful Authentication** - Login/signup with email or Google
2. **Dashboard Overview** - Stats cards and quick actions
3. **AI Visibility Form** - Input business details (mock analysis)
4. **Prompt Optimizer** - Before/after prompt interface (mock optimization)
5. **Report Management** - Placeholder for saved reports
6. **Responsive Design** - Works on desktop and mobile

## 📊 API Endpoints

### Authentication
- `GET /api/auth/user` - Get current user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Visibility Analysis
- `POST /api/visibility/analyze` - Analyze business visibility

### Prompt Optimization
- `POST /api/optimizer/optimize` - Optimize a prompt

### Reports
- `GET /api/reports` - Get user reports
- `GET /api/reports/:id` - Get specific report
- `POST /api/reports` - Save new report
- `DELETE /api/reports/:id` - Delete report

## 🔑 Environment Variables

### Frontend
- `REACT_APP_SUPABASE_URL` - Supabase project URL
- `REACT_APP_SUPABASE_ANON_KEY` - Supabase anonymous key

### Backend
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_SERVICE_KEY` - Supabase service role key
- `OPENAI_API_KEY` - OpenAI API key
- `JWT_SECRET` - JWT signing secret

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Backend (Render/Heroku)
1. Connect GitHub repository
2. Set environment variables
3. Deploy with auto-build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

**AgentOS LLMO** - Empowering businesses with AI visibility and optimization tools.