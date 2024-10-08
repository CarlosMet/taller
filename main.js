const carouselInner = document.getElementById('carousel-inner')
  const carouselItems = document.querySelectorAll('.carousel-item')
  let currentIndex = 0

  document.getElementById('nextBtn').addEventListener('click', () => {
    carouselItems[currentIndex].classList.add('hidden')
    currentIndex = (currentIndex + 1) % carouselItems.length
    carouselItems[currentIndex].classList.remove('hidden')
  })

  document.getElementById('prevBtn').addEventListener('click', () => {
    carouselItems[currentIndex].classList.add('hidden')
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length
    carouselItems[currentIndex].classList.remove('hidden')
  })