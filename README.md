# PACES wiki pilot

A responsive, dependency-free interface prototype based on the supplied PACES dashboard draft. Includes Home, Care Guide, Q&A Forum, AAR / Lessons Learnt, Resources, and Contacts, with shared navigation, searchable sample entries, category filters, expandable questions, and detail dialogs.

## Run

Requires Node.js 20 or newer. No package installation is needed.

```sh
cd /workspace/Wiki
npm run dev
```

The server listens on port 3000. Set `PORT` to use a different port. `npm run check` checks JavaScript syntax.

The app is static HTML, CSS, and JavaScript. `server.js` is a small development server; it is not intended for production hosting. The static files can also be served by any static web host.

## Demo scope

- Clinical entries, discussion responses, AARs, and contacts are clearly marked sample content awaiting local review.
- Contact cards and dialogs show fictitious names, positions, and eight-digit Hong Kong-style phone numbers as labelled placeholders. The dummy phone numbers are plain text, not dial links.
- Search and filters operate on the sample entries in `app.js`.
- Resources lists 17 supplied ICWM PDFs with linked titles and document version, issue date, and review date where stated. Effective dates are recorded separately; missing fields display “Not stated”. Original PDFs are stored in `assets/documents/` and can also be found through wiki search. The six sample resource entries remain under “Planned pilot resources”.
- No authentication, database, patient data, posting, or contact messaging is implemented.
- The original mockup says PACES, so the interface uses that name. Branding is in `index.html`.
- The ward illustration and icons are local SVG assets. System fonts work offline, with no external font or image requests.

Keep clinical guidance under the pilot team's review before any clinical use.

## GitHub Pages demo

The site uses relative asset paths and hash navigation, so it works at the repository's GitHub Pages path without a build step.

Publish the reviewed commit to both branches:

```sh
git push origin HEAD:main HEAD:gh-pages
```

In the repository's **Settings → Pages**, select **Deploy from a branch**, choose **gh-pages** and **/ (root)**, then save. The intended demo URL is `https://waynechau2009.github.io/Wiki/`. GitHub will show the published URL and deployment status in Pages settings. Future pushes to `gh-pages` update the demo automatically.

`.nojekyll` tells Pages to serve the static files directly. No Node.js server, credentials, or environment variables are needed on GitHub Pages.
