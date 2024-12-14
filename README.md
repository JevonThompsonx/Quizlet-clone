# Quizler - Quizlet clone 

## How to 
- `bun run install:all` 
    - to install all dependencies
- `bun run dev`
  - to start server
      - frontend: port 3000
      - backend: port 8080

### Development 
- Target /api/ for backend
- Target / for frontend
- Uses proxy to auto route to backend if link starts with "/api"

### To do list 
[] Design frontend 
  [] Landing page design 
  [] Cards design 
  [] Card show page 
[] Design backend (backend should be auth only) 
  [] figute out password hashibg 
  [] figure out jwt

### Feauture list 
[] sqlite3 or turso for db management 
[] login with password hash and auth 
[] Card creation 
[] Card edits 
[] image upload for profile and quizes
[] view of all uploaded quiz
[] individual quiz page 
[] diff quiz types
