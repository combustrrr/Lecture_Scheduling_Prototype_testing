# Lecture Scheduling System

A comprehensive full-stack application for managing college lecture schedules, student enrollments, and faculty course management. Built with modern web technologies to provide an intuitive interface for students and faculty to manage their academic schedules.

## 🚀 Tech Stack

### Backend
- **Node.js 18+** - Runtime environment
- **Express.js 4.18+** - Web framework
- **MongoDB 7.0** - Database
- **Mongoose 8.0+** - MongoDB ODM
- **JWT** - Authentication & authorization
- **bcryptjs** - Password hashing
- **Joi** - Data validation
- **Helmet** - Security headers
- **Morgan** - HTTP request logging
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection
- **Compression** - Response compression

### Frontend
- **React 18.3+** - UI library
- **TypeScript 5.5+** - Type safety
- **Vite 5.4+** - Build tool & dev server
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **React Router 6.20+** - Client-side routing
- **Axios 1.6+** - HTTP client
- **Lucide React 0.344+** - Icon library
- **React Hook Form 7.48+** - Form management
- **Zod 3.22+** - Schema validation
- **React Hot Toast 2.4+** - Toast notifications
- **Date-fns 2.30+** - Date manipulation

## 📁 Project Structure

```
LSP-6/
├── project/                 # Main project directory
│   ├── backend/             # Express.js API server
│   │   ├── src/
│   │   │   ├── controllers/ # Route controllers (auth, courses, enrollments, faculty, lectureSlots, schedules, users)
│   │   │   ├── middleware/  # Custom middleware (auth, errorHandler)
│   │   │   ├── models/      # Database models (Course, Enrollment, LectureSlot, Schedule, User)
│   │   │   ├── routes/      # API routes (auth, courses, enrollments, faculty, lectureSlots, schedules, users)
│   │   │   ├── utils/       # Utility functions (database, seedData)
│   │   │   ├── __tests__/   # Test files
│   │   │   └── server.js    # Express server setup
│   │   ├── package.json
│   │   └── package-lock.json
│   ├── frontend/            # React client application
│   │   ├── src/
│   │   │   ├── components/  # Reusable UI components (Auth, Layout)
│   │   │   ├── contexts/    # React contexts (AuthContext)
│   │   │   ├── pages/       # Page components (Auth, Courses, Dashboard, Faculty, Profile, Schedules, Student)
│   │   │   ├── utils/       # Utility functions (api)
│   │   │   ├── App.tsx      # Main app component
│   │   │   ├── main.tsx     # App entry point
│   │   │   └── index.css    # Global styles
│   │   ├── package.json
│   │   └── package-lock.json
│   ├── docker/              # Docker configuration files
│   │   └── mongo-init.js    # MongoDB initialization script
│   ├── docker-compose.yml   # Docker services configuration
│   ├── Dockerfile.backend   # Backend container setup
│   ├── Dockerfile.frontend  # Frontend container setup
│   ├── package.json         # Root package.json with scripts
│   ├── package-lock.json    # Root package lock file
│   └── README.md            # This file
```

## ✨ Features

### 🎓 Student Features
- **Lecture Slot Browsing** - View all available lecture slots with filtering and search
- **Enrollment Management** - Enroll in lecture slots and join waitlists
- **Personal Timetable** - View enrolled courses in a weekly timetable format
- **Profile Management** - Update personal information and preferences
- **Real-time Notifications** - Get notified about enrollment status changes

### 👨‍🏫 Faculty Features
- **Lecture Slot Creation** - Create and manage lecture slots with detailed information
- **Student Management** - View enrolled and waitlisted students for each slot
- **Dashboard Analytics** - Track enrollment statistics and slot performance
- **Schedule Management** - Organize recurring and one-time lecture sessions
- **Capacity Management** - Set and adjust slot capacities based on demand

### 🔐 Authentication & Security
- **JWT-based Authentication** - Secure user sessions with JSON Web Tokens
- **Role-based Access Control** - Separate interfaces for students and faculty
- **Password Security** - Bcrypt hashing for secure password storage
- **Rate Limiting** - API protection against abuse
- **CORS Configuration** - Secure cross-origin requests

### 🎨 User Experience
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **Modern UI Components** - Clean and intuitive user interface
- **Real-time Feedback** - Toast notifications for user actions
- **Form Validation** - Client and server-side validation with Zod
- **Loading States** - Smooth loading indicators for better UX

### 🚀 Technical Features
- **RESTful API** - Well-structured API endpoints
- **Database Optimization** - Efficient MongoDB queries and indexing
- **Error Handling** - Comprehensive error handling and logging
- **Docker Support** - Containerized deployment with Docker Compose
- **Health Checks** - Service health monitoring
- **Compression** - Optimized response sizes

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Docker & Docker Compose (optional)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd LSP-6/project
   npm install
   ```

2. **Environment Configuration:**
   
   **Backend Environment Variables:**
   Create a `.env` file in the `backend/` directory with the following variables:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/college_scheduling
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRES_IN=7d
   ALLOWED_ORIGINS=http://localhost:5173
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```
   
   **Frontend Environment Variables:**
   Create a `.env` file in the `frontend/` directory with the following variables:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Start MongoDB:**
   ```bash
   # Using Docker (recommended)
   docker-compose up mongodb -d
   
   # Or start MongoDB locally
   mongod
   ```

4. **Start Development Servers:**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start individually
   npm run dev:backend  # Backend runs on http://localhost:5000
   npm run dev:frontend # Frontend runs on http://localhost:5173
   ```

5. **Seed Database (Optional):**
   ```bash
   cd backend
   npm run seed
   ```

## 🐳 Docker Setup

### Using Docker Compose (Recommended)
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Setup
```bash
# Build and run backend
docker build -f Dockerfile.backend -t college-scheduling-backend .
docker run -p 5000:5000 --env-file backend/.env college-scheduling-backend

# Build and run frontend
docker build -f Dockerfile.frontend -t college-scheduling-frontend .
docker run -p 3000:3000 college-scheduling-frontend
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development
- `npm run start` - Start backend in production mode (from root)
- `npm run build` - Build the frontend application for production

### Backend Scripts
- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server
- `npm run build` - (No build step required for Node.js)
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

### Frontend Scripts
- `npm run dev` - Start Vite development server (default http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier
- `npm run typecheck` - Run TypeScript type checking

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration (student/faculty)
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create new course
- `GET /api/courses/:id` - Get course by ID
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Lecture Slots
- `GET /api/lecture-slots` - Get all lecture slots
- `POST /api/lecture-slots` - Create new lecture slot
- `GET /api/lecture-slots/:id` - Get lecture slot by ID
- `PUT /api/lecture-slots/:id` - Update lecture slot
- `DELETE /api/lecture-slots/:id` - Delete lecture slot

### Faculty
- `GET /api/faculty/lecture-slots` - Get faculty's lecture slots
- `POST /api/faculty/lecture-slots` - Create lecture slot (faculty only)
- `PUT /api/faculty/lecture-slots/:id` - Update lecture slot (faculty only)
- `DELETE /api/faculty/lecture-slots/:id` - Delete lecture slot (faculty only)

### Enrollments
- `GET /api/enrollments/my-timetable` - Get student's timetable
- `POST /api/enrollments/enroll/:slotId` - Enroll in lecture slot
- `DELETE /api/enrollments/drop/:slotId` - Drop from lecture slot
- `GET /api/enrollments/:slotId/students` - Get enrolled students (faculty only)

### Schedules
- `GET /api/schedules` - Get user schedules
- `POST /api/schedules` - Create schedule
- `PUT /api/schedules/:id` - Update schedule
- `DELETE /api/schedules/:id` - Delete schedule

### Health Check
- `GET /health` - Server health status

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Ensure all production environment variables are properly configured before deployment.

Backend `.env` example (production):
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-strong-production-secret
JWT_EXPIRES_IN=7d
ALLOWED_ORIGINS=https://your-frontend-domain
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

Frontend `.env` example (production):
```env
VITE_API_URL=https://your-backend-domain/api
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email your-email@example.com or create an issue in the GitHub repository.
