# AI Chat Platform Execution Plan

## Project Direction

Build an AI platform after authentication is fully dynamic. The first major product feature will be an AI Chat workspace with ChatGPT-style conversation flow, saved history, and useful productivity features.

## Main Product Idea

An authenticated AI workspace where users can create, manage, and continue AI conversations.

Core flow:

```text
Login -> Protected Dashboard -> AI Chat -> Conversation History -> Chat Details
```

## Main MVP Features

These features should be built first.

1. Protected dashboard layout
2. AI Chat page
3. New chat create
4. ChatGPT-style chat UI
5. User message submit
6. Assistant response display
7. Typing/loading state
8. Save user and assistant messages in database
9. Conversation history sidebar
10. Open old conversations
11. Continue old chat with previous context
12. Rename chat
13. Delete chat
14. Copy assistant response
15. Regenerate assistant response

## Better Features After MVP

Add these after the first working version.

1. Pin important chats
2. Search chats by title or message content
3. Prompt modes
4. Edit user message and regenerate response
5. Delete individual message
6. Favorite useful assistant responses
7. Export conversation as text
8. Chat tags or folders

## Prompt Modes

Prompt modes make the AI platform feel more polished and useful.

Suggested modes:

```text
General
Code
Email
Summary
Brainstorm
Explain Like Beginner
```

Each mode can add a hidden system instruction before sending the prompt to the AI service.

Examples:

```text
General: Answer helpfully and clearly.
Code: Act like a senior software engineer. Provide accurate code and explain tradeoffs.
Email: Write polished professional emails.
Summary: Summarize content into clear bullet points and action items.
Brainstorm: Generate creative, structured ideas.
Explain Like Beginner: Explain simply with examples.
```

## Future Advanced Features

These are not needed for the first version.

1. File upload and ask questions from documents
2. PDF summarizer
3. Voice input
4. Text-to-speech responses
5. Image understanding
6. Multiple AI model selection
7. Public share link for conversations
8. Team workspace
9. Prompt library
10. Web search mode
11. RAG over uploaded documents

## Backend Data Models

### User

Already exists from auth.

### Chat

Suggested fields:

```ts
{
  userId: ObjectId;
  title: string;
  mode: "general" | "code" | "email" | "summary" | "brainstorm" | "beginner";
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Message

Suggested fields:

```ts
{
  chatId: ObjectId;
  userId: ObjectId;
  role: "user" | "assistant" | "system";
  content: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## Backend API Plan

All chat APIs should be protected with auth middleware.

### Chat Routes

```http
POST /api/chats
```

Create a new chat.

```http
GET /api/chats
```

Get logged-in user's chat list.

```http
GET /api/chats/:chatId
```

Get chat details with messages.

```http
PATCH /api/chats/:chatId
```

Rename chat, change mode, or pin/unpin.

```http
DELETE /api/chats/:chatId
```

Delete chat and related messages.

### Message Routes

```http
POST /api/chats/:chatId/messages
```

Send user message, call AI service, save user and assistant messages.

```http
POST /api/chats/:chatId/regenerate
```

Regenerate last assistant response.

```http
PATCH /api/messages/:messageId
```

Edit or favorite a message.

```http
DELETE /api/messages/:messageId
```

Delete a message.

## Backend Implementation Steps

1. Add auth middleware for protected routes.
2. Add `Chat` model.
3. Add `Message` model.
4. Add chat validators.
5. Add chat controller.
6. Add chat routes.
7. Add AI service wrapper.
8. Save user message before AI call.
9. Send context messages to AI service.
10. Save assistant response.
11. Return updated messages to frontend.
12. Add rate limit for AI message endpoint.

## AI Service Plan

Create service file:

```text
backend/src/services/ai.service.ts
```

Responsibilities:

1. Receive mode and message context.
2. Build system instruction.
3. Call AI provider.
4. Return assistant text.

Environment variable:

```env
AI_API_KEY=your-ai-api-key
```

Do not expose `AI_API_KEY` to frontend.

## Frontend Page Plan

### Dashboard Layout

Suggested path:

```text
frontend/src/components/layout/DashboardLayout.tsx
```

Layout parts:

1. Sidebar
2. Topbar
3. User menu
4. Logout button
5. Main content area

### AI Chat Page

Suggested path:

```text
frontend/src/pages/dashboard/AiChatPage.tsx
```

UI parts:

1. Chat sidebar
2. New chat button
3. Search chats input
4. Chat list
5. Current chat header
6. Prompt mode selector
7. Message list
8. Message composer
9. Loading state
10. Empty state

### Frontend Services

Suggested files:

```text
frontend/src/services/api.service.ts
frontend/src/services/chat.service.ts
```

Responsibilities:

1. Store backend base URL.
2. Attach auth token.
3. Handle API response format.
4. Provide chat API methods.

## Frontend Routes

Add protected routes after login:

```text
/dashboard
/dashboard/chat
/dashboard/chat/:chatId
```

Initial flow:

```text
/dashboard -> redirect to /dashboard/chat
```

## Suggested Build Order

Follow this order to avoid confusion.

1. Make current auth forms dynamic.
2. Add auth token storage and logout.
3. Add protected route wrapper.
4. Build dashboard layout.
5. Build empty AI Chat UI.
6. Add backend chat/message models.
7. Add protected chat APIs.
8. Connect frontend chat list.
9. Connect new chat create.
10. Connect send message API.
11. Add AI service call.
12. Save and render messages.
13. Add rename/delete chat.
14. Add copy/regenerate response.
15. Add search and pinned chats.

## MVP Acceptance Criteria

The MVP is complete when:

1. Logged-in user can open dashboard.
2. Logged-in user can create a new chat.
3. User can send a message.
4. AI response appears in the chat UI.
5. User and assistant messages save in database.
6. User can refresh page and see old chats.
7. User can continue an old conversation.
8. User can rename a chat.
9. User can delete a chat.
10. User can copy assistant response.
11. Backend protects chat APIs from unauthenticated users.
12. AI API key is only stored in backend environment variables.

## Important Security Notes

1. Never expose AI API keys in frontend.
2. Protect all chat and message APIs.
3. Only allow users to access their own chats.
4. Add rate limits on AI message endpoint.
5. Validate message length.
6. Avoid storing secrets in README files.
7. Do not commit `.env`.

## Recommended First Execution Step

Before starting AI Chat, finish dynamic auth:

1. Connect login API.
2. Connect register API.
3. Connect forgot password API.
4. Connect reset password API.
5. Store login token.
6. Add logout.
7. Add protected dashboard route.

After that, start AI Chat MVP.
