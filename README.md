# Twodesk website

The public website for Twodesk and its apps. It hosts the pages that Google
Play asks for when publishing an app: a developer website, a privacy policy, a
data deletion page and a support contact.

Built with Next.js (App Router) and Tailwind CSS. Every page is static.

## Pages

| Path | Use in Play Console |
| --- | --- |
| `/` | Developer website (account details, store listing website) |
| `/pomee` | App page, optional store listing website |
| `/pomee/privacy-policy` | App content > Privacy policy URL |
| `/pomee/data-deletion` | Data safety > optional "delete data" URL |
| `/contact` | Support page, lists the contact email |
| `/privacy-policy` | Privacy policy for the website itself |
| `/terms` | Terms of use |

## Before publishing

Edit `src/lib/site.ts`:

- `email`: a real support inbox. It must match the contact email in Play
  Console.
- `url`: the domain the site is deployed to, or set `NEXT_PUBLIC_SITE_URL`.
- `pomee.live`: set to `true` once the app is on Google Play, so the button
  links to the listing.

The developer name in the policies ("Twodesk") must match the public developer
name shown on Google Play.

To verify the site in Google Search Console (needed for organization developer
accounts), set `GOOGLE_SITE_VERIFICATION` to the token from the HTML tag
method and redeploy.

## Development

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm lint
pnpm build
```
