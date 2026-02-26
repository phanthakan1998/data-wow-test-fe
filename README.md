
## Getting Started

First, run the development server:

```bash
npm install 
npm run dev 
```

Create a .env file in the root directory and add:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3002
```


## Architecture

Built with Next.js (App Router) using a layered structure:

app/ – Routing & layouts

components/ – Reusable UI components

services/ – API calls

hooks/ – Business logic

stores/ – Global state

enums/ & interfaces/ – Shared types

lib/ – Utilities

core/ – Configuraton

## How to optimize the website when handling intensive data and high traffic?

- Code Splitting & Lazy Loading – Load only necessary components to reduce initial bundle size.
- Client-side Caching – Cache API responses when appropriate such as tanstack. 
- Pagination / Infinite Scroll – Avoid loading large datasets at once.

## How to handle many users reserving tickets at the same time?
- Disable the Reserve button after click to prevent double submission
- Use WebSocket for seat updates
