// Just copy and paste this in the chrome console, and it should download your video

const downloadURLs = [
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/63154906-87f7-430b-9b7d-0a78017b6948/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/0a2db8f4-b24f-4cbf-9625-185c718280ee/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/68a890b2-009f-405e-887e-46d137f240c9/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/b7330d63-5096-44f6-ae9b-0cc40f68b181/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/8b637512-3a9b-4d61-9441-f6b6d193fcf0/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/fcbcaeaf-8498-422a-8ee1-c53f10fa00fd/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/68d5931b-3b1f-477c-923e-b20c6902cdf4/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/6c12b6d3-29b6-4de5-887f-284902de845c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/e7e0f390-e911-415a-96e6-b2e83b46b0ba/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/c16bbd7c-38d5-4a7f-b4e5-f214d8c3e69b/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/2727246a-fb5c-4c6f-9fc8-9f22d4c05a34/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/4f28f633-ed16-44fa-bb77-e9969fc19414/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/74cb86b5-7310-4483-84c7-fa47d68679c5/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/a21a1644-a8e1-4760-a4e0-545ac1fc4c82/cb2cb6de-8dc9-4b2d-9897-b395e733b68a/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/7d3c6ea2-9166-454a-9db9-52136f09581c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/3bad35a5-87d1-4ff3-b09a-6feabda134ad/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/5d63beda-03b1-49e5-80bb-262c8aa3da22/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/c8958e00-6013-432a-8079-597145e2c416/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/24079592-98ea-450a-9bd7-0690f2ccd9c1/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/c1ef0c63-80df-47de-9388-495f203bce0c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/91673d35-3216-4d03-9151-4fab74339bfd/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/81106844-4ff4-4ab6-a811-8dbcc17e7568/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/79660a02-0c93-4dcc-acd4-a74b459434e9/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/219bd341-e5b1-4e91-b894-249c1769ee94/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/cc0e7112-fdc2-45a6-b110-d6c0c12abdb0/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/02da06ce-9458-41b3-a37c-8f8b0112c51b/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/8c5d723b-af9a-4653-8e69-95f0db318972/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/8db0ec52-6406-44ef-a081-dadda2dd64b0/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/bf6933aa-a2d9-4237-be4d-750de7bad0ad/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/3bf88366-0a64-4570-8fbb-6e2ac9a74866/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/9b4ad17b-6c8c-433b-80e4-59a885beb15c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/563620b8-79ca-4b94-92e2-586b2a6574fa/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/76838bdb-1171-41ce-ab3d-8edd4e8a73bb/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/c1e8714a-5d39-489f-8126-401df064329b/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/c905b18a-0d42-4cca-b189-b6a2364ddb6f/00f07b50-7a37-4844-9b8a-950481d6531c/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/21359b7a-a8b4-4d08-8e30-48623869199f/08fde6c3-f71d-40e8-afe4-e369c5d0f4cd/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/21359b7a-a8b4-4d08-8e30-48623869199f/26913ee8-789a-4b11-abfe-050856553ac7/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/21359b7a-a8b4-4d08-8e30-48623869199f/e3662bd5-361e-43a7-9afc-c2c2f5c921e2/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/21359b7a-a8b4-4d08-8e30-48623869199f/d34f61ea-ed7f-4ef0-b367-bbb2bd812f2d/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/21359b7a-a8b4-4d08-8e30-48623869199f/70913a92-b287-4dc7-8639-74b04921be2a/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/ecd4ac32-285e-4f44-959c-103d19f14319/aa0609cc-04c1-44d7-b49c-448b203d8f42/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/ecd4ac32-285e-4f44-959c-103d19f14319/22f9375a-5fa5-4e5e-b8c5-bb19fe1dc9c7/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/ecd4ac32-285e-4f44-959c-103d19f14319/0160a74c-6e67-4dd5-96d1-524fcbae60b1/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/ecd4ac32-285e-4f44-959c-103d19f14319/7763b4f4-5c01-4048-b471-b2ba2df75373/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/ecd4ac32-285e-4f44-959c-103d19f14319/f3266a1b-5741-48a0-aade-8fbfdfc9f0f1/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/75d34e5d-40fd-4b98-aa27-17a3afd8a97a/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/da2143d2-bc9c-420c-ac3d-54998487e3e2/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/06266080-dd65-4a45-b033-c2d46309db5c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/ccdda64e-def6-4239-940c-954bdba3750c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/1c040300-b104-474f-857a-32fb79273a33/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/8f40d57f-16db-4cdb-ba5c-3916f111a7b6/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/bfe1812a-4545-4d3e-a04b-ea0147bc931d/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/25c7ad6c-4e58-4750-ad4a-b3b4ff706871/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/8c43ddf8-33bd-4d43-8c7a-d5b02d80495d/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/08706e5e-2afc-418d-8ee2-714e92b76610/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/6e07b625-8b46-4c62-a134-6867bcc9e271/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/f7602f2f-2cac-47d6-b350-2a52dc02b29a/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/3f9ed76d-3096-45f4-a136-2b2ca45bb38c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/9241c6c9-9f4b-41b2-aae6-04459529e5cf/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/a846c998-4b14-4d03-8ba2-25722b8d0c68/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/6960ca74-1766-4151-a4dc-d36cec5cd68e/ce53fc99-11d1-4d1f-81d2-d5b60c0996bc/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/a8a1d316-b453-44f4-8b19-1f3841f2f5f2/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/190fc1b9-cfd9-4c0b-9b97-1ec4248c8138/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/94339c41-a727-4aa2-8f88-f55e32865eb7/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/02d5f951-dc5f-4197-a262-60d7683ebd76/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/b982b0ff-460e-451a-9d93-9f6dc9d74598/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/52a19795-1e06-4af9-851d-a345d43799df/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/ce085180-89da-4f6c-9d4f-a15aafce7c0c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/5028c3a1-c1c8-4ec9-82ce-b37958b6e633/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/1c7cb260-b6d6-4daf-9a0e-1ce05c4d7426/8d17e448-ad82-4416-94e3-d812c7417031/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/8a8c4dbd-05f7-4fd6-8dc5-fecf6cae66b2/0974ac22-e297-4b49-b92b-e4446ba55dce/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/8a8c4dbd-05f7-4fd6-8dc5-fecf6cae66b2/d1fd6e44-5a71-420d-8a3b-224ed9da7afc/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/8a8c4dbd-05f7-4fd6-8dc5-fecf6cae66b2/8a7c12e3-7dc6-4a01-80a5-7e5e4efde99e/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/8a8c4dbd-05f7-4fd6-8dc5-fecf6cae66b2/06e1051b-ff51-4ff6-afae-da3c61df1b20/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/8a8c4dbd-05f7-4fd6-8dc5-fecf6cae66b2/f0d5ec36-b92d-4252-8f70-ab85bc63f841/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/31c4b36e-331b-4744-a5fa-ded9c640bb2e/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/e3fa4185-4b1d-4631-af64-37412ba2e986/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/fd8169b2-3079-484e-85df-e8c2336b655a/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/6624f603-76d3-496e-817b-1d6d2e9e77a5/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/4efb7b12-b7c3-4547-beca-825ddaa601f1/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/057f3361-3f81-4036-91fe-b8147bd8e0cd/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/c07ebb1b-6525-492c-907f-5299ec3bceed/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/70bc89a2-29be-4d19-9a33-935517dcb72f/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/31d7b2a1-17fa-44a4-87dc-a88315eec16e/4c99d268-74eb-457a-a4d4-d8535aac9927/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/4b152967-3f9e-4750-b4cf-33b16206b427/520139ff-f9fa-4f23-ab44-254407c93b5b/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/4b152967-3f9e-4750-b4cf-33b16206b427/5b041440-0f65-4b98-86d6-4de1406bbea6/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/4b152967-3f9e-4750-b4cf-33b16206b427/94957b98-8232-496d-8c02-52c82692f2b9/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/4b152967-3f9e-4750-b4cf-33b16206b427/b1c256ba-b19a-4b21-ae58-d14a60ebcb24/watch",

  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/370ffd3a-a089-48b3-bf93-9489451dba10/7961fb79-fb18-4eca-a2ab-a0c5deac4d9c/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/370ffd3a-a089-48b3-bf93-9489451dba10/105b147e-7832-439a-9486-c2569672e1c7/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/370ffd3a-a089-48b3-bf93-9489451dba10/671d7684-5b91-422d-99e1-8b09c40ef296/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/370ffd3a-a089-48b3-bf93-9489451dba10/71d85e84-dbe3-45d3-86e4-942ba67aa7c4/watch",
  "https://learn.acloud.guru/course/certified-solutions-architect-associate/learn/50c62423-ddca-4505-b2ac-2f05caa23c7c/b60de242-3b58-4d3f-b533-f64e87c762d6/watch",
];

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
