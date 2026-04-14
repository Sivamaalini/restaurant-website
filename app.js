function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;
  const output = document.getElementById("formMessage");

  if (!name || !email || !msg) {
    output.innerText = "Please fill all fields!";
    output.style.color = "red";
    return false;
  }

  output.innerText = "Message sent successfully!";
  output.style.color = "green";
  return false;
}