{spawn, exec} = require 'child_process'
ask = require 'ask'

pp = (o) ->
	return JSON.stringify o, null, '   '

compressor = require 'node-minify'
path = require 'path'
fs = require 'fs'

L = console.log

task 'new', 'create a new blog post', ->
	# get stdin here...
	ask 'New post title', /.+/, (name) ->
	  	exec 'rake new_post["'+name+'"]', (err, stdout, stderr) ->
		    throw err if err
		    s = /^.+\: (.+)\n$/.exec(stdout)
		    path = s[s.length - 1]
		    L path
		    forked = exec "subl #{path}"
		    process.exit 0

task 'minify', 'minify javascript?', ->	
	d = path.join(process.cwd(), 'source/javascripts')
	fs.readdir d, (err, files) ->

		# get a list of js files...
		for f in files
			L f

	# then compress them to an all.js

	# inspiration: http://blog.jphpsf.com/2012/06/12/squeezing-octopress-for-faster-load-times
