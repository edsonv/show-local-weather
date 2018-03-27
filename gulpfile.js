var gulp = require('gulp')
var browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
})

// Tarea para vigilar los cambios
gulp.task('watch', function() {
	gulp.watch('./css/*.css').on('change',browserSync.reload)
	gulp.watch('./js/*.js').on('change',browserSync.reload)
	gulp.watch('./*.html').on('change',browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])