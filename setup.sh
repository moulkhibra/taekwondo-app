#!/bin/bash
# Script to setup the project and run it quickly

echo "🥋 ========================================="
echo "   Taekwondo Management System Setup"
echo "========================================= 🥋"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully!"
echo ""

# Reminder about Firebase setup
echo "⚠️  IMPORTANT: Firebase Setup Required"
echo "================================================"
echo "1. Read: FIREBASE_SETUP.md"
echo "2. Create a Firebase project"
echo "3. Update: src/firebase.js with your credentials"
echo "4. Then run: npm run dev"
echo ""
echo "Or use: npm run dev (for local testing without Firebase)"
echo ""

# Ask to run dev server
read -p "Do you want to start the development server now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Starting development server..."
    npm run dev
else
    echo "✅ Setup complete! To start the server, run: npm run dev"
fi
