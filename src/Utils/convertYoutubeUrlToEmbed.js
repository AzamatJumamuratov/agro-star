function convertYoutubeUrlToEmbed(url) {
  try {
    const videoIdMatch =
      url.match(/(?:\/watch\?v=|\/live\/)([\w-]+)/) ||
      url.match(/youtu\.be\/([\w-]+)/);

    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : null;
  } catch {
    return null;
  }
}

export default convertYoutubeUrlToEmbed;
