import {randomUUID} from 'node:crypto';

export type AgentOperatorCommand = {
  id: string;
  action: string;
  input: Record<string, unknown>;
  context?: Record<string, unknown>;
  requested_by?: string;
  evidence_required?: boolean;
};

export function parseAgentOperatorCommand(value: unknown): AgentOperatorCommand {
  if (!value || typeof value !== 'object') throw new TypeError('command must be an object');
  const command = value as Record<string, unknown>;
  if (typeof command.id !== 'string' || !command.id) throw new TypeError('command.id is required');
  if (typeof command.action !== 'string' || !command.action) throw new TypeError('command.action is required');
  if (!command.input || typeof command.input !== 'object' || Array.isArray(command.input)) {
    throw new TypeError('command.input must be an object');
  }
  return command as unknown as AgentOperatorCommand;
}

export function createAgentOperatorCommand(action: string, input: Record<string, unknown>, requestedBy?: string): AgentOperatorCommand {
  return {id: randomUUID(), action, input, ...(requestedBy ? {requested_by: requestedBy} : {})};
}
