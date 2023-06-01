let debounce = (time, callback) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      clearTimeout(timer)
      callback()
    }, time)
  }
}

let showDialog = (selectedLocation) => {
  let template = `
  <style> 
    #selection-icon {
      position: absolute;
      background-color: red;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      z-index: 9999;
    }
  </style>
  <div id="selection-icon"></div>
  `
  document.bo
}

let getSelectionText = () => {
  let text = ''
  if (document.getSelection) {
    text = document.getSelection().toString()
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text
  }
  return text
}

document.addEventListener(
  'selectionchange',
  debounce(200, async () => {
    var selection = document.getSelection()
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0)
      var selectionRect = range.getBoundingClientRect()
      var selectedText = range.toString()

      // showDialog(selectedLocation);
      var popup = document.getElementById('popup');
      if (!popup) {
        popup = document.createElement('div');
        popup.id = 'popup';
        popup.style = 
        document.body.appendChild(popup);
      }
  
      popup.style.left = selectionRect.left + 'px';
      popup.style.top = selectionRect.top + 'px';
      popup.style.display = 'block';
      await chrome.runtime.sendMessage({ text: selectedText })
    }
  }),
)
