# John Rey & Christine Ericka — wedding invitation

Venue: Akasia Restaurant, Paringao, Bauang, La Union

Wedding date: September 28, 2026

Schedule: 10:00 AM–10:30 AM

## What is included

- `app/`, `components/`, `data/`: complete editable Next.js source, including the welcome animation, parents, Ninongs and Ninangs.
- `public/`: your portrait, social preview image, favicon and audio folder.
- `package.json` and `package-lock.json`: exact dependency setup.
- `out/`: the prebuilt static website, included in the downloaded ZIP.
- `docs/`: original brief with the latest corrections noted at the top.

No database, API keys, login, backend, or environment file is required.

## Run on Windows

1. Extract the ZIP first.
2. Install Node.js 22.13 or later if needed.
3. Open the extracted `john-rey-christine-ericka-wedding` folder in VS Code.
4. Open a terminal in the folder containing `package.json`.
5. Run:

```sh
npm ci
npm run dev
```

6. Open http://localhost:3000 in your browser.

If PowerShell blocks npm scripts, use `npm.cmd ci` and `npm.cmd run dev`, or select Command Prompt as the VS Code terminal.

Do not open `out/index.html` by double-clicking: its assets need an HTTP host. `npm run dev` is the local preview command.

## Build for hosting

```sh
npm run build
```

The complete static site is exported into `out/`. It can be deployed to static hosting. For Vercel, import the source project with the Next.js preset and the build command `npm run build`; the static export directory is `out`. The ZIP does not include node_modules; install dependencies with `npm ci`.

## Make your changes

Edit `data/wedding.ts` for the date, schedule, venue, address, Maps link, parents, principal sponsors, photographs and optional music. The countdown is set to the confirmed 10:00 AM Philippine-time start on September 28.

Set `siteUrl` to your final domain before sharing the Vercel website. This controls the absolute social-preview URL.

To add more gallery photos, place the files in `public/images/` and add entries to the `gallery` array with their paths, dimensions, captions and alt text.

The opening already includes a short original chime generated in the browser after the Open Invitation click. Continuous music is disabled until you add your own licensed `public/audio/wedding-song.mp3` and enable it in the configuration.

The complete forest-green, ivory, antique-gold, and responsive design is in `app/globals.css`. Motion supports the reduced-motion preference. The gallery uses a fullscreen dialog with keyboard navigation when multiple photos are available.

## Verification

The production static build and TypeScript checks passed. The exported page was checked for the venue spelling, photograph, map link, gallery, and absence of Our Story. Browser/device visual testing has not been performed in this environment.
