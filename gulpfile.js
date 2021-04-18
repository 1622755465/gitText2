<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var strip = require('gulp-strip-comments');
var htmlmin = require('gulp-htmlmin');
var del=require('del');

//清理dist文件
gulp.task('clean', function() {
    del.sync(
        ['dist/**/*']
    );
});

gulp.task('public', function() {
    gulp.src('public/**/*')
        .pipe(gulp.dest('dist/public'))
});


gulp.task('assets', function() {
    gulp.src(['assets/js/**/*.js'])
        .pipe(strip())
        .pipe(gulp.dest('dist/assets/js'));
    gulp.src('assets/css/**/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('dist/assets/css'));
    gulp.src(['assets/img/**/*.png','assets/img/**/*.gif'])
        .pipe(gulp.dest('dist/assets/img'));
});


gulp.task('routes', function() {
    gulp.src('routes/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/routes'));
});

gulp.task('services', function() {
    gulp.src('services/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/services'));
});


gulp.task('views',function(cb) {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: false,
        removeEmptyAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('views/**/*.html')
        .pipe(strip.html())
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/views'));
});

gulp.task('bin', function() {
    gulp.src('bin/**/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/bin'));
});
gulp.task('node_modules', function() {
    gulp.src('node_modules/**')
        .pipe(gulp.dest('dist/node_modules'));
});
gulp.task('root_js', function() {
    gulp.src(['*.js','!gulp*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
gulp.task('root_json', function() {
    gulp.src(['*.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean','public','assets','routes','services','views','bin','node_modules','root_js','root_json']);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var strip = require('gulp-strip-comments');
var htmlmin = require('gulp-htmlmin');
var del=require('del');

//清理dist文件
gulp.task('clean', function() {
    del.sync(
        ['dist/**/*']
    );
});

gulp.task('public', function() {
    gulp.src('public/**/*')
        .pipe(gulp.dest('dist/public'))
});


gulp.task('assets', function() {
    gulp.src(['assets/js/**/*.js'])
        .pipe(strip())
        .pipe(gulp.dest('dist/assets/js'));
    gulp.src('assets/css/**/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('dist/assets/css'));
    gulp.src(['assets/img/**/*.png','assets/img/**/*.gif'])
        .pipe(gulp.dest('dist/assets/img'));
});


gulp.task('routes', function() {
    gulp.src('routes/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/routes'));
});

gulp.task('services', function() {
    gulp.src('services/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/services'));
});


gulp.task('views',function(cb) {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: false,
        removeEmptyAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('views/**/*.html')
        .pipe(strip.html())
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/views'));
});

gulp.task('bin', function() {
    gulp.src('bin/**/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/bin'));
});
gulp.task('node_modules', function() {
    gulp.src('node_modules/**')
        .pipe(gulp.dest('dist/node_modules'));
});
gulp.task('root_js', function() {
    gulp.src(['*.js','!gulp*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
gulp.task('root_json', function() {
    gulp.src(['*.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean','public','assets','routes','services','views','bin','node_modules','root_js','root_json']);

>>>>>>> dedd623 (first)
>>>>>>> 19b8a9c (first)
>>>>>>> 8f5179a (first)
>>>>>>> 87a8fdf (first)
>>>>>>> 1e8021d (first)
>>>>>>> 5938de4 (first)
>>>>>>> c55f785 (first)
