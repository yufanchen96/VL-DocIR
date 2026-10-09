'use strict';

const button = document.getElementById('copy-bibtex');
const status = document.getElementById('copy-status');

button.addEventListener('click', async () => {
  const text = document.getElementById('bibtex').textContent;
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied';
    status.textContent = 'BibTeX copied to the clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = 'BibTeX selected';
    status.textContent = 'Automatic copying is unavailable. The citation is selected; use your keyboard shortcut to copy it.';
  }
});
