# AI Frontend

React + TypeScript + Vite frontend for an AI platform. The current routed UI focuses on authentication screens: login, signup, forgot password, and reset password.

The repository also contains early dashboard shell pieces (`Header`, `Sidebar`, and navigation constants), but those components are not currently wired into the app routes.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- React Hook Form
- Yup validation
- Tailwind CSS
- React Compiler preset through Vite/Babel
- ESLint
- Prettier

## Project Structure

```text
src/
  assets/                    Imported starter/static assets
  components/
    auth/                    Shared authentication layout and form helpers
    layout/                  Dashboard shell components, currently not routed
    ui/                      Shared UI components
  constants/
    navigation.ts            Dashboard navigation and demo workspace stats
  pages/
    auth/                    Login, signup, forgot password, reset password pages
  routing/
    routes.tsx               App route definitions
  styles/
    global.css               Tailwind import and global styles
  validations/
    auth.validation.ts       Yup schemas and inferred form value types
```

Public assets:

```text
public/
  favicon.svg
  icons.svg
  images/
    login-corner-gradient.svg
    login-illustration.svg
    login-logo.svg
    login-orbit-planet.svg
```

Planning notes for the future AI chat workspace are in:

```text
agent.md
```

## Setup

Install dependencies from the project root:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Default Vite URL:

```text
http://localhost:5173
```

The backend should use the same URL as `FRONTEND_URL` so password reset emails open the correct frontend page:

```env
FRONTEND_URL=http://localhost:5173
```

Do not put backend credentials, email passwords, JWT secrets, database URLs, or AI API keys in this frontend project.

## Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Runs TypeScript build checks and creates a production build in `dist`.

```bash
npm run preview
```

Serves the production build locally.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run format
```

Formats files with Prettier.

```bash
npm run format:check
```

Checks formatting without writing changes.

## Routes

Routes are defined in:

```text
src/routing/routes.tsx
```

Current routes:

| Route                        | Page                  |
| ---------------------------- | --------------------- |
| `/`                          | Redirects to `/login` |
| `/login`                     | Login page            |
| `/signup`                    | Signup page           |
| `/forgot-password`           | Forgot password page  |
| `/reset-password/:id/:token` | Reset password page   |
| `*`                          | Redirects to `/login` |

There are no active `/dashboard` routes yet.

## Pages

### Login

File:

```text
src/pages/auth/LoginPage.tsx
```

Fields:

- Email
- Password
- Remember me checkbox

Links:

- Forgot password
- Create an account

### Signup

File:

```text
src/pages/auth/SignupPage.tsx
```

Fields:

- First name
- Last name
- Email
- Password

Link:

- Login

### Forgot Password

File:

```text
src/pages/auth/ForgotPasswordPage.tsx
```

Fields:

- Email

Link:

- Login

### Reset Password

File:

```text
src/pages/auth/ResetPasswordPage.tsx
```

Route params:

- `id`
- `token`

Fields:

- New password
- Confirm password

Link:

- Login

## Shared Components

### AuthLayout

File:

```text
src/components/auth/AuthLayout.tsx
```

Provides the two-column authentication layout:

- Left visual illustration panel on large screens
- Right form panel
- Shared logo and spacing

### AuthHeader

File:

```text
src/components/auth/AuthHeader.tsx
```

Renders the auth page title and subtitle.

### AuthField

File:

```text
src/components/auth/AuthField.tsx
```

Reusable input field with label, validation error display, and React Hook Form registration support.

### AuthSwitchLink

File:

```text
src/components/auth/AuthSwitchLink.tsx
```

Reusable footer link for switching between auth pages.

### Button

File:

```text
src/components/ui/Button.tsx
```

Reusable button with loading state, full-width mode, variants, and size options.

### Header and Sidebar

Files:

```text
src/components/layout/Header.tsx
src/components/layout/Sidebar.tsx
```

Dashboard shell components for the planned AI workspace. They use:

```text
src/constants/navigation.ts
```

These files currently provide UI structure and demo values only; they are not rendered by any active route.

## Validation

Validation schemas are defined in:

```text
src/validations/auth.validation.ts
```

Current frontend validation:

- Login email must be valid.
- Login password is required and must be at least 6 characters.
- Signup first name and last name must be at least 2 characters.
- Signup email must be valid.
- Signup password is required and must be at least 6 characters.
- Forgot-password email must be valid.
- Reset password must be at least 6 characters.
- Reset password and confirm password must match.

The frontend currently uses a 6-character password minimum. If the backend password policy is stricter, update these Yup schemas before production so users see the correct validation message before submitting.

## Backend API Integration

The UI forms currently validate input, but submit handlers do not call the backend yet. Each page has an `onSubmit` handler that receives form values and discards them.

Expected auth API mappings when integration is added:

| Frontend Page   | Backend API                                    |
| --------------- | ---------------------------------------------- |
| Login           | `POST /api/auth/login`                         |
| Signup          | `POST /api/auth/register`                      |
| Forgot password | `POST /api/auth/forgot-password`               |
| Reset password  | `POST /api/auth/reset-password/:userId/:token` |

Expected reset-password URL shape from backend email:

```text
/reset-password/:id/:token
```

The frontend route currently uses `:id`, while the backend API route may use `:userId`. When wiring the API call, send the route `id` param as `userId` if that is the backend contract.

Recommended API service location:

```text
src/services/
```

Suggested environment variable for backend URL:

```env
VITE_API_URL=http://localhost:3000
```

Only variables prefixed with `VITE_` are exposed to the Vite frontend. Never put private credentials in frontend environment variables.

## Styling

Global styles are in:

```text
src/styles/global.css
```

The app uses Tailwind utility classes directly in components. Auth pages use a polished two-panel layout with illustration assets from `public/images`.

## Build Output

Production builds are written to:

```text
dist/
```

`dist` is listed in `.gitignore` and should be regenerated when needed. A local `dist` folder may still exist after running `npm run build`.

## Git Ignore

The frontend `.gitignore` excludes:

- logs
- `node_modules`
- `dist`
- `dist-ssr`
- local env files
- editor/system files

## Security Notes

- Do not store secrets in frontend code.
- Do not add SMTP credentials, database URLs, JWT secrets, backend `.env` values, or AI API keys to this project.
- Use only public `VITE_` variables in the frontend.
- Keep password validation aligned with backend rules.
- Store auth tokens carefully when API integration is added.

## Verification

Useful checks before committing frontend changes:

```bash
npm run lint
npm run format:check
npm run build
```
