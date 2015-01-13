/**
 * @desc 使用grunt配置各项任务
 * @ v0.1 配置 cssmin 任务
 * 
 */

module.exports = function(grunt){

	grunt.initConfig({
		cssmin: {
			minify: {
				expand: true, // 如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名
				cwd: 'css/', // 需要处理的文件（input）所在的目录
				src: ['*.css', '!*.min.css'], // 表示需要处理的文件。如果采用数组形式，数组的每一项就是一个文件名，可以使用通配符
				dest: 'dest/css/', // 表示处理后的文件名或所在目录(output)
				ext: '.min.css' // 表示处理后的文件后缀名
			},
			combine: {
				files: {
					'dest/css/main.min.css': ['css/*.css'] // 前面是输出文件, 后面是输入文件, 将后面的文件合并为一个
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['cssmin:minify', 'cssmin:combine']);
};