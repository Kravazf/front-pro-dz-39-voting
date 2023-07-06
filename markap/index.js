const options = [
    { emoji: '😀', count: 0 },
    { emoji: '😊', count: 0 },
    { emoji: '😃', count: 0 },
    { emoji: '🙂', count: 0 },
    { emoji: '😉', count: 0 }
  ];
  
  const wrapSmile = document.createElement('div');
  const title = document.createElement('h1');

  title.innerText = 'Voting:';

  wrapSmile.classList.add('wrapSmile');
  
  options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option.emoji;
    button.addEventListener('click', () => {
      option.count++;
      updateResults();
    });
    wrapSmile.appendChild(button);
  });
  
  const resultsContainer = document.createElement('div');

  resultsContainer.classList.add('wrapNumbers');
  
  function updateResults() {
    resultsContainer.innerHTML = '';
    options.forEach(option => {
      const countElement = document.createElement('p');
      countElement.textContent = `${option.count}`;
      resultsContainer.appendChild(countElement);
    });
  }
  
  updateResults();
  
  document.body.append(title);
  document.body.appendChild(wrapSmile);
  document.body.appendChild(resultsContainer);





 
  
  
  
  
  
  
  