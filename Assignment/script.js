let modalVisible = false;

// Function to animate the box
function animateBox(boxId) {
  const box = document.getElementById(boxId);
  box.classList.toggle('animate');
  return box.classList.contains('animate'); // returns true if animated
}

// Function to flip the card
function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle('flipped');
  return card.classList.contains('flipped');
}

// Function to toggle modal visibility
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  modalVisible = !modalVisible; // updates global state
  if(modalVisible) {
    modal.classList.add('show');
  } else {
    modal.classList.remove('show');
  }
  return modalVisible;
}

// Event listeners
document.getElementById('animateBoxBtn').addEventListener('click', () => {
  const isAnimated = animateBox('box');
  console.log('Box animated?', isAnimated);
});

document.getElementById('flipCardBtn').addEventListener('click', () => {
  const isFlipped = flipCard('card');
  console.log('Card flipped?', isFlipped);
});

document.getElementById('toggleModalBtn').addEventListener('click', () => {
  const visible = toggleModal('modal');
  console.log('Modal visible?', visible);
});

document.getElementById('closeModalBtn').addEventListener('click', () => {
  toggleModal('modal');
});
