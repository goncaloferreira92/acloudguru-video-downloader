// Just copy and paste this in the chrome console, and it should download your video

import downloadURLs from "./downloadUrls";

const openWindowFunction = `

function getVideoName() {
  // The first 2 heading elements give the chapter number and the title
  const headingElements = document.getElementsByClassName("chakra-heading");
  const chapter = headingElements[0].innerHTML;
  const title = headingElements[1].innerHTML;
  return { chapter, title };
}

async function downloadUrl(url, chapter, title) {
  await fetch(url)
    .then((res) => {
      console.log('downloading...');
      return res.blob();
    })
    .then((file) => {
      const tempUrl = URL.createObjectURL(file);
      const aTag = document.createElement("a");
      aTag.href = tempUrl;

      // Get video name
      if (chapter && title) {
        aTag.download = chapter + " - " + title + ".mp4";
      } else {
        const { chapter, title } = getVideoName();
        aTag.download = chapter + " - " + title + ".mp4";
      }

      document.body.appendChild(aTag);
      aTag.click();
      URL.revokeObjectURL(tempUrl);
      aTag.remove();
      res(true);
    })
    .catch((err) => {
      rej(err);
    });
}

function closeWindow() {
  const bc = new BroadcastChannel('remote-window');
  bc.postMessage("close");
  window.close();
}

async function openAndDownloadVideo() {
  // All others are just videos
  const videoElement = document.getElementsByTagName("video")[0];
  
  let url;
  if (videoElement) {
    url = videoElement.src;
  }
  
  if (url != null) {
    // triggerTimeout.clearTimeout(triggerTimeout);
    console.log('found url: ', url);
    await downloadUrl(url);
    closeWindow();
  } else {
    triggerTimeout = setTimeout(() => {
      console.log('retrying...');
      openAndDownloadVideo();
    }, 1000);
    return;
  }
}

let triggerTimeout = setTimeout(() => {
    console.log('timeout triggered');
    openAndDownloadVideo();
}, 1000);

triggerTimeout();

`;

function createScriptAttribute() {
  const fileref = document.createElement("script");
  fileref.setAttribute("type", "text/javascript");
  fileref.innerHTML = openWindowFunction;
  return fileref;
}

// function defineWindowFunction(window) {
//   if (window instanceof Window) {
//     window.testFunc = () => alert("test function");
//   }
// }

async function openPageAndDownloadVideo(href) {
  const bc = new BroadcastChannel("remote-window");
  const win = window.open(href);
  const fileref = createScriptAttribute();
  win.document.head.appendChild(fileref);
  return new Promise((res) => {
    bc.onmessage = () => {
      return res();
    };
  });
  // await promise;
}

async function iterator() {
  // Should iterate through all the list elements here.
  for await (const href of downloadURLs) {
    const anchorEls = document.getElementsByTagName("a");
    const anchorEl = Array.from(anchorEls).find(
      (el) => el.href === href && !el.hasAttribute("data-testid")
    );
    if (anchorEl && anchorEl instanceof HTMLAnchorElement) {
      const parentNode = anchorEl.parentNode;
      const chapter = Array.from(
        parentNode.childNodes
      )[0].firstChild.innerText.toLowerCase();
      const chapterCap = `${chapter[0].toUpperCase()}${chapter.slice(1)}`;
      const title = anchorEl.getElementsByTagName("span")[0].innerText;
      await openPageAndDownloadVideo(href, chapterCap, title);
    }
  }
}

iterator();