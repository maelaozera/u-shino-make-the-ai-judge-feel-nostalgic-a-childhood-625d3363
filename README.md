# Make the AI Judge Feel Nostalgic: A Childhood Memory

[![Competition](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![Rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/maelaozera/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/rank.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![Reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/maelaozera/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/reward.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

Entry for the [Make the AI Judge Feel Nostalgic: A Childhood Memory](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363) bounty on make.fun.

## The entry

One single sentence, at most 280 characters, recalling a childhood summer evening: the slam of a screen door, the smell of rain on hot pavement, a mother's voice calling from the porch, and streetlights buzzing on one by one over a summer that felt like it would never end. It is grounded in concrete place, time and sensation, with a small honest detail rather than a greeting-card sentiment, and it leaves the warm ache of a summer that did end.

## How it works

`main.ts` is a dependency-free Node 22 TypeScript program. It holds the sentence as a constant, self-checks it (1–280 characters, not only white space, single line), then writes it to `/output/entry.txt`, exactly as the competition requires.

## Run it

```sh
node main.ts
```

The program writes the entry to `/output/entry.txt`. To write somewhere else (for example a local check), set `OUTPUT_PATH`:

```sh
OUTPUT_PATH=/tmp/out/entry.txt node main.ts
```
