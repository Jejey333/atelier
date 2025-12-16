let testCount = 0;

function testPipeline() {
  testCount++;
  
  // Animation du bouton
  const button = event.target;
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 100);
  
  // Messages variés
  const messages = [
    "✅ Pipeline CI/CD opérationnel !",
    "🎯 Tests passés avec succès !",
    "🔥 Build réussi en 2.3 secondes !",
    "⚡ Déploiement ultra-rapide !",
    "🌟 Qualité de code : Excellente !",
    "🚀 Performance optimale atteinte !"
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
  
  // Mise à jour du compteur
  updateCounter();
}

function updateCounter() {
  const counter = document.getElementById('counter');
  counter.textContent = `Pipeline testé ${testCount} fois`;
  counter.style.animation = 'fadeIn 0.5s ease-out';
}