@echo off
setlocal
cd /d "%~dp0"

echo === INICIANDO CONFIGURACAO GIT ===

:: Verifica se o Git esta instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Git nao encontrado. Por favor, instale o Git.
    pause
    exit /b
)

:: Inicializa o repositorio se nao houver
if not exist ".git" (
    git init
    echo Repositorio inicializado.
)

:: Adiciona arquivos
git add .
git commit -m "Auto-deploy: Smash & Co Website"

:: Pergunta a URL do repositorio
set /p REPO_URL="Cole aqui a URL do seu repositorio GitHub (ex: https://github.com/usuario/repo.git): "

if "%REPO_URL%"=="" (
    echo [ERRO] URL nao informada.
    pause
    exit /b
)

:: Configura o remote
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

:: Push
echo Enviando para o GitHub...
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo === SUCESSO! SEU SITE ESTA NO GITHUB ===
    echo Agora va no painel da Cloudflare Pages e conecte este repositorio.
) else (
    echo.
    echo [ERRO] Falha ao enviar para o GitHub. Verifique sua conexao e permissao.
)

pause
