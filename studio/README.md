# Genova Web — photo & video Studio

This is where photos and videos for the website are uploaded. It's a Sanity
Studio, deployed on its own at **https://genova-web.sanity.studio** — the
website reads from it and shows a labeled placeholder in any empty slot.

## Uploading photos

1. Open https://genova-web.sanity.studio and sign in.
2. Click **Homepage photos & videos**.
3. Pick a tab (Hero, Work carousel, Services, Founder, Before / after), drag in
   the file, and click **Publish**.
4. The live site picks it up within about a minute — no redeploy needed.

Each field's description says exactly what to shoot or screenshot.

## One-time setup (done once, by Claude or a developer)

Install and deploy from a folder **outside OneDrive** (OneDrive breaks
`node_modules`):

```powershell
robocopy studio C:\Users\eljay\genova-studio /E
cd C:\Users\eljay\genova-studio
npm install
$env:SANITY_STUDIO_PROJECT_ID = "<project id>"
npx sanity deploy
```

Then on the website (Vercel project env vars, all environments):

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = the project id
- `NEXT_PUBLIC_SANITY_DATASET` = `production`

The dataset must be **public** (the default) — the site reads it without a token.
