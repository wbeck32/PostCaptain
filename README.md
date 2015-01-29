#PostCaptain

This is a project to learn how to create a self-contained node module that will generate static sites.

#Install
```
npm -g install postcaptain
```


#What's in the package?

```
--README.md
--app.js
--bin-\
       --www
--config.json
--package.json
--public-\
          --images
          --javascripts-\
                         --jquery.js
                         --repo.js
          --projects-\
                      --proj1.html
                      --proj2.html
                      .
                      .
                      .
          --stylesheets-\
                      --style.css
          --postcaptain.html
--routes-\
          --index.js
--views-\
         --error.jade
         --index.jade
         --layout.jade
         --repo.jade
```

#How does it work?

Write separate posts into HTML (or Markdown) files that you put into the projects directory. **Tip:** Add a date to each HTML file title so that the files are posted in the correct order - for example: 01282015.html.

You can add your own stylesheets and javascript files to the various directories in the public directory. You'll need to create a link to your new files in layout.jade. Alternately, you can edit the existing style.css and repo.js without having to change the jade file.

To change the look of the main body of the page (anything besides the content between the <head\> tags), edit postcaptain.html.

To change the look of the posts, edit the repo.jade template.
