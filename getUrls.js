// Get URLS

const cssClassHeader = 'css-pr2tx6';

function getURLs() {
     const hrefList = [];
     const headers = document.getElementsByClassName(cssClassHeader);
     for (let i = 0; i < headers.length; i++) {
          const header = headers[i];
          const headerNodeList = Array.from(header.childNodes);
          for (let j = 0; j < headerNodeList.length; j++) {
               if (headerNodeList[j] instanceof HTMLAnchorElement) {
                   const href = headerNodeList[j].href;
                   hrefList.push(href);
               }
          }
     }
    console.log(hrefList); // Copy this to a file
}

getURLs();