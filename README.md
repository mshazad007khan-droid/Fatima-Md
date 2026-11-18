# Hareem Fatima MD Bot — Railway-ready package

## Railway deployment

1. Upload this project to a **private** GitHub repository (do not upload `.env`).
2. In Railway, create a new project → Deploy from GitHub Repo → select this repository.
3. Open the Railway service → Variables and add the variables below.
4. Railway will build with Nixpacks and run `npm start` automatically.
5. Open the generated Railway public domain. The pair page is served at `/`.
6. Use the pair page to request a WhatsApp pairing code and complete pairing on your own WhatsApp account.

## Required Railway Variables

- `GITHUB_TOKEN`: a **new** GitHub token. The token previously embedded in the source ZIP must be revoked immediately. Give the new token access only to the session repository (Contents: Read and write).
- `GITHUB_REPO`: `github-username/session-repository` (create a separate private repository for WhatsApp session data).
- `GITHUB_BRANCH`: `main` (or the branch you created).
- `OWNER_NUMBER`: your WhatsApp number with country code, digits only, e.g. `923001234567`.
- `OWNER_NAME`: your display name.

## Optional Variables

- `BOT_NAME` (default: Hareem Fatima MD Bot)
- `PREFIX` (default: `.`)
- `MODE` (default: `public`)
- `SESSION_ID`, `MONGODB_URI`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`

`PORT` is provided automatically by Railway. Do not set it manually unless you have a specific reason.

## Important security notes

- Never commit `.env`, GitHub tokens, or WhatsApp session credentials.
- Keep the session repository private. WhatsApp credentials are sensitive account access data.
- Do not share your Railway public URL's administrative endpoints with strangers.
- Railway's local filesystem is ephemeral; this bot's GitHub session storage is intended to preserve session credentials across redeploys.

## Local run

```bash
npm install
cp .env.example .env
# Fill in the required values in .env
npm start
```

This package is prepared for Railway, but WhatsApp pairing and external API integrations still need to be tested with your own credentials after deployment.
