A collection of gulp tasks that I like to use in angularjs projects. This project is intended to be
included in other projects as a git submodule.

#How to Include in a Project:

From your project root:

    mkdir gulp
    cd gulp
    git submodule add https://github.com/Ludachrispeed/common-tasks.git

If you have a project-specific gulp task called `special-task.js`, put it in the `gulp` directory as
a sibling of the `common-tasks` directory:

    app/
      +- styles/
      +- images/
      +- index.html
    gulp/
      +- special-task.js
      +- common-tasks/    <-- git submodule here
        +- clean.js
        +- styles.js
        +- ... etc.
    dist/
      +- index.html
      +- css/

#How to Use

To run the asset pipeline during development

    gulp dev

To run the asset pipeline for production (includes minification)

    gulp prod

To serve and watch all relevant files

    gulp serve

#What it includes

##clean.js
  - `clean`
    Delete everything in the dist/ directory

##dev.js
  - `dev`

##prod.js
  - `prod`

#

##

#License

MIT
