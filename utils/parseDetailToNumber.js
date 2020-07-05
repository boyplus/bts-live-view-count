module.exports = (videos) => {
    videos.videos.forEach(video => {
        video.oldView = parseInt(video.oldView);
        video.oldLike = parseInt(video.oldLike);
        video.oldDislike = parseInt(video.oldDislike);

        video.newView = parseInt(video.newView);
        video.newLike = parseInt(video.newLike);
        video.newDislike = parseInt(video.newDislike);
    });
}