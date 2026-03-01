# Nexum Landing Page

Landing page for [nexum.so](https://nexum.so) — the trust layer for AI agents.

## Stack

- Next.js 16 + React 19
- Tailwind CSS 4
- Lucide React icons
- Google Sans font

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
pnpm build
pnpm start
```

## Docker

```bash
docker build -t nexum-landing .
docker run -p 3000:3000 nexum-landing
```
