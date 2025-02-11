# Project: Todo List Application

## Overview
Project Todo List adalah project pertama saya menggunakan NestJS dan React. Aplikasi ini memungkinkan user untuk membuat, mengelola, dan mengorganisir tasks mereka dengan fitur kategorisasi dan deadline management.

## Timeline
- Tanggal Mulai: 05/02/2025
- Target Selesai: 19/02/2025 (2 minggu)
- Status: In Progress

## Learning Objectives
- [x] Memahami struktur dasar NestJS (Modules, Controllers, Services)
- [x] Implementasi CRUD operations dengan MongoDB
- [ ] Menerapkan authentication dengan JWT
- [ ] Memahami React hooks (useState, useEffect, useContext)
- [ ] Implementasi form handling dan validasi di React
- [ ] Menerapkan proper error handling di frontend dan backend

## Tech Stack
### Yang Sudah Familiar
- JavaScript (Level pemahaman: Intermediate)
- Git (Level pemahaman: Beginner)
- MongoDB Basic Operations (Level pemahaman: Beginner)

### Yang Baru Dipelajari
- NestJS
  - Sudah paham basic module structure
  - Masih belajar Dependency Injection
  - Mengikuti NestJS documentation dan tutorial di YouTube
  - Challenge: Memahami decorators dan TypeScript
- React Hooks
  - Baru memahami useState dan useEffect
  - Masih belajar custom hooks
  - Resources: React official docs dan "React Hooks Simplified" course
- TypeScript
  - Belajar basic types dan interfaces
  - Masih kesulitan dengan generics

## Daily Learning Notes

### 05/02/2025
#### Apa yang dikerjakan hari ini
- Setup project NestJS
- Membuat basic CRUD untuk tasks
- Belajar tentang NestJS modules dan controllers

#### Apa yang dipelajari
- NestJS project structure
  ```typescript
  // tasks.controller.ts
  @Controller('tasks')
  export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get()
    findAll(): Promise<Task[]> {
      return this.tasksService.findAll();
    }
    
    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
      return this.tasksService.create(createTaskDto);
    }
  }
  ```
- Dependency Injection di NestJS
- MongoDB integration dengan NestJS

#### Challenges
- TypeScript setup dengan NestJS
  - Masalah: Error TS2307: Cannot find module atau its corresponding type declarations
  - Solusi: Install @types/node dan setup tsconfig.json dengan benar
  - Status: Resolved
- MongoDB connection
  - Masalah: Error connecting to MongoDB
  - Solusi: Fix connection string dan install mongoose
  - Status: Resolved

#### Resources yang digunakan
- [NestJS Documentation](https://docs.nestjs.com/)
  - Key takeaways: Module structure, dependency injection
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - Basic types dan decorators

#### Pertanyaan/Blocker
- Bagaimana best practice untuk error handling di NestJS?
- Kapan sebaiknya menggunakan interface vs type di TypeScript?

### 06/02/2025
#### Apa yang dikerjakan hari ini
- Implementasi validation pipes
- Setup React project dengan Vite
- Membuat basic components untuk Todo List

#### Apa yang dipelajari
- Class validator di NestJS
  ```typescript
  // create-task.dto.ts
  export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsDateString()
    deadline: Date;
  }
  ```
- React component structure dengan TypeScript
  ```typescript
  // TaskList.tsx
  interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
  }

  const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
    return (
      <div className="mt-4">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    );
  };
  ```

#### Challenges
- React TypeScript setup
  - Issue dengan type definitions untuk props
  - Solusi: Belajar tentang React.FC dan interface
- State management
  - Masih bingung kapan menggunakan useState vs useContext
  - Sedang explore berbagai approaches

## Weekly Summary

### Week 1 (05/02/2025 - 09/02/2025)
#### Completed Tasks
- [x] Project setup (NestJS & React)
- [x] Basic CRUD API untuk tasks
- [x] Frontend components structure
- [ ] Authentication system (In Progress)

#### Key Learnings
1. NestJS Architecture
   - Module structure
   - Dependency injection
   - Middleware implementation
2. React with TypeScript
   - Component typing
   - Props interface
   - Basic hooks dengan TypeScript

#### Challenges & Solutions
| Challenge | Approach | Result | Learning |
|-----------|----------|---------|----------|
| TypeScript learning curve | Mulai dari basic types, perlahan ke advanced | On track | Type systems sangat membantu catch errors early |
| NestJS structure | Follow documentation & video tutorials | Success | Architectural patterns in NestJS |

#### Next Week's Goals
- [ ] Complete authentication system
- [ ] Add task categories
- [ ] Implement deadline notifications

## Technical Implementations

### Feature: Task Management
#### Apa yang dipelajari
- CRUD operations di NestJS
- MongoDB schemas
- React state management
- Form handling

#### Code Implementation
```typescript
// task.schema.ts
@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ required: true })
  deadline: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
```

#### Why this approach?
- Menggunakan Mongoose schemas untuk better type safety
- Proper validation di schema level
- Relasi dengan user untuk authentication

#### Challenges
- Schema relations
  - Memahami MongoDB relations
  - Implemented proper indexing
- Form validation
  - Client-side vs Server-side validation
  - Implemented both for better UX

## Testing & Quality Assurance
### Unit Testing
- Belajar Jest dengan NestJS
- Basic unit tests untuk services
- Mocking dependencies

### Code Quality
- Menggunakan ESLint
- Following NestJS best practices
- Regular code reviews dengan mentor

## Security Considerations
- Implementing JWT authentication
- Password hashing dengan bcrypt
- Request validation

## Key Takeaways
1. TypeScript importance
   - Type safety saves debugging time
   - Better code documentation
2. Architecture patterns
   - Separation of concerns
   - Dependency injection benefits

## Future Learning Goals
- [ ] Learn about caching with Redis
- [ ] Explore automated testing
- [ ] Study deployment processes

## Notes & Questions for Mentor
- Best practices untuk error handling?
- Recommendations untuk state management di scale lebih besar?
- Tips untuk improve TypeScript skills?

## Resources Library
### Official Documentation
- [NestJS Docs](https://docs.nestjs.com) - Core concepts dan implementation
- [React Docs](https://reactjs.org) - Hooks dan components

### Tutorials & Articles
- [NestJS Zero to Hero](https://www.udemy.com/) - Course structure sangat membantu
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) - Advanced TypeScript concepts

### Code References
- [NestJS Sample Apps](https://github.com/nestjs/nest/tree/master/sample) - Real implementation examples
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react) - Quick reference for React + TS