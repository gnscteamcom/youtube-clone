const extractVideoInfo = (video) => ({
  id: video._id,
  views: video.views,
  createdAt: video.createdAt,
  thumbnailLink: video.thumbnailLink,
  title: video.title,
  description: video.description,
  duration: video.duration,
  videoLink: video.videoLink,
  channelName: video.uploader.name || video.uploader[0].name,
  channelId: video.uploader._id || video.uploader[0]._id,
  channelImg: video.uploader.imageLink || video.uploader[0].imageLink,
});

const extractUploadFilenames = (uploadInfo) => {
  const videoFilename = uploadInfo.filename;
  const thumbLink = uploadInfo.thumbnail;
  const thumbSplit = thumbLink.split("/");
  const thumbnailFilename = decodeURIComponent(
    thumbSplit[thumbLink.length - 1]
  );
  return { videoFilename, thumbnailFilename };
};

module.exports = { extractVideoInfo, extractUploadFilenames };
