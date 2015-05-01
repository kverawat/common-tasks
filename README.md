A collection of gulp tasks that I like to use in angularjs projects. This project is intended to be
included in other projects as a git submodule.

#How to include this in a project:

From your project root:

    mkdir gulp
    cd gulp
    git submodule add https://github.com/Ludachrispeed/common-tasks.git

If you have a project-specific gulp task called `special-task.js`, put it in the `gulp` directory as
a sibling of the `common-tasks` directory:

    app/
      +- styles/
      +- index.html
    gulp/
      +- special-task.js    <-- project-specific task
      +- common-tasks/      <-- git submodule
        +- clean.js
        +- styles.js
        +- ... etc.
    dist/
      +- css/
      +- index.html

#How to use

Install gulp globally

    npm install -g gulp

Install these npm modules in your project using `npm install --save-dev`

    gulp
    del
    gulp-size
    gulp-concat
    gulp-uglify
    gulp-sourcemaps
    main-bower-files
    gulp-ng-annotate
    gulp-watch
    run-sequence
    gulp-sass
    gulp-minify-css
    gulp-autoprefixer

To run the asset pipeline for development

    gulp dev

To run the asset pipeline for production (includes minification)

    gulp prod

Serve and watch all relevant files (for development only)

    gulp serve

#License

MIT
