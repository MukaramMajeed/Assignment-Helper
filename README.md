# Assignment Helper

A server-rendered website for university assignment guidance, research feedback, programming support, exam preparation, similarity report review, and editing.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To run a production build:

```sh
npm run build
npm start
```

The Next.js App Router renders pages at request time through the root layout. Deploy with a Next.js-compatible host or a Node.js server. GitHub Pages only serves static files.

## Update the content

Edit `lib/content.js` for service details, subject listings, FAQs, and outbound contact links. The site links directly to WhatsApp and Instagram. Similarity review covers reports supplied by students.
