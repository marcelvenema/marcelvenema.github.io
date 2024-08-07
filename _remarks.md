
- Code in Hugo template (theme)
- Can the summary in the post-card be .Summary instead of a page parameter? With summaryLength in the site configuration or <!--more--> in the content I can set the number of words. I do not prefer to set the summary and slug parameters in each page.
- Can gallery images stored in the page bundles of the current post instead of the /static/images folder? I like my content bundled together.
- Can slug not be a front matter parameter but calculated from the page bundle folder or markdown filename? 


- The gallery of https://marcel-venema.netlify.app/post/my-new-ride/ is not the same as https://www.marcelvenema.com/post/my-new-ride. I mentioned it in my order, see message.
- Please remove humanize in post-card-meta.html {{ .LinkTitle }}
- .Date | time.Format "January 02, 2006"