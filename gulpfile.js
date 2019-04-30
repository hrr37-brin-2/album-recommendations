var gulp = require('gulp');
var awspublish = require('gulp-awspublish');

// Publish to AWS S3
gulp.task('publish', function() {
  var publisher = awspublish.create({
    region: 'us-west-2',
    params: {
      Bucket: 'album-art-bandland'
    }
  });
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };
  return gulp.src('client/dist/**')
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});