function toggleNav() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        document.body.classList.add("no-scroll");
    } else {
        navbar.className = "navbar";
        document.body.classList.remove("no-scroll"); 
    }
}
document.querySelectorAll('.ele-item').forEach(function(item) {
    item.addEventListener('click', function(){
        var navbar = document.getElementById("navbar");
        if (navbar.className.includes("responsive")) {
            navbar.className = "navbar";
            document.body.classList.remove("no-scroll");
        }
    });
});
document.querySelectorAll(".microsoft, .kurukshetra, .internship").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transition = "transform 0.1s ease"; 
      card.style.transform = `rotateX(${-(y - rect.height / 2) / 15}deg) rotateY(${(x - rect.width / 2) / 15}deg)`;
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
 const cards = document.querySelectorAll('.flip-card-inner');
  cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
