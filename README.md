# John Rey & Christine Ericka — Wedding invitation

Premium digital invitation with a cinematic opening cover, five-second romantic welcome and original chime, typography-led invitation, framed couple portrait, wedding details, families and principal sponsors, Philippine-time countdown, editorial gallery, fine ring and botanical ornaments, minimal navigation, and a dark-green closing cover.

## Local setup

Node.js 22 or later:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production validation: `npm run build`. Next.js exports the complete static frontend to `out/`. No database, API, authentication, backend, environment variables or accounts are needed by the invitation.

## Vercel

Import this repository into Vercel. Select Next.js, use `npm run build`, and retain the framework defaults. The `output: "export"` configuration produces static files. If an output directory must be set manually, select `out`. Set the final production URL in `data/wedding.ts` before publishing to guests.

## Edit wedding information

All editable wedding information is in `data/wedding.ts`. The names, September 28, 2026 wedding date, 10:00 AM–10:30 AM schedule, Akasia Restaurant, Paringao/Bauang/La Union address, Google Maps link, both sets of parents, principal sponsors, and supplied portrait are confirmed. The countdown targets the confirmed 10:00 AM start in the Philippines. Our Story remains removed at the couple’s request. The gallery uses editorial crops of the supplied portrait; add more photographs whenever they are available.

- Date and time: enter a timezone-qualified ISO `date`; the printed date is generated automatically, and `ceremonyTime` controls the displayed schedule. `dateLabel` is an optional display override.
- Photo: add `public/images/couple.webp`, then set `heroPhoto.src`, original width/height, alt text and focal point. The image uses Next.js Image; static export cannot use the Next.js image-optimization server, so provide a compressed WebP/AVIF. The hero displays the full portrait in its original proportions, without cropping or filters.
- Social preview: add the real `public/images/social-preview.jpg` and set `socialImage`. No nonexistent image is advertised to social crawlers.
- Opening sound: a quiet original five-second chime is synthesized by the browser only after a guest chooses Open Invitation. Optional continuous music remains disabled; add a licensed `public/audio/wedding-song.mp3` and enable `music.enabled` if it is needed later.
- Theme: the forest-green, warm ivory, antique-gold, paper-texture, and responsive layout styles live in `app/globals.css`. Bodoni Moda, Cormorant Garamond, and Manrope are bundled locally and do not require Google requests.
- Botanical art: `public/images/botanical-corner.webp` is a transparent antique-gold line illustration created for this invitation and used as a restrained corner accent.

## Scope and accessibility

Invitation, Details, Sponsors and Gallery navigation targets are active. Scroll reveals enhance static content once the opening finishes, run once, and respect reduced motion. Add images to `wedding.gallery` to expand the editorial gallery; fullscreen viewing supports Escape, keyboard navigation and swipes. Previous/Next text controls appear when more than one real photograph is configured. The countdown changes to “Today is the day.” at Philippine midnight on September 28, and the married message at Philippine midnight on September 29. The welcome sequence shortens for guests who prefer reduced motion, locks background interaction, and moves keyboard focus to the invitation when finished. A non-JavaScript fallback shows the confirmed invitation details.

## Review status

Production static export and TypeScript checks are run before delivery. Review the opening and chime on your phone before sharing with guests. Countdown day-boundary and timezone behavior is verified with deterministic checks. The supplied portrait is used without face editing, and the venue spelling is Akasia throughout.

## Download package

See `START-HERE.md` for Windows setup and the included static export. The original supplied portrait is preserved; no face edits or new filters were applied. This revision uses Akasia Restaurant throughout the invitation and social metadata.
