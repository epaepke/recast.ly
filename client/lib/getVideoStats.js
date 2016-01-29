var getVideoStats = (selectedVidId, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: {'part': 'statistics','id': selectedVidId, 
            'key': window.YOUTUBE_API_KEY,},
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