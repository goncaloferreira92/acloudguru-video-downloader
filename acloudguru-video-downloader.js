// const fs = require("fs");

function getVideoName() {
  // The first 2 heading elements give the chapter number and the title
  const headingElements = document.getElementsByClassName("chakra-heading");
  const chapter = headingElements[0].innerHTML;
  const title = headingElements[1].innerHTML;
  return { chapter, title };
}

async function download(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        const tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;

        // Get video name
        const { chapter, title } = getVideoName();
        aTag.download = `${chapter} - ${title}.mp4`;

        document.body.appendChild(aTag);
        aTag.click();
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
        res();
      })
      .catch((err) => {
        rej(err);
      });
  });
}

function openAndDownloadVideo() {
  const videoElement = document.getElementsByTagName("video")[0];
  const url = videoElement.src;

  if (url) {
    download(url);
  }
}

openAndDownloadVideo();
