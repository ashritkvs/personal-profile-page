# Portfolio Website

## Overview

This is a modern portfolio website built as a single-page application that showcases professional experience, projects, and skills using a unique design approach. The application combines Spotify Wrapped's vibrant visual style with IMDb's cinematic presentation to create an engaging, interactive showcase of accomplishments and technical expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application is built using React with TypeScript, providing a robust and type-safe frontend experience. The architecture follows a component-based design pattern with clear separation of concerns:

- **Component Structure**: Modular components organized by functionality (hero, projects, skills, experience, etc.)
- **UI Framework**: shadcn/ui components with Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theming, implementing Spotify-inspired gradients and IMDb-style layouts
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **State Management**: React Query for server state management with custom query client configuration

### Backend Architecture
The backend follows a minimal REST API approach built on Express.js:

- **Server Framework**: Express.js with TypeScript for type safety
- **Route Organization**: Centralized route registration with API prefix structure
- **Storage Layer**: Interface-based storage design with in-memory implementation (MemStorage)
- **Error Handling**: Centralized error middleware with standardized error responses
- **Development Tooling**: Vite integration for hot module replacement and development experience

### Data Storage
The application uses a flexible storage architecture:

- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle-kit for migrations and schema management
- **Database Provider**: Neon Database serverless PostgreSQL
- **Fallback Storage**: In-memory storage implementation for development/testing

### Development and Build Process
The project uses modern JavaScript tooling:

- **Build System**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across client, server, and shared code
- **Module System**: ES modules throughout the application
- **Path Resolution**: Configured aliases for clean import statements
- **Development Server**: Hot reload with error overlay for improved developer experience

### Styling and Design System
The visual design implements a fusion of popular platforms:

- **Design Language**: Spotify Wrapped aesthetics (vibrant gradients, smooth scrolling, storytelling elements)
- **Project Presentation**: IMDb-style movie poster cards for project showcases
- **Color Scheme**: Custom CSS variables for Spotify green, purple, and IMDb yellow
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Interactive Elements**: Progress bars, animations, and hover effects for engagement

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for API routes and middleware
- **TypeScript**: Type safety across the entire application stack

### Database and ORM
- **Drizzle ORM**: Type-safe database operations and schema management
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **PostgreSQL**: Primary database for data persistence

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI components
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool and development server with hot reload
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

### State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type inference

### Additional Utilities
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **class-variance-authority**: Component variant management
- **nanoid**: Unique ID generation