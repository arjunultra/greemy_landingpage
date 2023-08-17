document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#section').scrollIntoView({
      behavior: 'smooth'
    });
  });
  