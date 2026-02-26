
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
