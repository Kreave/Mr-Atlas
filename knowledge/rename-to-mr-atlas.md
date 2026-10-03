# Rename from Mr. Mak to Mr Atlas

The app, installer, launcher, documentation, skills and code now say Mr Atlas.
Some old names were kept on purpose. Do not "finish" the rename on these without
asking the owner.

## Kept on purpose

- **`LICENSE`, the `authors` line in `src-tauri/Cargo.toml` and
  `THIRD_PARTY_NOTICES.md`.** They name "Mr. Mak Workspace contributors" and
  describe media supplied by the original creator. An MIT copyright notice has to
  stay intact.
- **The My Dream Game sample** (`workspace/2026-09-15_my-dream-game/`,
  `projects/my-dream-game/`). In it, Mr. Mak is the game's hero and "Mr. Mak 64"
  is the game's title. Only its structural names changed, such as
  `data-atlas-report`, so the shared report styles still apply.
- **`CHANGELOG.md` history.** Older entries describe releases under the old name.
- **GitHub links to `witnesstodark/mr-mak-workspace`** (releases, security
  advisories, update guide). They point at the upstream project. Change them when
  Mr Atlas has its own release and security-reporting location.
- **The Mr Atlas card and project README**, which say Mr Atlas was rebuilt from
  Mr. Mak.

## Compatibility with existing installs

- Local state moved from `.mrmak/` to `.mratlas/`. `resolveStateDir` in
  `desktop/service/util.mjs` moves the old folder once, or keeps using it in place
  if it is locked. `.gitignore` lists both folders. Never commit either.
- Codex history matching accepts the old `mrmak_chat_` owner prefix as well as
  `mratlas_chat_`.
- The app identifier is now `com.mratlas.workspace`, so Windows treats the new app
  as a separate install. Its saved repository folder, Win-key setting and webview
  data start empty, and the old Mr. Mak install stays until it is uninstalled.

## Name mapping

| Old | New |
| --- | --- |
| `Mr. Mak` | `Mr Atlas` |
| `mak` in CSS, data attributes, classes and components | `atlas` |
| `mrmak`, `MRMAK_*` | `mratlas`, `MRATLAS_*` |

`data-atlas-theme` (an author's opt-out) and `data-mratlas-theme` (the theme the
app applies) are different attributes. Keep them apart.
