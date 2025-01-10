// NAVBAR KISMI

// Navbar elementini seçiyoruz
const navbar = document.querySelector('.nav-scroll');

// Sayfa kaydırıldığında navbar arka plan rengini değiştiriyoruz
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.remove('transparent'); // Scroll edildiğinde mavi yapıyoruz
  } else {
    navbar.classList.add('transparent'); // En üstteyken şeffaf yapıyoruz
  }
});

// Hamburger menü ve nav menüyü seçiyoruz
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Hamburger menüye tıklanıldığında menüyü aç/kapat
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// CLASSES BÖLÜMÜ - Butonlar ve Özellikler

// Class butonlarını seçiyoruz
const buttons = document.querySelectorAll('.class-btn');

// Tıklanan butonu aktif hale getiriyoruz
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Özellikler butonu ve container'ı seçiyoruz
let btn = document.querySelector(".container-btn");
let features = document.querySelector("#features-container");

// Özellikler butonuna tıklanıldığında animasyon efekti ekliyoruz
btn.addEventListener("click", (e) => {
  features.classList.remove("features-container");
  void features.offsetWidth;
  features.classList.add("features-container");

  // Tıklanan butona göre ilgili fonksiyonu çağırıyoruz
  switch (e.target.id) {
    case "yoga":
      yoga();
      break;
    case "group":
      group();
      break;
    case "solo":
      solo();
      break;
    case "stretch":
      stretch();
      break;
    default:
      return;
  }
});

// Özellikleri güncelleyen fonksiyonlar
function yoga() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Yoga?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet...`;
  document.querySelector("#features-container img").src = "img/yoga.jpg";
}

function group() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Group?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet...`;
  document.querySelector("#features-container img").src = "img/group.webp";
}

function solo() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Solo?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet...`;
  document.querySelector("#features-container img").src = "img/solo.jpg";
}

function stretch() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Why Are Your Stretch?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Lorem ipsum dolor sit amet...`;
  document.querySelector("#features-container img").src = "img/stret.webp";
}

// BMI HESAPLAMA KISMI

// Boy ve kilo inputlarına event listener ekliyoruz
document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);

// BMI hesaplama fonksiyonu
function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    updateBMIMeter(bmi);
  }
}

// BMI göstergesini güncelleyen fonksiyon
function updateBMIMeter(bmi) {
  const triangle = document.querySelector('.triangle');
  const imgContainer = document.querySelector('.img-container');
  const containerWidth = imgContainer.clientWidth;
  const minBMI = 10;
  const maxBMI = 40;

  let bmiPosition = ((bmi - minBMI) / (maxBMI - minBMI)) * containerWidth;
  bmiPosition = Math.max(0, Math.min(bmiPosition, containerWidth));

  triangle.style.left = `${bmiPosition}px`;
}

// OUR BEST TRAINERS KISMI

// Eğitmen kartlarına tıklanınca bilgileri göster/gizle
document.querySelectorAll('.trainer-card').forEach(card => {
  card.addEventListener('click', () => {
    const layer = card.querySelector('.trainer-layer');
    layer.style.display = (layer.style.display === 'block') ? 'none' : 'block';
  });
});
