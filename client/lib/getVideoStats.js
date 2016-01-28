var getVideoStats = (selectedVid, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: {'part': 'snippet,statistics','key': window.YOUTUBE_API_KEY,
            'id': selectedVid.id.videoId},
    dataType: 'json',  
    success: (data) => {  
      callback(data.items);
    },
    error: () => {
      console.log('Failed get');
    }
  })
};


window.getVideoStats = getVideoStats;