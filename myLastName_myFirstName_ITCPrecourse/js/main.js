//replace with your user:
const GITHUB_URL = "https://api.github.com/users/atika111";
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    profileImage.src = data.avatar_url;
    profileName.textContent = data.name;
  });

const { styler, spring, listen, pointer, value } = window.popmotion;

const card = document.querySelector(".card");
const divStyler = styler(card);
const cardXY = value({ x: 0, y: 0 }, divStyler.set);

listen(card, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(cardXY.get()).start(cardXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: cardXY.get(),
    velocity: cardXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
  }).start(cardXY);
});
