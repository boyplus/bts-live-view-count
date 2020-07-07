export default (videos, sortBy) => {
    if (sortBy === 'view') {
        for (let i = 0; i < videos.length; i++) {
            for (let j = i + 1; j < videos.length; j++) {
                if (videos[i].newView < videos[j].newView) {
                    let temp = videos[i];
                    videos[i] = videos[j];
                    videos[j] = temp;
                }
            }
        }
    } else if (sortBy === 'like') {
        for (let i = 0; i < videos.length; i++) {
            for (let j = i + 1; j < videos.length; j++) {
                if (videos[i].newLike < videos[j].newLike) {
                    let temp = videos[i];
                    videos[i] = videos[j];
                    videos[j] = temp;
                }
            }
        }
    } else if (sortBy === 'newest') {
        for (let i = 0; i < videos.length; i++) {
            for (let j = i + 1; j < videos.length; j++) {
                if (videos[i].publishedAt < videos[j].publishedAt) {
                    let temp = videos[i];
                    videos[i] = videos[j];
                    videos[j] = temp;
                }
            }
        }
    } else if (sortBy === 'oldest') {
        for (let i = 0; i < videos.length; i++) {
            for (let j = i + 1; j < videos.length; j++) {
                if (videos[i].publishedAt > videos[j].publishedAt) {
                    let temp = videos[i];
                    videos[i] = videos[j];
                    videos[j] = temp;
                }
            }
        }
    }
};
