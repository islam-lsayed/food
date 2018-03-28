var gulp = require('gulp'),
    image = require('gulp-image')
    uglify = require('gulp-uglify');



    // compressed images

    gulp.task('compressed',function(){
        gulp.src('images/**/*')
        .pipe(image())
        .pipe(gulp.dest('images/min'))
    });

     // compreesed javascript
     gulp.task('compressedjs',function(){
        gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/min'))
    });


    gulp.task('default',['compressedjs'] );

   