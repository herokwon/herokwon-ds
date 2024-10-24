---
to: packages/<%= pkgName.replace('ds-', '') %>/package.json
---
{
  "name": "@herokwon/<%= pkgName %>",
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
  "description": "This is a <%= pkgName.replace('ds-', '') %>-package for simple design system by HeroKwon.",
  "license": "MIT",
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup"
  },
  "devDependencies": {
    "tsup": "^8.3.0",
    "typescript": "^5.6.3"
  }
}
