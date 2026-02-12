'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  BookOpen,
  Code2,
  Database,
  ShieldCheck,
  Zap,
  Terminal,
  FileCode,
  Lock,
  Boxes,
  Github,
} from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-12 gap-2 rounded-full border border-zinc-200 bg-zinc-50 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-20">
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium dark:border-neutral-800 dark:bg-neutral-900/50">
              <BookOpen className="size-4" />
              <span>Developer Guide</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Next.js Prisma Template
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-neutral-400">
              A high-performance, full-stack boilerplate designed for speed and
              reliability. Built with Next.js 16, Prisma 7, and Auth.js v5.
            </p>
          </header>

          {/* Quick Start */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Terminal className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Quick Start</h2>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">1. Project Setup</h3>
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-neutral-400">
                    Clone the repo and install dependencies using npm.
                  </p>
                  <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-5 font-mono text-sm text-zinc-300 dark:bg-neutral-900">
                    <code>{`npx create-next-app -e https://github.com/beefysalad/next-prisma-template my-app
cd my-app
npm install`}</code>
                  </pre>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">
                  2. Environment Configuration
                </h3>
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-neutral-400">
                    Copy{' '}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                      .env.example
                    </code>{' '}
                    to{' '}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                      .env.local
                    </code>{' '}
                    and update your secrets.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                      <p className="mb-1 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                        Database
                      </p>
                      <code className="font-mono text-sm break-all">
                        DATABASE_URL
                      </code>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                      <p className="mb-1 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                        Auth Secret
                      </p>
                      <code className="font-mono text-sm break-all">
                        AUTH_SECRET
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Boxes className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Architecture</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-neutral-100">
                  <ShieldCheck className="size-5 text-emerald-500" />
                  Authentication (Auth.js v5)
                </div>
                <p className="text-zinc-600 dark:text-neutral-400">
                  Built on the latest Auth.js v5 (beta) with{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    JWT
                  </code>{' '}
                  strategy. It includes a custom Credentials provider for
                  Email/Password login, fully integrated with Prisma.
                </p>
                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                  <p className="font-mono text-sm text-zinc-500">
                    Protection logic in{' '}
                    <code className="text-zinc-900 italic dark:text-neutral-100">
                      middleware.ts
                    </code>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-neutral-100">
                  <Database className="size-5 text-blue-500" />
                  Database (Prisma 7)
                </div>
                <p className="text-zinc-600 dark:text-neutral-400">
                  PostgreSQL with Prisma 7. Schema includes{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    User
                  </code>
                  ,{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    Account
                  </code>
                  , and{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    Count
                  </code>{' '}
                  models.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-zinc-400">Studio</p>
                    <code className="text-xs text-zinc-500">
                      npx prisma studio
                    </code>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-zinc-400">Seed</p>
                    <code className="text-xs text-zinc-500">
                      npm run db:seed
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Patterns */}
          <section className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Code2 className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Development Patterns</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <h4 className="font-bold">Naming Conventions</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-neutral-400">
                  <li>
                    <code className="font-bold text-zinc-900 dark:text-neutral-100">
                      kebab-case
                    </code>{' '}
                    for files and folders.
                  </li>
                  <li>
                    <code className="font-bold text-zinc-900 dark:text-neutral-100">
                      PascalCase
                    </code>{' '}
                    for React components.
                  </li>
                  <li>Named exports are preferred for clarity.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Form Management</h4>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  Use{' '}
                  <span className="font-bold text-zinc-900 dark:text-neutral-100">
                    React Hook Form
                  </span>{' '}
                  with{' '}
                  <span className="font-bold text-zinc-900 dark:text-neutral-100">
                    Zod
                  </span>{' '}
                  resolvers.
                </p>
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-900/50">
                  schemas in lib/schemas/
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Component Architecture</h4>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  Feature-based grouping in{' '}
                  <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                    components/
                  </code>
                  . Generic primitives stay in{' '}
                  <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                    ui/
                  </code>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Folder Structure */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <FileCode className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Project Structure</h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div className="grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-neutral-800">
                <div className="space-y-4 p-8">
                  <div className="font-bold">Core Directories</div>
                  <ul className="space-y-3 text-sm text-zinc-600 dark:text-neutral-400">
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        app/
                      </code>{' '}
                      Next.js App Router (Pages & API)
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        components/
                      </code>{' '}
                      shadcn/ui & custom components
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/
                      </code>{' '}
                      Utils, Auth, Schemas, and API hooks
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        prisma/
                      </code>{' '}
                      Database schema & migrations
                    </li>
                  </ul>
                </div>
                <div className="space-y-4 p-8">
                  <div className="font-bold">Critical Files</div>
                  <ul className="space-y-3 text-sm text-zinc-600 dark:text-neutral-400">
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/auth.ts
                      </code>{' '}
                      Main NextAuth configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/prisma.ts
                      </code>{' '}
                      Prisma client singleton
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/routes.ts
                      </code>{' '}
                      Route protection rules
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/utils.ts
                      </code>{' '}
                      Utility helpers (cn, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        middleware.ts
                      </code>{' '}
                      Global auth protection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Customization Guide */}
          <section className="space-y-12 border-t border-zinc-200 pt-16 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                <Zap className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Making it yours</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">1. Clean up Routes</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-neutral-400">
                  Once you're familiar with the setup, you can remove the
                  documentation and seed files to keep your production build
                  lean.
                </p>
                <ul className="list-inside list-disc space-y-2 text-sm text-zinc-500 dark:text-neutral-500">
                  <li>
                    Delete the{' '}
                    <code className="bg-zinc-200 px-1 dark:bg-neutral-800">
                      app/docs
                    </code>{' '}
                    folder.
                  </li>
                  <li>
                    Remove{' '}
                    <code className="bg-zinc-200 px-1 dark:bg-neutral-800">
                      prisma/seed.ts
                    </code>{' '}
                    if no longer needed.
                  </li>
                  <li>
                    Update{' '}
                    <code className="bg-zinc-200 px-1 dark:bg-neutral-800">
                      lib/routes.ts
                    </code>{' '}
                    to remove public access to missing paths.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">2. Replace Home Page</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-neutral-400">
                  The current lander is designed for the template. Replace it
                  with your actual application dashboard or landing page.
                </p>
                <p className="text-sm text-zinc-500 dark:text-neutral-500">
                  Modify{' '}
                  <code className="bg-zinc-200 px-1 dark:bg-neutral-800">
                    app/page.tsx
                  </code>{' '}
                  to point to your main authenticated app logic or a custom
                  marketing site.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8 border-t border-zinc-200 pt-16 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
                <Github className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Contributors</h2>
            </div>
            <p className="text-zinc-600 dark:text-neutral-400">
              Shoutout to everyone below for contributing to this boilerplate!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/beefysalad"
                target="_blank"
                className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all hover:border-zinc-900 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/30 dark:hover:border-neutral-50 dark:hover:bg-neutral-900"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                  <Github className="size-5" />
                </div>
                <div>
                  <div className="font-bold">beefysalad</div>
                  <div className="text-xs text-zinc-500">Main Contributor</div>
                </div>
              </Link>
            </div>
          </section>

          <footer className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-12 text-center md:flex-row md:text-left dark:border-neutral-800">
            <Link
              href="https://github.com/beefysalad/next-prisma-template"
              target="_blank"
            >
              <Button className="rounded-full px-8 font-bold">
                Star on GitHub :3
              </Button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  )
}
