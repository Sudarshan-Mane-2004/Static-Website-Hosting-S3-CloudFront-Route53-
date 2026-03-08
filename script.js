// ================= TYPING EFFECT =================
const roles = [
  "Cloud Engineer",
  "DevOps Engineer",
  "AWS Specialist",
  "CI/CD Expert"
];

let ri = 0, rj = 0, del = false;

function type(){
  const el = document.querySelector(".typing");
  if (!el) return;

  if (!del && rj <= roles[ri].length){
    el.textContent = roles[ri].substring(0, rj++);
  } else if (del && rj >= 0){
    el.textContent = roles[ri].substring(0, rj--);
  }

  if (rj === roles[ri].length) del = true;
  if (rj === 0 && del){
    del = false;
    ri = (ri + 1) % roles.length;
  }

  setTimeout(type, del ? 50 : 100);
}
type();


// ================= REVEAL ANIMATION (SAFE) =================
const reveals = document.querySelectorAll(".reveal");

// hide first (safe way)
reveals.forEach(el => el.classList.add("hidden"));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}


// ================= COUNTERS =================
function counter(id, target){
  const el = document.getElementById(id);
  if (!el) return;

  let c = 0;
  const step = setInterval(()=>{
    c++;
    el.textContent = c;
    if (c >= target) clearInterval(step);
  }, 40);
}

counter("projectsCount", 3);
counter("certCount", 1);
counter("awsCount", 10);