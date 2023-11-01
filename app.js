const title = document.querySelector(".logo");
const titleFake = document.querySelector(".logoNovo");

title.addEventListener("mouseover", () => {
  title.style.display = "none";
  titleFake.style.display = "flex";
});
title.addEventListener("mouseout", () => {
  title.style.display = "flex";
  titleFake.style.display = "none";
});

const btn = document.querySelector(".no");
let position = 0;

const moveButton = () => {
  position = position ? 0 : 400;
  btn.style.transform = `translate(${position}px, 0px)`;
  btn.style.transition = "all 0.1s all ease";
};

btn.addEventListener("click", moveButton);
btn.addEventListener("mouseover", moveButton);

const sim = document.getElementById("yes");

sim.addEventListener("click", () => {
  let timerInterval;
  Swal.fire({
    title: "Vem me dar uns beijos 😍",
    html: "Nós dois pra sempre. 💘",
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
});
