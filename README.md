# Cloudflare Workers & React Application

This repository provides a robust and scalable starting point for building full-stack applications with Cloudflare Workers (using Hono.js) and a React frontend (powered by Vite, TypeScript, and Tailwind CSS with shadcn/ui). It's designed for rapid development and high performance on Cloudflare's global network.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Plasma1345/stellar-launch)

## Description

This template offers a modern development experience, combining the power of Cloudflare Workers for serverless backend logic and a feature-rich React frontend. It emphasizes type safety, developer experience, and ease of deployment, making it ideal for a wide range of web applications, from simple marketing sites to complex interactive experiences.

## Key Features

*   **Cloudflare Workers Backend:** Leverage Hono.js for a lightweight, high-performance API layer deployed globally on Cloudflare's edge.
*   **React Frontend:** A modern single-page application (SPA) built with React, Vite for blazing-fast development, and TypeScript for type safety.
*   **Tailwind CSS & shadcn/ui:** Beautiful, responsive, and accessible UI components with a highly customizable design system.
*   **Monorepo Structure:** Clear separation of frontend (`src/`) and backend (`worker/`) code for better organization.
*   **Type Safety:** End-to-end type safety across the frontend and backend with TypeScript.
*   **Integrated Tooling:** Pre-configured ESLint, Prettier, and Vite for a smooth development workflow.
*   **Easy Deployment:** Seamless deployment to Cloudflare with Wrangler.
*   **Scalability:** Built on Cloudflare's serverless platform, ensuring your application scales effortlessly.
*   **Theme Toggle:** Built-in dark/light mode toggle for enhanced user experience.
*   **Error Reporting:** Client-side error reporting endpoint integrated with the Worker.

## Technology Stack

### Frontend
*   **React 18:** A JavaScript library for building user interfaces.
*   **Vite:** Next-generation frontend tooling for a fast development experience.
*   **TypeScript:** Superset of JavaScript that adds static types.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui:** Reusable UI components built with Radix UI and Tailwind CSS.
*   **`@tanstack/react-query`:** Powerful asynchronous state management for React.
*   **`react-router-dom`:** Declarative routing for React.
*   **`sonner`:** An accessible and customizable toast component.
*   **`zustand`:** A small, fast, and scalable bearbones state-management solution.

### Backend
*   **Cloudflare Workers:** Serverless execution environment for running JavaScript, WebAssembly, or other languages on Cloudflare's edge network.
*   **Hono.js:** A small, simple, and ultrafast web framework for the edge.
*   **Wrangler:** The Cloudflare CLI tool for developing and deploying Workers.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   [Bun](https://bun.sh/docs/installation) (recommended for faster dependency management and scripts)
*   [Cloudflare account](https://dash.cloudflare.com/sign-up)
*   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-update/) installed and configured (`bunx wrangler login`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Authenticate Wrangler:**
    If you haven't already, log in to your Cloudflare account via Wrangler:
    ```bash
    bunx wrangler login
    ```

4.  **Generate Cloudflare Worker types:**
    ```bash
    bun run cf-typegen
    ```

## Development

To start the development server for the frontend and a local worker:

```bash
bun run dev
```

This command will:
*   Start the Vite development server, typically accessible at `http://localhost:3000`.
*   Proxy API requests to a local Cloudflare Worker development server.

Any changes you make to the frontend or worker files will trigger a hot reload.

## Usage

### Frontend
The frontend application is a React SPA. You can find the main entry point in `src/main.tsx` and the primary application page in `src/pages/HomePage.tsx`. Customize `src/pages/HomePage.tsx` to build your application's UI.

### Backend (Cloudflare Worker)
The backend logic resides in the `worker/` directory.
*   **`worker/index.ts`**: This file contains the core Hono application setup and should generally not be modified. It handles logging, CORS, client error reporting, and asset serving.
*   **`worker/userRoutes.ts`**: This is where you define your custom API routes. You can add new `app.get`, `app.post`, `app.put`, `app.delete` endpoints here.

**Example API Route:**
A basic `/api/test` endpoint is provided in `worker/userRoutes.ts`. You can access it at `http://localhost:3000/api/test` during development or `https://your-worker-url/api/test` after deployment.

```typescript
// worker/userRoutes.ts
import { Hono } from "hono";
import { Env } from './core-utils';

export function userRoutes(app: Hono<{ Bindings: Env }>) {
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
}
```

## Deployment

Deploying your application to Cloudflare Workers and Pages is straightforward.

1.  **Build the project:**
    This command compiles your React frontend and prepares your Worker for deployment.
    ```bash
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    This command uses Wrangler to deploy your Worker and associated assets to Cloudflare.
    ```bash
    bun run deploy
    ```
    Wrangler will guide you through the deployment process, including choosing a subdomain for your Worker.

Upon successful deployment, Wrangler will provide you with the URL where your application is live.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Plasma1345/stellar-launch)