var github = (function(){
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
      fragment += '<li><a href="'+repos[i].url+'">'+repos[i].name+'</a><p>'+repos[i].description+'</p></li>';
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){

      $.getJSON("https://api.github.com/users/"+options.user+"/repos?callback=?"
        , function(response) {
          var repos = [];
          if (!response || !response.data) { return; }
          for (var i = 0; i < response.data.length; i++) {
            if (options.skip_forks && response.data[i].fork) { continue; }
            repos.push(response.data[i]);
          }
          repos.sort(function(a, b) {
            var aDate = new Date(a.pushed_at).valueOf(),
                bDate = new Date(b.pushed_at).valueOf();

            if (aDate === bDate) { return 0; }
            return aDate > bDate ? -1 : 1;
          });

          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      );
    }
  };
})();

