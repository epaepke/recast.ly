var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {'part': 'snippet', 'q': options.query, 
           'key': options.key, 'maxResults': options.max,
            'videoEmbeddable': true, 'type': 'video'},
    dataType: 'json',  
    success: (data) => {
      callback(data);
      console.log('Get success');
    },
    error: () => {
      console.log('Failed get');
    }
  })
};

window.searchYouTube = searchYouTube;