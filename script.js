document.getElementById('triggerButton').addEventListener('click', function() {
    // Start playing the background music
    var audio = document.getElementById('backgroundMusic');
    audio.play();
  
    // Select the rose element and make it visible
    var rose = document.getElementById('rose');
    rose.style.opacity = '1';
    rose.style.transform = 'scale(1)';
  
    // Select all the petals and make them bloom one by one
    var petals = document.querySelectorAll('.rose .petal');
    var center = document.querySelector('.rose .center');
  
    petals.forEach(function(petal, index) {
      setTimeout(function() {
        petal.style.opacity = '1';
        petal.style.transform = 'scale(1)';
      }, index * 300); // Stagger the appearance of the petals
    });
  
    // Make the center appear after all petals
    setTimeout(function() {
      center.style.opacity = '1';
    }, petals.length * 300);
  
    // Change the message after the rose blooms
    document.querySelector('.message').innerText = "Every moment with you is a beautiful blossom. I cherish you endlessly.";
    document.querySelector('.footer').style.opacity = "1";
  });
  