import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { resolveStateDir } from '../util.mjs';

const fixture = () => mkdtemp(path.join(os.tmpdir(), 'mratlas-state-dir-'));
const exists = file => stat(file).then(() => true, () => false);

test('a new repository uses the Mr Atlas state folder', async () => {
  const repo = await fixture();
  assert.equal(await resolveStateDir(repo), path.join(repo, '.mratlas'));
  assert.equal(await exists(path.join(repo, '.mrmak')), false);
});

test('state saved before the rename moves to the Mr Atlas folder once', async () => {
  const repo = await fixture();
  await mkdir(path.join(repo, '.mrmak'));
  await writeFile(path.join(repo, '.mrmak', 'sessions.json'), '[{"id":"kept"}]');
  const state = await resolveStateDir(repo);
  assert.equal(state, path.join(repo, '.mratlas'));
  assert.equal(await readFile(path.join(state, 'sessions.json'), 'utf8'), '[{"id":"kept"}]');
  assert.equal(await exists(path.join(repo, '.mrmak')), false);
});

test('an existing Mr Atlas state folder is never replaced by older state', async () => {
  const repo = await fixture();
  await mkdir(path.join(repo, '.mrmak'));
  await mkdir(path.join(repo, '.mratlas'));
  await writeFile(path.join(repo, '.mrmak', 'settings.json'), 'old');
  await writeFile(path.join(repo, '.mratlas', 'settings.json'), 'current');
  assert.equal(await resolveStateDir(repo), path.join(repo, '.mratlas'));
  assert.equal(await readFile(path.join(repo, '.mratlas', 'settings.json'), 'utf8'), 'current');
  assert.equal(await readFile(path.join(repo, '.mrmak', 'settings.json'), 'utf8'), 'old');
});
