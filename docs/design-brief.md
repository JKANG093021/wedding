# Current decisions — September 14, 2026

The venue is AKASIA RESTAURANT. The confirmed date is September 28, 2026, the schedule is 10:00 AM–10:30 AM, and the address is Paringao, Bauang, La Union. Our Story has been removed at the couple’s request. Keep the existing gallery and scroll animation. The cover now opens into an approximately five-second romantic welcome with an original click-triggered chime before revealing the invitation. The invitation includes the bride’s and groom’s parents plus the confirmed Ninongs and Ninangs. These decisions supersede the original brief below where they differ.

---

Build a premium, elegant, cinematic wedding invitation website for:

Groom: John Rey
Bride: Christine Ericka
Venue: AKASIA RESTAURANT

This is ONLY a wedding invitation website.

Do NOT add:

- database
- login system
- admin dashboard
- Supabase
- Firebase
- authentication
- API
- backend
- RSVP database
- unnecessary server-side features

The website should be lightweight, fast, visually premium, and deployable directly to Vercel.

# TECHNOLOGY

Use:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Motion / Framer Motion-style animation library
- Next.js Image
- Static frontend only
- Vercel deployment

Use Server Components wherever possible.

Only use client-side components when animation or interaction requires them.

The website must work perfectly when deployed on Vercel.

---

# MAIN DESIGN GOAL

Create a wedding invitation that looks professionally designed by a high-end wedding stationery designer.

It must NOT look AI-generated.

Avoid the common AI-generated website appearance such as:

- excessive rounded cards
- glowing gradients
- glassmorphism everywhere
- generic landing-page sections
- unnecessary icons
- SaaS-style layouts
- excessive animations
- random floating shapes
- generic stock UI
- huge buttons
- repetitive card grids

The website should instead feel:

- luxurious
- romantic
- timeless
- intimate
- cinematic
- editorial
- elegant
- sophisticated
- custom-designed specifically for John Rey and Christine Ericka

Think of a premium printed wedding invitation transformed into a digital experience.

---

# COLOR PALETTE

Use a refined wedding palette.

Main background:
Warm Ivory / Soft Cream

Secondary tones:
Champagne
Soft Beige
Muted Gold

Text:
Deep Charcoal

Optional accent:
Muted Sage Green or Dusty Rose

Gold must be subtle.

Avoid bright yellow gold.

The color palette should feel natural and expensive.

---

# TYPOGRAPHY

Typography is one of the most important elements of the entire website.

Use:

Elegant serif font:

- John Rey
- Christine Ericka
- section titles
- meaningful statements

Clean sophisticated sans-serif:

- dates
- venue
- supporting information
- navigation

Optional script font:
Use only sparingly for a small decorative phrase.

Do not use script fonts for large amounts of text.

The names:

John Rey
&
Christine Ericka

should be the strongest visual typography on the page.

---

# CINEMATIC OPENING EXPERIENCE

The first thing guests see must be a beautiful fullscreen opening animation.

Do NOT immediately show the normal website.

Create a premium invitation-opening experience.

## Initial Screen

Use a fullscreen warm ivory, cream, or elegant dark background.

In the center, slowly reveal a refined wedding monogram:

J & C

Animate it subtly.

Possible animation:

- very slow fade
- subtle letter spacing
- gentle scale from approximately 96% to 100%
- fine decorative line appearing underneath

After the monogram, reveal:

YOU ARE INVITED

Then:

THE WEDDING OF

John Rey
&
Christine Ericka

Below their names show the wedding date placeholder:

[WEDDING DATE]

Then show:

AKASIA RESTAURANT

Everything must appear slowly and intentionally.

Do not animate every text element at the same time.

Create timing that feels cinematic.

---

# OPEN INVITATION BUTTON

After the initial animation, reveal:

Open Invitation

The button must NOT look like a normal corporate CTA button.

Use something elegant such as:

OPEN INVITATION
───────────────

or a thin refined border.

On hover:

- subtle opacity change
- slight letter-spacing change
- very gentle movement

No large rounded button.

---

# INVITATION OPENING ANIMATION

When the guest clicks "Open Invitation", create a premium reveal.

Preferred concept:

Two elegant invitation-paper panels meet at the middle of the screen.

When Open Invitation is clicked:

- left panel slowly moves left
- right panel slowly moves right
- the main wedding hero appears underneath
- subtle fade and depth transition
- animation should feel like opening a luxury printed invitation

Alternative:

Create an elegant envelope-inspired reveal.

However:

DO NOT create a cartoon envelope.

DO NOT use fake 3D animation.

DO NOT use excessive shadows.

DO NOT create cheesy wedding animations.

Keep it sophisticated.

The transition should feel cinematic and around 1–2 seconds.

Respect prefers-reduced-motion.

---

# OPTIONAL BACKGROUND MUSIC

Allow optional wedding background music.

Do NOT autoplay music immediately when the page loads.

Browsers may block autoplay anyway.

Instead:

When the guest clicks:

Open Invitation

the interaction may begin the music.

Add a very small, elegant music control afterward.

Example:

♪ Music

or a minimal music icon.

The guest must be able to turn music off.

Do not make the music control visually distracting.

Place the audio file inside:

/public/audio/

Use a placeholder audio filename until the real wedding song is added.

---

# MAIN HERO

After opening the invitation, reveal the main hero section.

Use one beautiful photograph of John Rey and Christine Ericka as the primary visual.

Layout example:

Small text:
TOGETHER WITH THEIR FAMILIES

Large typography:

John Rey

&

Christine Ericka

Supporting text:

REQUEST THE HONOR OF YOUR PRESENCE
AS THEY CELEBRATE THEIR WEDDING

Then:

[WEDDING DATE]

AKASIA RESTAURANT

Use subtle scroll indicators.

The hero should feel like the first page of a premium wedding magazine.

---

# PHOTOGRAPHY STYLE

Wedding photographs must dominate the visual experience.

Do not put photographs inside excessive cards.

Use:

- full-screen images
- editorial cropping
- asymmetrical layouts
- generous whitespace
- large vertical photographs
- occasional overlapping editorial composition

Never distort photographs.

Always maintain original aspect ratios.

Use Next.js Image.

Do not apply heavy filters.

Photos should remain natural.

Subtle treatment is acceptable for readability.

---

# INVITATION MESSAGE

After the hero, create a clean invitation section.

Example:

With joyful hearts and together with our families,

we,

JOHN REY
&
CHRISTINE ERICKA

invite you to share in the celebration of our wedding.

Use beautiful spacing.

This should resemble printed wedding stationery rather than a webpage section.

---

# WEDDING DETAILS

Create an elegant wedding details section.

Display:

THE WEDDING

[WEDDING DATE]

[CEREMONY TIME]

AKASIA RESTAURANT

[ADDRESS PLACEHOLDER]

Include:

View Location

This button should link to the Google Maps URL that will be supplied later.

Do not invent the exact restaurant address.

Use a placeholder until the correct location is provided.

The layout should use typography and thin decorative lines instead of cards.

---

# COUNTDOWN

Include an elegant wedding countdown.

Show:

DAYS
HOURS
MINUTES
SECONDS

Use:

large serif numbers

with small supporting labels.

Do NOT put every number inside glowing or rounded boxes.

Keep the countdown minimal.

Target wedding date:

[WEDDING DATE]

Use a single configuration variable for the wedding date so it can easily be changed later.

Example:

const weddingDate = "YYYY-MM-DDTHH\:mm\:ss";

When the wedding date arrives, replace the countdown with:

Today is the day.

After the wedding:

John Rey & Christine Ericka
are officially married.

---

# OUR STORY

Create a romantic "Our Story" section.

Do not invent their story.

Use placeholders such as:

[HOW WE MET]

[OUR FIRST DATE]

[THE PROPOSAL]

Create a sophisticated editorial layout combining:

- photographs
- short text
- dates
- whitespace

Do NOT create repetitive cards.

On desktop, alternate image and text placement.

On mobile, stack naturally.

---

# PHOTO GALLERY

Create an elegant gallery for John Rey and Christine Ericka.

Use an editorial masonry-inspired layout.

The gallery should have:

- vertical portraits
- landscape photos
- different image sizes
- intentional spacing

Avoid making every image exactly the same size.

Clicking a photo should open a clean fullscreen lightbox.

Support swipe/navigation on mobile if practical.

Use Next.js Image.

Optimize performance.

---

# DRESS CODE

Add an elegant Dress Code section.

Title:

ATTIRE

Placeholder:

[FORMAL / SEMI-FORMAL / SPECIFIED ATTIRE]

Show optional elegant color circles for the wedding color palette.

Do not make them look like ecommerce color selectors.

Include placeholder text:

We kindly encourage our guests to dress in the following colors.

Allow the final colors to be easily changed in one configuration file.

---

# WEDDING ENTOURAGE

Create an optional entourage section.

Possible categories:

Parents of the Groom
Parents of the Bride
Principal Sponsors
Best Man
Maid of Honor
Groomsmen
Bridesmaids

Do not invent any names.

Use placeholders.

The names should be displayed using elegant typography and spacing.

Avoid putting every person inside individual cards.

---

# GENTLE REMINDERS

Add a minimal section for wedding reminders.

Examples:

Please arrive 30 minutes before the ceremony.

We kindly request that phones remain silent during the ceremony.

Please enjoy the celebration and take plenty of photos after the ceremony.

Use placeholders if the couple has not confirmed the final reminders.

Do not invent wedding policies.

---

# OPTIONAL RSVP SECTION

Since there is NO database, keep RSVP simple.

If RSVP is needed, provide one of these options:

Option 1:
Button linking to Messenger.

Option 2:
Button linking to Facebook.

Option 3:
Button linking to a Google Form.

Option 4:
Button linking to a phone number.

Use placeholder:

[RSVP LINK]

Do NOT build a database or custom RSVP backend.

Display:

Kindly RSVP on or before
[RSVP DEADLINE]

RSVP

---

# FINAL SECTION

Create an emotional final section.

Use a beautiful full-width photograph.

Overlay or place beneath it:

WE CAN'T WAIT
TO CELEBRATE WITH YOU

John Rey
&
Christine Ericka

[WEDDING DATE]

AKASIA RESTAURANT

Finish with a subtle:

J & C

monogram.

---

# NAVIGATION

Use extremely minimal navigation.

Possible links:

Home
Story
Details
Gallery

Optional:
RSVP

Desktop navigation should be refined and thin.

Mobile navigation should be simple.

Do NOT use a large corporate navigation bar.

---

# SCROLL EXPERIENCE

Create smooth, sophisticated scrolling.

As guests scroll:

- photographs may gently reveal
- text may fade upward subtly
- fine divider lines may expand
- section headings may appear slowly

Do NOT animate every paragraph.

Not everything needs an entrance animation.

Some content should simply remain static.

This restraint is important to create a premium appearance.

---

# MOBILE-FIRST DESIGN

Mobile experience is extremely important because most guests will open the invitation through Messenger, Facebook, SMS, or another phone app.

Perfect the site for:

320px
360px
375px
390px
414px
430px

Requirements:

- no horizontal scrolling
- readable typography
- correct photo cropping
- large enough touch targets
- smooth opening animation
- no overlapping text
- good spacing
- optimized photographs
- smooth performance
- no animation lag

Desktop should enhance the experience without changing the overall visual identity.

---

# PERFORMANCE

Optimize aggressively.

Use:

- Next.js Image
- AVIF/WebP where appropriate
- correct image sizes
- responsive srcsets
- lazy loading below the fold
- optimized Google fonts or next/font
- minimal JavaScript
- minimal animation libraries
- static rendering
- no unnecessary API requests

Keep the initial invitation experience fast even on mobile data.

---

# SOCIAL MEDIA PREVIEW

Configure Open Graph metadata.

When the wedding website is shared through Facebook Messenger or social media, it should show:

A beautiful photo of John Rey and Christine Ericka.

Title:

John Rey & Christine Ericka

Description:

You're invited to celebrate our wedding at AKASIA RESTAURANT.

Use:

/public/images/social-preview\.jpg

as the social sharing image placeholder.

---

# FAVICON

Create a minimal monogram favicon using:

J C

or

J & C

Keep it elegant and simple.

---

# WEBSITE CONTENT CONFIGURATION

Do not scatter important wedding information throughout the code.

Create one configuration file such as:

data/wedding.ts

Example structure:

export const wedding = {
groom: "John Rey",
bride: "Christine Ericka",
initials: "J & C",
date: "",
ceremonyTime: "",
venue: "AKASIA RESTAURANT",
venueAddress: "",
googleMapsUrl: "",
rsvpDeadline: "",
rsvpUrl: "",
};

Use this configuration throughout the website.

This will make future editing much easier.

---

# PROJECT STRUCTURE

Use something similar to:

app/
layout.tsx
page.tsx

components/
OpeningInvitation.tsx
Hero.tsx
InvitationMessage.tsx
Countdown.tsx
WeddingDetails.tsx
OurStory.tsx
Gallery.tsx
DressCode.tsx
Entourage.tsx
Reminders.tsx
RSVP.tsx
FinalMessage.tsx
MusicControl.tsx

data/
wedding.ts

public/
images/
audio/

Do not create one massive component.

---

# IMPORTANT

Do NOT invent missing wedding information.

Known information:

Groom:
John Rey

Bride:
Christine Ericka

Venue:
AKASIA RESTAURANT

Unknown information must remain clearly marked as placeholders, including:

- exact wedding date
- ceremony time
- exact venue address
- Google Maps location
- entourage names
- dress code
- wedding story
- RSVP details
- wedding music
- wedding photographs

---

# MOST IMPORTANT VISUAL RULE

The website must NEVER look like a generic AI-generated landing page.

When designing each section, think:

luxury wedding stationery
\+
editorial wedding photography
\+
premium fashion magazine
\+
subtle cinematic motion.

Prioritize:

typography
photography
spacing
composition
animation timing

over decorative effects.

Every visual element should have a reason for existing.

Less decoration, better composition.

---

# DEVELOPMENT PHASE 1

Do NOT build the entire website at once.

Start with Phase 1 only.

Build:

1. Next.js project structure
2. Tailwind setup
3. Wedding configuration file
4. Global typography
5. Color system
6. Fullscreen welcome animation
7. J & C monogram
8. John Rey & Christine Ericka opening typography
9. Open Invitation interaction
10. Premium invitation-opening transition
11. Main hero section
12. Minimal navigation
13. Mobile responsiveness
14. Desktop responsiveness
15. Optional music architecture

Make Phase 1 look fully polished and premium before proceeding.

Stop after Phase 1 and allow the design to be reviewed before building the next sections.
