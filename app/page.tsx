'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  Database,
  Github,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'npx create-next-app -e https://github.com/beefysalad/next-prisma-template'
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-900">
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

        <div className="relative mx-auto max-w-4xl space-y-12 text-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Next Template
              <br />
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-400 bg-clip-text text-transparent dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-600">
                By Patrick
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl dark:text-neutral-400">
              Full-stack Next.js 16 starter with auth, database, type safety,
              and dark mode. Everything configured so you can build your pet
              projects right away
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-6 flex flex-col items-center gap-6 delay-300 duration-1000">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleCopy}
                className="h-12 rounded-full border-2 border-zinc-900 bg-zinc-900 px-8 font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 active:scale-95 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:hover:shadow-neutral-50/10"
              >
                {copied ? 'Copied!' : 'Get Started'}
              </button>
              <Link
                href="https://github.com/beefysalad/next-prisma-template"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex h-12 items-center gap-2 rounded-full border-2 border-zinc-200 px-8 font-bold transition-all hover:bg-zinc-100 hover:shadow-lg active:scale-95 dark:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:shadow-neutral-900/40"
                >
                  <Github className="size-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-bold tracking-wider text-zinc-400 uppercase dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500">
                <ShieldCheck className="size-3" />
                Live Auth Demo
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/register">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 rounded-full border border-zinc-200 bg-zinc-50 px-6 font-semibold transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                  >
                    Create Account
                  </Button>
                </Link>
                <div className="h-4 w-[1px] bg-zinc-200 dark:bg-neutral-800" />
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 rounded-full border border-zinc-200 bg-zinc-50 px-6 font-semibold transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-zinc-400 dark:text-neutral-500">
                Try the full registration and login flow with session
                persistence.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-1 backdrop-blur transition-all hover:border-zinc-300 dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="flex items-center gap-3 p-4">
                <Terminal className="size-5 flex-shrink-0 text-zinc-400 dark:text-neutral-500" />
                <code className="flex-1 text-left font-mono text-sm text-zinc-700 dark:text-neutral-300">
                  npx create-next-app -e
                  https://github.com/beefysalad/next-prisma-template
                </code>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 rounded-md border border-zinc-300 bg-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-all hover:bg-zinc-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                >
                  {copied ? (
                    <Check className="size-4" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Or{' '}
              <Link
                href="https://github.com/beefysalad/next-prisma-template"
                target="_blank"
                className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-300"
              >
                clone from GitHub
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-24 md:py-32 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">What's inside</h2>
            <p className="text-lg text-zinc-600 dark:text-neutral-400">
              The stack I actually use for my pet projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StackCard
              icon={<Code2 className="size-6" />}
              title="Next.js 16 App Router"
              description="Server Components, Server Actions, and React 19. The bleeding edge, but stable enough to actually use."
            />
            <StackCard
              icon={<Database className="size-6" />}
              title="Prisma + PostgreSQL"
              description="Type-safe queries, auto-generated types, and migrations that work. No more raw SQL strings."
            />
            <StackCard
              icon={<ShieldCheck className="size-6" />}
              title="Auth.js v5 (NextAuth)"
              description="Credentials, OAuth, magic links. Sessions that persist. Middleware that protects routes."
            />
            <StackCard
              icon={<Zap className="size-6" />}
              title="TanStack Query"
              description="Smart caching, background refetching, optimistic updates. Makes data fetching feel native."
            />
            <StackCard
              icon={<Terminal className="size-6" />}
              title="TypeScript + Zod"
              description="Runtime validation with Zod schemas. Compile-time safety with TypeScript. No surprises in prod."
            />
            <StackCard
              icon={<Github className="size-6" />}
              title="Tailwind CSS 4 + Dark Mode"
              description="Utility-first styling with next-themes integration. Dark mode that actually works out of the box."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 md:py-32 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Why this exists
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-neutral-400">
            <p>
              Lately I&apos;ve been in the mood to build some side projects
              using Next and every new project starts the same way: install
              Next.js, set up Prisma, configure Auth.js, add React Hook Form,
              wire up TanStack Query, get dark mode working, set up the folder
              structure that makes sense, write the auth middleware, create the
              Prisma client singleton...
            </p>
            <p>
              After doing this setup a couple of times, I finally made a
              template for me and maybe for you too! :3
            </p>
            <p>
              Clone it, change the database URL, and you're building features.
              That's it.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="https://github.com/beefysalad/next-prisma-template"
              target="_blank"
            >
              <Button
                size="lg"
                className="group h-12 gap-2 rounded-full border-2 border-zinc-900 bg-zinc-900 px-8 font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 active:scale-95 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:hover:shadow-neutral-50/10"
              >
                <Github className="size-5" />
                View on GitHub
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                variant="ghost"
                size="lg"
                className="h-12 rounded-full px-8 font-bold text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
              >
                Read the docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-24 md:py-32 dark:border-neutral-800">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Want to contribute?
          </h2>
          <p className="mb-12 text-lg text-zinc-600 dark:text-neutral-400">
            Found a bug? Have an idea? Wanna collaborate on this? Im always open
            to collaborations so open an issue or submit a PR. Just keep it
            clean and follow the existing patterns.
          </p>

          <div className="space-y-8">
            <ContributeStep
              num="1"
              title="Fork and clone the repo"
              desc="Standard GitHub workflow. You know the drill."
            />
            <ContributeStep
              num="2"
              title="Make your changes"
              desc="Create a feature branch. Keep commits atomic. Write code that doesn't suck (even though my code in here sucks :3)."
            />
            <ContributeStep
              num="3"
              title="Open a pull request"
              desc="Describe what you changed and why. I'll review it when I can (Ill probably do a LGTM right away~)."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-100 px-6 py-24 dark:border-neutral-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Contributors
          </h2>
          <p className="mb-12 text-zinc-600 dark:text-neutral-400">
            The lovely people who made this template possible.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <Contributor
              name="beefysalad"
              github="https://github.com/beefysalad"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-12 dark:border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div className="text-center text-sm text-zinc-500 md:text-left">
            <p>Built by John Patrick Ryan Mandal</p>
            <p className="mt-1 text-zinc-400 dark:text-neutral-600">
              MIT License • Use it however you want
            </p>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <Link
              href="https://github.com/beefysalad/next-prisma-template"
              className="transition-colors hover:text-zinc-900 dark:hover:text-neutral-400"
            >
              GitHub
            </Link>
            <Link
              href="/docs"
              className="transition-colors hover:text-zinc-900 dark:hover:text-neutral-400"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/beefysalad/next-prisma-template/issues"
              className="transition-colors hover:text-zinc-900 dark:hover:text-neutral-400"
            >
              Issues
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StackCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-6 backdrop-blur transition-all hover:border-zinc-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-md bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-700 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-neutral-700 dark:group-hover:text-neutral-300">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  )
}

function ContributeStep({
  num,
  title,
  desc,
}: {
  num: string
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-6">
      <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 font-mono text-sm font-bold text-zinc-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
        {num}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-zinc-600 dark:text-neutral-400">{desc}</p>
      </div>
    </div>
  )
}

function Contributor({ name, github }: { name: string; github: string }) {
  return (
    <Link
      href={github}
      target="_blank"
      className="group flex flex-col items-center gap-2"
    >
      <div className="flex size-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-lg shadow-zinc-200/50 transition-all group-hover:scale-110 group-hover:border-zinc-900 group-hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:group-hover:border-neutral-50">
        <Github className="size-8 text-zinc-400 group-hover:text-zinc-900 dark:text-neutral-500 dark:group-hover:text-neutral-100" />
      </div>
      <span className="text-sm font-bold text-zinc-600 group-hover:text-zinc-900 dark:text-neutral-400 dark:group-hover:text-neutral-100">
        {name}
      </span>
    </Link>
  )
}
