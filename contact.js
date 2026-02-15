const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
    // Si tu n'utilises pas Formspree et que tu veux juste tester :
    // e.preventDefault(); 
    
    const name = document.querySelector('input[name="nom"]').value;
    alert(`Merci ${name}, votre message a bien été envoyé !`);
});