// ! Do not try to edit this $hit 💩

fetch('../data.json')
  .then((result) => result.json())
  .then(renderData);

function renderData(data) {
  const name = data.name;
  const description = data.description;
  const image = data.image;
  const isAssetImage = data.isAssetImage;
  const social = data.social;

  bindValueToClass('name', name);
  bindValueToId('description', description);
  renderImage(image, isAssetImage);
  renderSocialButtons(social);
}

function bindValueToId(documentId, value) {
  document.getElementById(documentId).innerText = value;
}

function bindValueToClass(documentClass, value) {
  document
    .querySelectorAll(`.${documentClass}`)
    .forEach((item) => (item.innerText = value));
}

function renderImage(image, isAssetImage) {
  document.getElementById('image').src = isAssetImage
    ? `../images/${image}` // adding image path if its from asset
    : image;
  document.getElementById('image').alt = name;
}

function renderSocialButtons(social) {
  if (social.email) {
    addSocialButtonToDom(`mailto:${social.email}`, 'far fa-envelope');
  }
  if (social.twitter) {
    addSocialButtonToDom(
      `https://twitter.com/${social.twitter}`,
      'fab fa-twitter'
    );
  }
  if (social.instagram) {
    addSocialButtonToDom(
      `https://instagram.com/${social.instagram}`,
      'fab fa-instagram'
    );
  }
  if (social.website) {
    addSocialButtonToDom(`${social.website}`, 'fas fa-link');
  }
}

function addSocialButtonToDom(url, className) {
  document.querySelector('.btns').innerHTML += `
    <button>
      <a href="${url}">
        <i class="${className}"></i>
      </a>
    </button>
  `;
}
