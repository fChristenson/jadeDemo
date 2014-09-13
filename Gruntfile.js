module.exports = function (grunt) {
    grunt.initConfig({
        paths: {
            public: 'public',
            css: 'public/css',
            less: 'public/css/less'
        },
        less: {
            options: {
                syncImport: true
            },
            default: {
                expand: true,
                cwd: '<%= paths.less %>',
                src: 'main.less',
                dest: '<%= paths.css %>',
                ext: '.css'
            }
        },
        watch: {
            css: {
                files: ['**/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: ['**/**/*.jade'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['**/**/*.js'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};