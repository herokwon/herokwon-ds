---
to: packages/ui/<%= category %>/src/<%= h.changeCase.pascal(componentName) %>.tsx
---
import type { <%= h.changeCase.pascal(category) %>Props } from './type';

type <%= h.changeCase.pascal(componentName) %>Props = <%= h.changeCase.pascal(category) %>Props;

export default function <%= h.changeCase.pascal(componentName) %>({}: <%= h.changeCase.pascal(componentName) %>Props) {
  return <></>;
}
