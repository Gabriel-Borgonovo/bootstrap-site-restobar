const modalImgs = ($imgs) => {
    
    
    const $imgsToArray = Array.from($imgs);

    $imgsToArray.forEach((img) => {
        img.addEventListener('click', (e) => {
            // Obtener el atributo src de la imagen
            const imgSrc = img.querySelector('img').getAttribute('src');
            const $description = img.querySelector('.description').textContent;
            // Obtener el texto del párrafo que contiene el producto y el precio
            const title = img.querySelector('.title').textContent;
            const price = img.querySelector('.price').textContent;
            // Abrir la modal
            openModal(imgSrc, title, $description, $imgsToArray, price);
            
        })
    })
}

export default modalImgs;

function openModal(imgSrc, title, description, imgsArray, price) {
    const $modalWindow = document.getElementById('wModal');
    const $modalContent = document.getElementById('contentModal');
    const $modalImage = $modalContent.querySelector('img');
    const $modalPtext = document.querySelector('.modal-p-text');
    const $closeButton = $modalContent.querySelector('.color-btn-close');
    const $prevButton = $modalContent.querySelector('#prev');
    const $nextButton = $modalContent.querySelector('#next');
    const $modalH2 = $modalContent.querySelector('.modal-h2');
    const $modalH3 = $modalContent.querySelector('.modal-h3');
  
    // Establecer la fuente de la imagen y el texto del párrafo en la modal
    $modalImage.setAttribute('src', imgSrc);
    // Aquí puedes establecer el texto del párrafo de la modal si es necesario
    $modalH2.textContent = title;
    $modalH3.textContent = price;
    $modalPtext.textContent = description;

    // Mostrar la modal
    $modalWindow.classList.remove('d-none');
  
    // Agregar un event listener para cerrar la modal cuando se hace clic fuera de ella
    $modalWindow.addEventListener('click', (e) => {
      if (e.target === $modalWindow) {
        closeModal();
      }
    });

    // Agregar un event listener para cerrar la modal cuando se hace clic en el botón de cerrar
    $closeButton.addEventListener('click', () => {
        closeModal();
    });



     // Declarar una lista de URLs de imágenes
    const imageUrls = imgsArray.map((imgElement) => imgElement.querySelector('img').getAttribute('src'));
    let currentImageIndex = imageUrls.indexOf(imgSrc); // Obtener el índice de la imagen actual

    // Agregar un event listener al botón "prev" para retroceder en el slider
    $prevButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
      $modalImage.setAttribute('src', imageUrls[currentImageIndex]);
      $modalH2.textContent = imgsArray[currentImageIndex].querySelector('.title').textContent;
      $modalH3.textContent = imgsArray[currentImageIndex].querySelector('.price').textContent;
      $modalPtext.textContent = imgsArray[currentImageIndex].querySelector('.description').textContent; // Actualiza el texto si es necesario
    });

    // Agregar un event listener al botón "next" para avanzar en el slider
    $nextButton.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
      $modalImage.setAttribute('src', imageUrls[currentImageIndex]);
      $modalH2.textContent = imgsArray[currentImageIndex].querySelector('.title').textContent;
      $modalH3.textContent = imgsArray[currentImageIndex].querySelector('.price').textContent;
      $modalPtext.textContent = imgsArray[currentImageIndex].querySelector('.description').textContent; // Actualiza el texto si es necesario
    });

  }
  




  function closeModal() {
    const $modalWindow = document.getElementById('wModal');
  
    // Ocultar la modal
    $modalWindow.classList.add('d-none');
  }

