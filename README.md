# Agard Base Monorepo

A full-stack monorepo built with Next.js frontend and Express.js backend, managed with pnpm workspaces.

## 🏗️ Project Structure

```
agard-base/
├── frontend/          # Next.js React application
├── backend/           # Express.js API server
├── package.json       # Root workspace configuration
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.13.1 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd agard-base
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   # Backend
   cp backend/env.example backend/.env
   # Edit backend/.env with your configuration
   ```

4. **Start development servers**

   ```bash
   # Start both frontend and backend
   pnpm dev

   # Or start individually
   pnpm frontend:dev    # Frontend on http://localhost:3000
   pnpm backend:dev     # Backend on http://localhost:3001
   ```

## 📦 Available Scripts

### Root Level (Monorepo)

- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build all packages
- `pnpm lint` - Lint all packages
- `pnpm test` - Run tests for all packages
- `pnpm clean` - Clean all node_modules

### Frontend Specific

- `pnpm frontend:dev` - Start Next.js development server
- `pnpm frontend:build` - Build Next.js application

### Backend Specific

- `pnpm backend:dev` - Start Express.js development server
- `pnpm backend:build` - Build backend (no-op for Node.js)

## 🌐 Development URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Backend Health Check**: http://localhost:3001/health
- **Backend API Example**: http://localhost:3001/api/hello

## 🛠️ Technology Stack

### Frontend

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **React**: 19.1.0

### Backend

- **Framework**: Express.js
- **Language**: JavaScript
- **Security**: Helmet, CORS
- **Logging**: Morgan
- **Environment**: dotenv

### Monorepo Management

- **Package Manager**: pnpm
- **Workspace**: pnpm workspaces
- **Version**: 10.13.1

## 📁 Workspace Configuration

This monorepo uses pnpm workspaces with the following configuration:

```json
{
  "workspaces": ["frontend", "backend"]
}
```

## 🔧 Development Workflow

1. **Adding dependencies to a specific workspace**:

   ```bash
   pnpm --filter frontend add <package-name>
   pnpm --filter backend add <package-name>
   ```

2. **Running scripts in a specific workspace**:

   ```bash
   pnpm --filter frontend dev
   pnpm --filter backend dev
   ```

3. **Adding dev dependencies**:
   ```bash
   pnpm --filter frontend add -D <package-name>
   pnpm --filter backend add -D <package-name>
   ```

## 🚀 Deployment

### WhyDive.org on Coolify

Deploy the public site to Coolify from the repository root using the included `Dockerfile`.

- Application type: Dockerfile
- Dockerfile path: `Dockerfile`
- Exposed port: `3000`
- Health check path: `/`
- Build command: handled by Dockerfile
- Start command: handled by Dockerfile

The Docker image builds the `frontend` workspace with Next.js standalone output and runs `node frontend/server.js`.

See `docs/deployment-coolify.md` for the deployment notes and environment variable checklist.

### Backend (Later Phase)

The Express backend and database migration scripts remain available for later content/database phases, but the current public site deploys as the frontend container.

## 📝 Environment Variables

### Backend (.env)

```env
PORT=3001
NODE_ENV=development
# Add your database connection strings and API keys here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

ISC License
