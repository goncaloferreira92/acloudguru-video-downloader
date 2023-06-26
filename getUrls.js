// Get URLS

const cssClassHeader = 'css-pr2tx6';

function getURLs() {
     const headers = document.getElementsByClassName(cssClassHeader);
     for (let i = 0; i < headers.length; i++) {
          const header = headers[i];
          const headerNodeList = Array.from(header.nodeList);
          // for (let j = 0; j < headerNodeList.length; j++) {
          //      console.log(headerNodeList[j]);
          // }
     }
}

getURLs();