module.exports = (videos, videoList) => {
    let mapping = {};
    videoList.forEach((video) => {
        mapping[video.youtubeId] = video.displayTitle;
    });
    videos.videos.forEach((video) => {
        video.displayTitle = mapping[video.youtubeId];
    });
};
