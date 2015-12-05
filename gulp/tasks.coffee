gulp = require('gulp')
del = require('del')
sass = require('gulp-sass')
webserver = require('gulp-webserver')
es = require('event-stream')
concat = require('gulp-concat')
bower = require('gulp-bower')
csso = require('gulp-csso')
autoprefixer = require('gulp-autoprefixer')
jade = require('gulp-jade')

gulp.task('bower', ->
  bower()
)

gulp.task('sass', ['bower'], ->
  vendorFiles = gulp.src('./bower_components/normalize.css/normalize.css')

  applicationFiles = gulp.src('./assets/styles/**/*.sass')
    .pipe(sass({indentedSyntax: true, sourceComments: 'normal'}))

  es.concat(vendorFiles, applicationFiles)
    .pipe(concat('webcodr.css'))
    .pipe(autoprefixer({browsers: 'last 5 versions', cascade: false}))
    .pipe(gulp.dest('./build/css'))
)

gulp.task('jade', ->
  gulp.src('./templates/!(layout).jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./build/'))
)

gulp.task('clean', ->
  del(['./build/**'])
)

gulp.task('build', ['sass', 'jade'])

gulp.task('server', ['build'], ->
    gulp.src(['build'])
    .pipe(webserver({host: '0.0.0.0'}))
)

gulp.task('watch', ['server'], ->
  gulp.watch('./assets/**/*.sass', ['sass'])
  gulp.watch('./templates/**/*.jade', ['jade'])
)

gulp.task('dist', ['build'], ->
  gulp.src(['./build/css/**/*.css'])
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
)
