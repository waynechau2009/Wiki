# PACES wiki pilot

A responsive, dependency-free PACES wiki with page content transcribed from the supplied `PACES Wiki.docx`. Includes Home, Care Guide and FAQ, For Nurses, For CMPs, Q&A Forum, AAR / Lessons Learnt, Resources, Contacts, and Latest Updates, with shared navigation, searchable content, category filters, expandable questions, and detail dialogs.

## Run

Requires Node.js 20 or newer. No package installation is needed.

```sh
cd /workspace/Wiki
npm run dev
```

The server listens on port 3000. Set `PORT` to use a different port. `npm run check` checks JavaScript syntax.

The app is static HTML, CSS, and JavaScript. `server.js` is a small development server; it is not intended for production hosting. The static files can also be served by any static web host.

## Demo scope

- `content.js` holds the supplied page copy, eight FAQs, three demo Q&As, AAR template and lessons log, clinical evidence citations, and demo updates. Clinical footer fields that the source does not provide are labelled “Not provided”; no review or approval is implied.
- Contact cards and dialogs show fictitious names, positions, and eight-digit Hong Kong-style phone numbers as labelled placeholders. The dummy phone numbers are plain text, not dial links.
- Search includes care articles, FAQ answers, Q&A responses, resources, audience pages, contacts, and updates, with a knowledge category on each result.
- Resources retains 17 ICWM document titles and their version, issue date, and review date where stated. Effective dates are recorded separately; missing fields display “Not stated”. These are references only: the PDF files and their download links have been removed from the site. Search still finds the reference details. Project workflow and AAR entries link to the relevant wiki pages; other project files remain explicitly awaiting upload. No local policy or approved contact pathway is invented.
- “Post a new question” opens a local demo form with a Cancel option. Questions appear only in the current tab, are never saved, synced with other visitors, or sent to a CMP, and disappear on reload. No authentication, database, server-side posting, or contact messaging is implemented. Do not enter patient-identifiable information.
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
