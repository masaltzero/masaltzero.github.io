document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("information-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".information");
  const tooltip = document.getElementById("information-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// INFORMATION button

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("discord-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".discord");
  const tooltip = document.getElementById("discord-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// DISCORD button

// FACTIONS

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("masalt-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".masalt");
  const tooltip = document.getElementById("masalt-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// trench faction

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("bureau-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".bureau");
  const tooltip = document.getElementById("bureau-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// bureau faction
