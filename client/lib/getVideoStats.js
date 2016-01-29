var getVideoStats = (selectedVid, callback) => {
  console.log('selectedVid1-2 ', selectedVid)
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: {'part': 'statistics','key': window.YOUTUBE_API_KEY,
            'id': selectedVid.id},
    dataType: 'json',  
    success: (data) => {
      console.log('fetch data ', data);
      callback(data.items);
    },
    error: () => {
      console.log('Failed get');
    }
  })
};


window.getVideoStats = getVideoStats;