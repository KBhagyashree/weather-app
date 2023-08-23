module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'build/index.css': 'index.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['./src/index.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};