'use strict';

{
  // setup icons
  const icons = document.querySelectorAll('section .bi');
  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.remove('bi-clipboard');
      icon.classList.add('bi-clipboard-check');

      const listener = (e) => {
        e.clipboardData.setData('text/plain', icon.dataset.text);
        e.preventDefault();
        document.removeEventListener('copy', listener);
      };

      document.addEventListener('copy', listener);
      document.execCommand("copy");
    });
  });
}