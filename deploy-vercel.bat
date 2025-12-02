@echo off
REM Vercel Deployment Script for Portfolio
REM Run this script to deploy to Vercel

echo.
echo ========================================
echo  PORTFOLIO VERCEL DEPLOYMENT
echo ========================================
echo.

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if errorlevel 1 (
    echo Installing Vercel CLI globally...
    call npm install -g vercel
    echo.
)

REM Navigate to portfolio directory
cd /d C:\Users\USER\Desktop\PROJECTS\Portfolio\portfolio-website

echo Current directory: %cd%
echo.

REM Show git status
echo Git Status:
git status
echo.

REM Login to Vercel if needed
echo Checking Vercel authentication...
vercel whoami >nul 2>&1
if errorlevel 1 (
    echo Please login to Vercel:
    call vercel login
    echo.
)

REM Deploy to Vercel
echo.
echo Starting Vercel deployment...
echo.
call vercel --prod

echo.
echo ========================================
echo  DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your portfolio is now LIVE! 🎉
echo.
echo Next steps:
echo 1. Check the URL provided above
echo 2. Test on mobile devices
echo 3. Add to LinkedIn profile
echo 4. Share with hiring managers
echo.
pause
