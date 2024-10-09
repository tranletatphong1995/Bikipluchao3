@echo off
echo Dang khoi dong ung dung Bi Kip Luc Hao...

:: Chuyen den thu muc chua ung dung
cd /d "%~dp0"

:: Kiem tra xem Node.js da duoc cai dat chua
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Khong tim thay Node.js. Vui long cai dat Node.js va thu lai.
    pause
    exit /b 1
)

:: Kiem tra va cai dat cac goi phu thuoc neu can
if not exist node_modules (
    echo Dang cai dat cac goi phu thuoc...
    call npm install
    if %errorlevel% neq 0 (
        echo Loi khi cai dat cac goi phu thuoc. Vui long kiem tra ket noi mang va thu lai.
        pause
        exit /b 1
    )
)

:: Chay ung dung va mo trinh duyet
echo Dang khoi dong may chu phat trien...
start /B cmd /c npm run dev
timeout /t 5 /nobreak
explorer "http://localhost:5173"

:: Neu may chu dung bat thuong, dung lai de nguoi dung co the doc thong bao loi
if %errorlevel% neq 0 (
    echo May chu phat trien da dung bat thuong. Vui long kiem tra loi va thu lai.
    pause
)