# Machive website: steering

- Read `CLAUDE.md` (stack, commands, conventions), `PRODUCT.md` (product truth) and `DESIGN.md`
  (visual system, once it exists) before any change.
- All visual/UI work uses the Impeccable skill at `.kiro/skills/impeccable/SKILL.md`. Run its setup
  (`.kiro/skills/impeccable/scripts/impeccable context`) once per session, load the reference file for
  the command named in the task, and read `reference/craft-floor.md` before any UI edit.
- Check rendered UI with `.kiro/skills/impeccable/scripts/impeccable detect --json <files>`; for
  contrast and tiny-text rules scan the running page (`detect --json http://localhost:3000`) when a
  dev server is up.
- Never invent proof: no testimonials, client logos, client names, ratings or new metrics.
- Brand name is "Machive" everywhere (never "MacHive" or "Mac Hive").
- Package manager pnpm. Before finishing: `pnpm lint` and `pnpm build` must pass.
- No git commands that change state. The orchestrator commits.
