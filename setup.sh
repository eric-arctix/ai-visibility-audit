#!/bin/bash

echo "🚀 Setting up AgentOS LLMO..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd ../backend
npm install

# Create environment files
echo "📋 Creating environment files..."
cd ../frontend
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created frontend/.env from template"
fi

cd ../backend
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created backend/.env from template"
fi

cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Configure your Supabase project and update .env files"
echo "2. Run 'npm run dev' to start both servers"
echo "3. Visit http://localhost:3000 to see the app"
echo ""
echo "📚 For detailed instructions, see README.md"