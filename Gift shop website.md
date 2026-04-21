Let's build a a website for the gift shop using the /rapid-mvp skill with nextjs 


The gift shop is a stationary and wrapping gift shop. Services: 
- stationary 
- printing and photocopying
- gift wrapping 
- gift paper

The hero section will have have an image that would change depending the day of the year.
For example the 10 days leading to may 10th. The hero section will show certain Imagen with promotion for that day. Automatically after may 10 it should change to the default image or next holiday image.

The website is still static.

The main way of communication is via WhatsApp so it should be have an what'sapp integration.it uses WhatsApp business.

All the content is in Instagram, tiktol and Facebook.


It's important to show the location so people can visit the shop because they can only buy at the shop. 

In terms of style:

Colour schemes 
FFD1EA

FDD1FF

FFD1D3

Fonts most be two good combinations of sans-serif fonts.

The background must have a texture and gradients.it must

--------


Generate the prompt to generate hero images for a gift shop website called gift shop.

Aspect ratio 16:9

For promotions for the everyday in the following list:



mexico_gift_dates:
  - name_en: "Three Kings' Day"
    name_es: "Día de Reyes / Reyes Magos"
    date: "01-06"
    type: "major"
    common_gift_custom: "Children often receive toys or gifts"

  - name_en: "Children's Day"
    name_es: "Día del Niño / Día de la Niñez"
    date: "04-30"
    type: "major"
    common_gift_custom: "Small gifts, treats, outings, school celebrations"

  - name_en: "Mother's Day"
    name_es: "Día de las Madres"
    date: "05-10"
    type: "major"
    common_gift_custom: "Flowers, meals, gifts for mothers"

  - name_en: "Teacher's Day"
    name_es: "Día del Maestro"
    date: "05-15"
    type: "common"
    common_gift_custom: "Students/families may give small thank-you gifts to teachers"

  - name_en: "Father's Day"
    name_es: "Día del Padre"
    date_rule: "third Sunday of June"
    type: "major"
    common_gift_custom: "Family meals and gifts for fathers"

  - name_en: "Grandparents' Day"
    name_es: "Día de los Abuelos"
    date: "08-28"
    type: "optional"
    common_gift_custom: "Some families give gifts or organize visits/meals"

  - name_en: "Day of the Dead"
    name_es: "Día de Muertos"
    date_range: "11-01 to 11-02"
    type: "cultural"
    common_gift_custom: "Offerings for deceased loved ones rather than gifts for living people"

  - name_en: "Christmas Eve"
    name_es: "Nochebuena"
    date: "12-24"
    type: "major"
    common_gift_custom: "Some families exchange gifts"

  - name_en: "Christmas Day"
    name_es: "Navidad"
    date: "12-25"
    type: "major"
    common_gift_custom: "Gifts and family celebrations"



Social media features 

Here’s a technical draft you can reuse in an architecture doc or feature spec.

Social platform features suitable for a static Next.js website

Overview

The website will be implemented as a static Next.js application using output: 'export', which produces deployable HTML, CSS, and JavaScript files that can be hosted without a Node.js server. In this model, any integration with Facebook, Instagram, and TikTok must either work entirely in the browser or be resolved at build time. Features that require persistent server-side secrets, runtime token exchange, or webhooks are out of scope for the static version. 

The recommended feature set for a static website is therefore focused on:

public content embedding,

social sharing,

outbound profile discovery,

share-preview metadata,

and optional build-time curation of public social content. 



---

1. Social share metadata for all pages

Description

Each public page should expose metadata so that links shared on Facebook, messaging apps, and other social platforms render a rich preview card with title, description, canonical URL, and preview image.

Technical approach

In Next.js, page metadata can be defined through the metadata API. For static pages, this metadata is generated at build time and included in the exported HTML. The implementation should provide:

page title,

description,

canonical URL,

Open Graph image,

and optional Twitter/X card metadata for cross-platform consistency. 


Static-site fit

This is a strong fit for static delivery because metadata is deterministic and does not require runtime APIs.

Notes

The Open Graph image can be a fixed asset or generated as part of the build pipeline. Since the site is static, any metadata changes require a rebuild and redeploy. 


---

2. Facebook share button or share dialog

Description

Pages can include a “Share on Facebook” action that opens Facebook’s Share Dialog with the current page URL.

Technical approach

The frontend should generate the page URL and invoke Facebook’s Share Dialog in a new window or browser redirect flow. The shared object should be the public page URL, not user-generated text. Meta’s sharing documentation supports this web-based flow. 

Static-site fit

This works well on a static site because the integration is client-side and does not require private credentials for basic link sharing.

Notes

The share preview shown on Facebook depends primarily on the page’s metadata, so this feature should be implemented together with the share metadata feature above. 


---

3. Embedded Instagram posts or reels

Description

The site can display selected public Instagram content, such as campaign posts, reels, testimonials, or creator mentions, directly inside landing pages, blog articles, or case studies.

Technical approach

Instagram content should be embedded using Meta’s Instagram oEmbed capability or the embed HTML generated from that flow for public posts. Meta documents that the Instagram oEmbed endpoint returns embed HTML and basic metadata for display in another website or app. 

A practical implementation pattern is:

store curated Instagram URLs in content files or CMS data,

resolve them to embed markup either at build time or via approved embed scripts,

render them inside a reusable React component,

lazy-load the embed on viewport entry to reduce page weight.


Static-site fit

This is suitable for static sites when using public content only. If embeds are resolved at build time, updates to the referenced post are reflected only after a rebuild unless the embed script loads live content from the platform. 

Constraints

Instagram private-account content and account-level authenticated integrations are not part of the static implementation.


---

4. Embedded Facebook posts or videos

Description

The site can include public Facebook posts, videos, or page highlights as part of social proof sections, newsroom pages, or campaign microsites.

Technical approach

Meta’s oEmbed tooling supports public Facebook pages, posts, and videos and can return HTML and metadata for display in third-party sites. The implementation should use a reusable embed component that accepts a Facebook URL and renders the corresponding embed container. 

Static-site fit

This is compatible with static delivery because the embedded content is public and can be rendered from embed HTML or platform scripts in the browser. No user login is required for basic display. 

Constraints

This feature is display-only. It does not include moderation, comment syncing, or page management.


---

5. Embedded TikTok videos

Description

The site can showcase public TikTok videos in articles, campaign pages, product pages, or creator showcase sections.

Technical approach

TikTok provides two relevant approaches for static sites:

an embeddable player using an iframe-based player URL,

and an oEmbed API that converts a TikTok video URL into embed markup and returns additional video information. 


The frontend should implement a TikTok embed component that:

accepts a TikTok video URL or video ID,

renders an iframe player or approved embed HTML,

supports lazy loading,

and preserves responsive aspect ratio.


TikTok’s embed player also supports query parameters and postMessage-based interactions such as play, pause, mute, and seek, which can be used if the design requires richer player control. 

Static-site fit

This is a very good fit for a static site because the player can be rendered fully on the client using public URLs.


---

6. Embedded TikTok creator profile blocks

Description

The website can display a creator summary block showing a TikTok account overview and a selection of recent videos.

Technical approach

TikTok documents a creator profile embed that can show profile-level information and recent videos. This can be used for partner pages, ambassador programs, speaker pages, or UGC landing pages. 

Static-site fit

This works for static websites because it is based on public profile embedding rather than authenticated account access.

Constraints

This is a presentation feature only. It does not provide authenticated creator analytics or account management.


---

7. Curated social proof gallery

Description

The site can expose a curated “Social proof” or “Community highlights” section that aggregates selected public Instagram, Facebook, and TikTok content.

Technical approach

A content-driven approach is recommended:

maintain a JSON, Markdown, CMS, or headless content source listing approved social URLs,

normalize the items into a common schema,

render them through per-platform embed components,

group them by campaign, product, or tag.


For performance, only the first set of items should load on initial render; additional items should load progressively or behind a “Show more” interaction.

Static-site fit

This fits static hosting well because the gallery itself is just page content plus embeds. The curation source is controlled by the site owner, and platform content remains public.

Constraints

This is not a live moderation system. If the source list changes, the site must be rebuilt unless the list is fetched client-side from a public JSON endpoint.


---

8. Outbound “Follow us” and profile discovery links

Description

The site should include strongly visible outbound links to the brand’s Facebook, Instagram, and TikTok profiles.

Technical approach

These links should be implemented as standard anchor elements with:

accessible labels,

analytics tracking,

rel attributes appropriate for external navigation,

and optional iconography.


Static-site fit

This is fully compatible with static delivery and has no dependency on platform APIs.

Notes

This feature is simple, but it is often one of the highest-converting social integrations because it moves users directly into the brand’s native social environments.


---

9. Build-time resolution of embeds

Description

Where allowed by the platform and deployment process, public embed HTML can be resolved during the build rather than at runtime.

Technical approach

During the CI/CD build, the site can fetch oEmbed responses for approved public URLs and persist the returned HTML in generated page data. This reduces client-side work and allows better control over page layout.

Static-site fit

This is valid for a static architecture because the fetch occurs at build time, not at request time. However, it requires that any necessary app credentials or tokens remain in the build environment and never ship to the browser. Static export itself does not provide runtime API routes after deployment. 

Constraints

Build-time embedding is best for curated content. It is not suitable for user-submitted or fast-changing content unless rebuild frequency is high.


---

Non-goals for the static version

The following features should be explicitly excluded from the static-only implementation:

Facebook Login,

TikTok Login,

content publishing to Instagram or TikTok,

account-level analytics dashboards,

webhook processing,

private-media access,

server-side token refresh flows.


These require runtime backend capabilities or serverless functions for secure token handling and API callbacks. Static export produces static assets only and does not support conventional runtime API routes. 


---

Recommended implementation pattern

The recommended architecture for the static website is:

Next.js static export for page generation and deployment, using output: 'export'. 

Metadata API for social preview tags on every indexable page. 

Reusable embed components for Facebook, Instagram, and TikTok.

Lazy loading for all third-party embeds to protect performance.

Content-driven configuration for which posts, videos, or profiles appear on the site.

Build-time embed resolution where appropriate, with no secrets exposed to the browser. 



---

Suggested concise version for a spec

You could use this shorter paragraph in a technical spec:

> The static Next.js website will support social integrations that are compatible with build-time or browser-only execution. These include Open Graph share metadata, Facebook share actions, public Instagram embeds, public Facebook post/video embeds, TikTok video embeds, TikTok creator profile embeds, and curated social proof galleries. The application will use reusable client-side embed components, lazy loading, and content-driven configuration for approved social URLs. Features requiring runtime secret handling, token exchange, webhooks, authenticated account access, or publishing workflows are excluded from the static version because the site is deployed as a static export without runtime API routes. 



I can also turn this into a cleaner ADR, requirements list, or implementation checklist.