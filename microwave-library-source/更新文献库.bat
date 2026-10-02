@echo off
chcp 65001 >nul
cd /d "%~dp0"
node scripts\update-library.js
echo.
echo 文献库更新完成。按任意键关闭。
pause >nul

