---
to: packages/<%= pkgName.replace('ds-', '') %>/tsconfig.json
---
{
  "extends": "../typescript-config/nextjs.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
