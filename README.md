# Fullstack JWT Auth Boilerplate

A modern, secure, and extensible **fullstack starter template** for your projects.  
Built with **Go**, **Gin**, **PostgreSQL**, and **JWT** on the backend — and **React** on the frontend.

---

## Tech Stack

- **Backend**
  - Go (Gin)
  - PostgreSQL
  - JWT Authentication (Access + Refresh tokens)
  - Bcrypt password hashing
  - RESTful API
- **Frontend**
  - React (Vite/CRA)
  - React Context + Reducer for Auth State
  - React Router Dom
  - React Hot Toast
  - React Hook Form
  - TailwindCSS

---

## Features

- User Registration & Login
- JWT Access & Refresh Token Flow
- Secure HttpOnly Cookies for Refresh Tokens
- Protected API routes with `RequireAuth` middleware
- User state persistence in React (`localStorage`)
- Simple gamification: coins, XP, level, streak
- PostgreSQL schema for extended user profiles
- Logout flow that clears server & client sessions

---

## Database

**_Users Table_**

```sQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    userId VARCHAR(10) NOT NULL UNIQUE,
    role VARCHAR(10) NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
    coins INT DEFAULT 0 CHECK (coins >= 0),
    xp INT DEFAULT 0 CHECK (xp >= 0),
    level INT DEFAULT 1 CHECK (level >= 1),
    streak INT DEFAULT 0 CHECK (streak >= 0),
    friends_count INT DEFAULT 0 CHECK (friends_count >= 0),
    leaderboard_rank INT DEFAULT NULL,
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## Quick start

### 1. Clone the repository

```bash
git clone https://github.com/boatman-27/boilerplate-v2
```

### 2. Backend Setup

```bash
cd Backend
```

#### 1. Create a `.env` file and add your secrets and DB config:

```env
ACCESS_SECRET=your_access_secret
REFRESH_SECRET=your_refresh_secret
```

#### 2. Install Dependencies

```bash
go mod tidy
```

#### 3. Install CompileDaemon (Optional)

Once installed, you can use `CompileDaemon` to watch your project files and recompile/run your Go application automatically on changes.

```Bash
go install github.com/githubnemo/CompileDaemon@latest
```

Add `export PATH="$HOME/go/bin:$PATH"` to your `shell` file (`.zshrc` or `.bashrc`)

#### 4. Add an alias in your `shell` file

```bash
export PATH="$HOME/go/bin:$PATH"
alias gomon="CompileDaemon -build='go build -o myapp main.go' -command='./myapp'"
```

#### 5. Run the application

If CompileDaemon is installed

```shell
gomon
```

OR if CompileDaemon is not installed

```
go run .
```

### 3. Frontend Setup

```bash
cd ..
cd client
```

#### 1. Install Bun

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called `bun`. [ReadMore](https://bun.sh/docs)

```bash
curl -fsSL https://bun.sh/install | bash # for macOs, Linux, and WSL
# to Install a specific version
curl -fsSL https://bun.sh/install | bash -s "bun-v1.2.17"

powershell -c "irm bun.sh/install.ps1|iex" # For Windows
```

##### Using Homebrew or Scoop

```bash
brew install oven-sh/bun/bun # for macOs and Linux
scoop install bun # for Windows
```

#### 2. Install Dependencies

```bash
bun install
```

#### 3. Start the server

```bash
bun run dev
```

---

## Authentication Flow

1. **Register/Login**
   - Get an `accessToken` in the response.
   - `refreshToken` is stored securely as an `HttpOnly` cookie.
2. **Protected Routes**
   - Use `accessToken` in the `Authorization: Bearer <token>` header.
3. **Token Refresh**
   - Call `/account/refreshtoken` to get a new access token when the current one expires.
4. **Logout**
   - Calls `/account/logout` to clear the cookie.
   - Client state (`localStorage`) is cleared.

---

## API Endpoints

| Method | Endpoint                | Description               |
| ------ | ----------------------- | ------------------------- |
| POST   | `/account/register`     | Register a new user       |
| POST   | `/account/login`        | Login user and get tokens |
| POST   | `/account/refreshtoken` | Refresh access token      |
| GET    | `/account/validate`     | Validate access token     |
| GET    | `/account/users`        | Get all users             |
| POST   | `/account/logout`       | Logout (clear cookie)     |

---

#### Example JSON for Register

```json
{
  "fname": "John",
  "lname": "Doe",
  "email": "someemail@example.com",
  "password": "SomePassword",
  "userid": "penguin"
}
```

#### Example JSON for Login

```json
{
  "email": "someemail@example.com",
  "password": "SomePassword"
}
```

---

## Contributing

Feel free to open issues or pull requests for enhancements or bug fixes.
