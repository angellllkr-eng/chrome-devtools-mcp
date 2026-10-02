# X31 Architecture Contract

**Responsibility:** Browser/DevTools agent interface

**Repository status:** CANONICAL CAPABILITY

## Domain boundary
Owns browser/DevTools inspection, automation, debugging, and performance tooling. It does not own product-domain business logic or deployment control planes.

## Typed agent/operator contract
Agent/operator inputs must be explicit and typed at the MCP/tool boundary; outputs must identify success/failure and preserve actionable diagnostics. Side effects must be attributable to a tool invocation.

## Layer separation
Domain: browser/DevTools operations. Interface: MCP/CLI tool contracts. Shared: schemas, utilities, protocol helpers. Tests: unit plus integration/E2E around browser/tool behavior.

## Auditability
Tool invocation, target context, and consequential browser mutations must remain observable through existing diagnostics/logging and test evidence.

## Repository rule
This contract standardizes the repository boundary without creating a duplicate implementation. Existing capability is reconciled in place when this repository is canonical; legacy/source-freeze repositories remain provenance sources until reusable material is migrated and verified in its canonical destination.

## X31 invariant
**Domain → Agent/Operator Interface → Shared → Tests → Audit/Evidence**

No secret material belongs in Git. No production claim is valid without runtime evidence from the canonical deployment authority.
