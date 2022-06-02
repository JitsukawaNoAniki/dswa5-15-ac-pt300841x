module.exports = function(grunt) {

    grunt.initConfig({
        copy : {
            project: {
                expand = true,
                cwd = ',',
                src = ['**', '!Gruntfile.js', '!package.json', '!public/bower.json'],
                dest = 'dist'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
}