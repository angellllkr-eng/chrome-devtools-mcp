import assert from 'node:assert/strict';
import test from 'node:test';
import {createAgentOperatorCommand, parseAgentOperatorCommand} from '../src/agent/interface.js';

test('agent/operator command accepts the canonical boundary', () => {
  const command = createAgentOperatorCommand('browser.inspect', {url: 'https://example.com'}, 'operator');
  assert.equal(command.action, 'browser.inspect');
  assert.equal(command.input.url, 'https://example.com');
  assert.doesNotThrow(() => parseAgentOperatorCommand(command));
});

test('agent/operator command rejects malformed input', () => {
  assert.throws(() => parseAgentOperatorCommand({id: 'x', action: 'browser.inspect'}));
});
