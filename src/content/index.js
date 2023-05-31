function debounce(time, callback) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      callback();
    }, time);
  };
}

function getSelectionText() {
  let text = '';
  if (document.getSelection) {
    text = document.getSelection().toString();
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text;
  }
  return text;
}

document.addEventListener(
  'selectionchange',
  debounce(50, () => {
    const selection = getSelectionText().trim();
    console.log(selection);
  })
);

