# Agent Repository Contract — Chrome DevTools MCP

**Status:** COMPONENT / CANONICAL UPSTREAM-SOURCED MODULE
**Domain:** Browser and Chrome DevTools inspection/automation for agent clients.
**Boundary:** This module owns browser tooling, DevTools protocol interaction, automation and diagnostics. It does not own portfolio business logic, billing, deployment governance or owner approval.

## Typed agent interface
The module exposes MCP tools and CLI operations. Treat each tool's schema as the public agent contract. Inputs must be validated before browser side effects; outputs must identify success/failure and relevant browser state.

Recommended internal boundary:
- `domain/`: browser diagnostics, navigation, emulation and performance rules.
- `agent/`: MCP tool schemas/adapters and capability registry.
- `shared/`: typed errors, result envelopes and validation.
- `tests/`: tool/unit/integration/E2E coverage.

Existing upstream layout is preserved until a behavior-preserving migration is verified.

## Auditability
Record tool invocation class, target page/context, outcome and error class where operational logging is enabled. Never persist browser secrets or page-sensitive payloads unnecessarily.

## Verification
Required gates: type-check, unit tests, MCP integration tests and browser smoke/E2E for changed capabilities.

**Deployment authority:** repository/package release process; not the estate control plane.
**Evidence:** repository commit + CI/test output. Live browser state must be separately verified.
