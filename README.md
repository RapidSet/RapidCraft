# rapidcraft

Enterprise-first JSON blueprint scaffolding CLI for RapidKit.

![rapidcraft logo](https://raw.githubusercontent.com/RapidSet/RapidCraft/main/rapidcraft.svg)

`rapidcraft` scaffolds JSON blueprint manifests from curated presets.

## Quick Start

Run directly with your package runner:

```bash
npx rapidcraft@latest list-presets
npx rapidcraft@latest init my-app --preset enterprise-dashboard
```

or:

```bash
pnpm dlx rapidcraft@latest init my-app --preset operations-console
```

## Commands

- `rapidcraft list-presets`
  Lists all available presets from the packaged contracts index.

- `rapidcraft init <project-name> [options]`
  Creates a blueprint folder for the selected preset.

## Options

- `--preset <id>`
  Preset id to scaffold. Default: `enterprise-dashboard`

- `--output <path>`
  Parent directory for the generated project. Default: current working directory

- `--deployment <target>`
  Deployment target to record in the blueprint (must be one of the preset-supported options)

- `--skip-deployment`
  Records no deployment target and skips the deployment prompt

- `--allow-community`
  Allows presets marked as community source

- `--help`
  Shows command help

## Presets

- `enterprise-dashboard`
- `operations-console`

Use `rapidcraft list-presets` to view the current packaged set.

## What Gets Generated

- Presets scaffold JSON blueprint manifests only.
- Generated projects are intended for AI/MCP-driven implementation workflows.
- No React application code is scaffolded by default.
- Blueprint manifests record deployment target selection for downstream materialization.
- Container-based targets record a required multi-stage Docker build strategy.

## Requirements

- Node.js `>=20.19.0` or `>=22.12.0`

## Source

- Repository: https://github.com/RapidSet/RapidCraft
- Issues: https://github.com/RapidSet/RapidCraft/issues
