@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Microwave Library Local Server
where node >nul 2>nul
if errorlevel 1 goto node_missing
node scripts\local-server.js --open
if errorlevel 1 goto startup_failed
goto end
:node_missing
echo Node.js was not found. Install Node.js and try again.
pause
goto end
:startup_failed
echo.
echo The local service could not start. See the error above.
pause
:end
