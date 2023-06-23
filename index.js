"use strict";
// Just copy and paste this in the chrome console, and it should download your video
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getVideoName() {
    // The first 2 heading elements give the chapter number and the title
    const headingElements = document.getElementsByClassName("chakra-heading");
    const chapter = headingElements[0].innerHTML;
    const title = headingElements[1].innerHTML;
    return { chapter, title };
}
function downloadUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
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
                res(undefined);
            })
                .catch((err) => {
                rej(err);
            });
        });
    });
}
function openAndDownloadVideo() {
    const videoElement = document.getElementsByTagName("video")[0];
    const url = videoElement.src;
    if (url) {
        downloadUrl(url);
    }
}
openAndDownloadVideo();
