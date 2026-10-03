@echo off
setlocal
set "MRATLAS_LAUNCH_ROOT=%~dp0"
if exist "%LOCALAPPDATA%\Mr Atlas Workspace\mratlas-workspace.exe" (
  start "" "%LOCALAPPDATA%\Mr Atlas Workspace\mratlas-workspace.exe" --repo "%MRATLAS_LAUNCH_ROOT%."
  exit /b 0
)
if exist "%MRATLAS_LAUNCH_ROOT%src-tauri\target\release\mratlas-workspace.exe" (
  start "" "%MRATLAS_LAUNCH_ROOT%src-tauri\target\release\mratlas-workspace.exe" --repo "%MRATLAS_LAUNCH_ROOT%."
  exit /b 0
)
echo Install Mr Atlas Workspace from this project's GitHub Releases.
echo Or build with: powershell -NoProfile -ExecutionPolicy Bypass -File Setup.ps1 -Mode Desktop
echo See docs\getting-started.md for agent-guided setup.
pause
