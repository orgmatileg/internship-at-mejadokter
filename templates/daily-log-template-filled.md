# Daily Learning Log - 04/02/2025

## Today's Focus 🎯

- Implementasi JWT Authentication di NestJS
- Setup Guard dan Strategy
- Integrasi dengan User Module

## What I Learned 📚

### 1. NestJS Authentication Flow

- Passport dan JWT integration di NestJS
- Flow dari request hingga token validation
- Best practices untuk auth implementation
  `

### 2. NestJS Security Components

- Guards vs Strategies vs Middleware
- Custom decorators untuk route protection
- Token validation dan user verification process

### 3. Implementation Details

- JWT token generation dan validation
- Password hashing dengan bcrypt
- User authentication flow

## Code Snippets 💻

### Authentication Service

```typescript
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    try {
      const payload = { email: user.email, sub: user.id };

      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.error("Login error:", error);
      throw new UnauthorizedException("Invalid credentials");
    }
  }
}
```

### JWT Strategy Implementation

```typescript
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
```

### Auth Controller

```typescript
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
```

## Challenges & Solutions 🔨

### 1. Environment Variable Configuration

**Problem:**

- Error saat mencoba mengakses JWT_SECRET dari .env file
- Configuration tidak terbaca di service

**Solution:**

- Implement ConfigService dengan proper Dependency Injection
- Setup environment module dengan validation

**Learning:**

- Pentingnya proper configuration management
- Environment variable validation di NestJS

### 2. Token Validation Issues

**Problem:**

- Token tidak tervalidasi dengan benar
- Inconsistent error handling

**Solution:**

- Fix JWT Strategy configuration
- Implement proper error handling flow
- Add validation pipe

**Learning:**

- Understanding Passport strategy validation flow
- Error handling best practices di NestJS

### 3. Type Definition Challenges

**Problem:**

- Type errors untuk user object
- Inconsistent payload types

**Solution:**

```typescript
interface JwtPayload {
  email: string;
  sub: string;
}

interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}
```

**Learning:**

- TypeScript type definition best practices
- Interface vs Type di TypeScript

## Questions & Blockers ❓

1. **Implementation Questions**

   - Best practice untuk refresh token implementation?
   - Proper strategy untuk token rotation?
   - Recommended approach untuk persistent sessions?

2. **Security Concerns**
   - Rate limiting implementation untuk login endpoint?
   - Token expiration handling di client side?
   - Security measures untuk token storage?

## Tomorrow's Plan 📅

1. **Features**

   - [ ] Implement refresh token mechanism
   - [ ] Add rate limiting untuk security
   - [ ] Setup unit tests untuk auth service

2. **Improvements**
   - [ ] Enhance error handling
   - [ ] Improve type safety
   - [ ] Add request validation

## Resources Used 📚

1. **Official Documentation**

   - [NestJS Authentication Guide](https://docs.nestjs.com/security/authentication)
     - _Key Learning: Passport strategy implementation_
   - [JWT.io Documentation](https://jwt.io)
     - _Understanding token structure_

2. **Community Resources**
   - Stack Overflow Thread tentang refresh tokens
   - NestJS Discord community discussions
   - Auth implementation examples dari GitHub

## Additional Notes 📝

1. **Security Considerations**

   - Review security best practices
   - Consider 2FA implementation
   - Document authentication flow

2. **Future Improvements**
   - Add comprehensive tests
   - Implement rate limiting
   - Enhance error messages

---

_Tags: #nestjs #authentication #jwt #typescript_
