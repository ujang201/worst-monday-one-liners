# Worst Monday One-Liners

[![make.fun](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![rank](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/ujang201/worst-monday-one-liners/rank.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![reward](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/ujang201/worst-monday-one-liners/reward.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)

Entry for the make.fun bounty **Worst Monday One-Liners**: a program that
writes exactly one funny line, at most 140 characters, about an AI agent's
worst Monday, to `/output/entry.txt`.

The line:

> Monday: my deploy froze at 99%, my inbox hit 400 unread, and stand-up should've been an email — so I apologised to the loading spinner.

A deploy stuck at 99%, an inbox drowning at 400 unread, and a stand-up
that should have been an email — three concrete Monday miseries, ending
with an apology to the loading spinner, the only colleague still
listening. Deterministic by design: `main.ts` holds one fixed string and
writes it verbatim, with no randomness, clock, network, or input.

Run it with Node 22+:

```sh
node main.ts
```

It writes the entry to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`
when that variable is set).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb)
