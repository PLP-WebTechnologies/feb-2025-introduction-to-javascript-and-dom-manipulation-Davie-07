document.addEventListener("DOMContentLoaded", function() {
    
    const textElement = document.getElementById('intro');
    textElement.textContent = 'Our company is proud to provide exceptional customer service and innovative solutions.';
  
    
    const styleButton = document.getElementById('styleButton');
    styleButton.style.color = 'blue';
  
  
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function() {
      const newService = document.createElement('p');
      newService.textContent = 'We have added a new service: Custom Solutions';
      document.querySelector('#services').appendChild(newService);
  
      const removeButton = document.querySelector('#removeButton');
      removeButton.addEventListener('click', function() {
        const serviceParagraphs = document.getElementsByClassName('service-paragraph');
        if (serviceParagraphs.length > 1) { 
          serviceParagraphs[serviceParagraphs.length - 1].parentNode.removeChild(serviceParagraphs[serviceParagraphs.length - 1]);
        }
      });
    });
  });
  
  
  styleButton.addEventListener('click', () => {
    styleButton.style.color = 'yellow';

  });
  
  function toggleService() {
    
    const serviceParagraphs = document.getElementsByClassName('service-paragraph');
    for (let i = 0; i < serviceParagraphs.length; i++) {
      serviceParagraphs[i].style.display = 'none'; // 
    }
    
  }
  
  