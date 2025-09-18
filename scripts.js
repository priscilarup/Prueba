// Partículas de fondo estilo neón
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
    particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.7,
            dy: (Math.random() - 0.5) * 0.7,
            color: Math.random() > 0.5 ? '#C8102E' : '#D4AF37'
        });
    }
}
createParticles();

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.closePath();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(drawParticles);
}
drawParticles();

// Temporizador de oferta especial
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    function updateTimer() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        display.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        if (--timer < 0) {
            display.textContent = "¡Tiempo agotado!";
        } else {
            setTimeout(updateTimer, 1000);
        }
    }
    updateTimer();
}
// Seleccionamos el elemento
const guarantee = document.querySelector('.guarantee');

// Cuando el mouse entra
guarantee.addEventListener('mouseenter', () => {
    guarantee.style.transform = 'scale(1.05)';
    guarantee.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    guarantee.style.boxShadow = '0 8px 25px rgba(0,0,0,0.5)';
});

// Cuando el mouse sale
guarantee.addEventListener('mouseleave', () => {
    guarantee.style.transform = 'scale(1)';
    guarantee.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
});


window.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    startTimer(60 * 15, timerDisplay); // 15 minutos

    // Animación de scroll suave para CTA
    document.getElementById('cta-main').onclick = () => {
        document.querySelector('.offer').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('cta-offer').onclick = () => {
        document.querySelector('.subscribe-form').scrollIntoView({ behavior: 'smooth' });
    };

    // Formulario de suscripción (solo frontend)
    document.querySelector('.subscribe-form').onsubmit = function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            alert('¡Gracias por suscribirte! Pronto recibirás nuestras ofertas.');
            this.reset();
        }
    };
});