// Just copy and paste this in the chrome console, and it should download your video

import downloadURLs from './downloadUrls';

function getVideoName() {
  // The first 2 heading elements give the chapter number and the title
  const headingElements = document.getElementsByClassName("chakra-heading");
  const chapter = headingElements[0].innerHTML;
  const title = headingElements[1].innerHTML;
  return { chapter, title };
}

async function downloadUrl(url, chapter, title) {
  // return new Promise((res, rej) => {
    await fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        const tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;

        // Get video name
        if (chapter && title) {
          aTag.download = `${chapter} - ${title}.mp4`;
        } else {
          const { chapter, title } = getVideoName();
          aTag.download = `${chapter} - ${title}.mp4`;
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
  // });
}

/**
 *
 * @param {HTMLDivElement} labButton
 */
function labProcess(labButton) {
  labButton.firstChild.click();
  window.addEventListener("hashchange", () => {
    window.addEventListener("onload", () => {
      console.log("window moved and changed");
    });
  });
}

/**
 *
 * @param {HTMLDivElement} quizButton
 */
function quizProcess(quizButton) {
  // Do whatever
}

const LAB_BUTTON_CONTENT = "Start Lab";
const QUIZ_BUTTON_CONTENT = "Start quiz";
const LAB_ATTRIBUTE_KEY = "data-testid"; // Custom div's attribute that spots the lab's icon

function openAndDownloadVideo() {
  // Detect if it is lab or quiz
  let labButton;
  let quizButton;
  const divElements = document.getElementsByTagName("div");
  for (let i = 0; i < divElements.length; i++) {
    const el = divElements[i];
    if (el.hasAttribute(LAB_ATTRIBUTE_KEY)) {
      // Lab case
      if (el.innerText === LAB_BUTTON_CONTENT) {
        labButton = el;
        break;
      }
      // Quiz case
      if ((el.innerText = QUIZ_BUTTON_CONTENT)) {
        quizButton = el;
        break;
      }
    }
  }

  if (labButton) {
    labProcess(labButton);
    return;
  } else if (quizButton) {
    quizProcess(quizButton);
    return;
  }

  // All others are just videos
  const videoElement = document.getElementsByTagName("video")[0];
  const url = videoElement.src;

  if (url) {
    downloadUrl(url);
  }
}

// openAndDownloadVideo();

async function openPageAndDownloadVideo(href) {
  const tempWindow = window.open(href);
  tempWindow.test = () => {console.log('test')}
  tempWindow.onload(() => {
    console.log('loaded');
  });
}

async function iterator() {
  // Should iterate through all the list elements here.
  for await (const href of downloadURLs) {
    const anchorEls = document.getElementsByTagName("a");
    const anchorEl = Array.from(anchorEls).find((el) => el.href === href);
    if (
      anchorEl &&
      anchorEl instanceof HTMLAnchorElement &&
      !anchorEl.hasAttribute("data-testid")
    ) {
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
