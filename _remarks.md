
- Code in Hugo template (theme)
- Can the summary in the post-card be .Summary instead of a page parameter? With summaryLength in the site configuration or <!--more--> in the content I can set the number of words. I do not prefer to set the summary and slug parameters in each page.
- Can gallery images stored in the page bundles of the current post instead of the /static/images folder? I like my content bundled together.
- Can slug not be a front matter parameter but calculated from the page bundle folder or markdown filename? 


- The gallery of https://marcel-venema.netlify.app/post/my-new-ride/ is not the same as https://www.marcelvenema.com/post/my-new-ride. I mentioned it in my order, see message.
- Please remove humanize in post-card-meta.html {{ .LinkTitle }}
- .Date | time.Format "January 02, 2006"

I am not completely satisfied with the gallery and image options. Your revision looks like a 'quick fix' to add two css classes. It would be very nice if a gallery/masonry shortcode would be available which I can use like {{< gallery1 dir="img" class="" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}} or something similar. 
It would be very nice if we do not need a gallery_images list in frontmatter, but can use directly a directory/folder for the gallery and img src for an image. Do you understand what I mean? 
