const sizeSelect = document.getElementById('size');
    const selectedSizeDiv = document.querySelector('.selected-size');
    
    sizeSelect.addEventListener('change', () => {
      const selectedSizes = Array.from(sizeSelect.selectedOptions).map((option) => option.value);
      selectedSizeDiv.textContent = `Tamanho: ${selectedSizes.join(', ')}`;
    });