document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('border-warning');
    });
});

document.getElementById('draw').addEventListener('click', () => {
    const selectedCards = Array.from(document.querySelectorAll('.card.border-warning'));
    if (selectedCards.length === 0) {
        document.getElementById('result').textContent = 'Kérlek, válassz ki legalább egy kártyát!';
        return;
    }

    const randomIndex = Math.floor(Math.random() * selectedCards.length);
    const chosenCard = selectedCards[randomIndex].querySelector('.card-body').textContent;

    document.getElementById('result').textContent = `A kiválasztott kártya: ${chosenCard}`;

    alert(`A kiválasztott kártya: ${chosenCard}`);
});
