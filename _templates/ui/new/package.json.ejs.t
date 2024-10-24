---
to: packages/ui/<%= category %>/package.json
---
{
  "name": "@herokwon/ds-<%= category %>",
  "version": "0.0.0",
  "private": false,
  "sideEffects": false,
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "type": "module",
  "types": "dist/index.d.ts",
  "publishConfig": {
    "access": "public",
    "provenance": true
  },
  "files": [
    "dist/**/*"
  ],
  "author": {
    "name": "HeroKwon",
    "email": "contact@herokwon.dev",
    "url": "https://github.com/herokwon"
  },
  "bugs": {
    "email": "contact@herokwon.dev",
    "url": "https://github.com/herokwon/herokwon-ds/issues"
  },
  "contributors": [
    {
      "name": "HeroKwon",
      "email": "contact@herokwon.dev",
      "url": "https://github.com/herokwon"
    }
  ],
  "keywords": [
    "nextjs",
    "tailwindcss",
    "storybook",
    "design-system"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/herokwon/herokwon-ds.git"
  },
  "description": "This is a <%= category %>-package for simple design system by HeroKwon.",
  "license": "MIT",
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup"
  },
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18"
  },
  "peerDependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.14",
    "tsup": "^8.3.0",
    "typescript": "^5.6.3"
  }
}
