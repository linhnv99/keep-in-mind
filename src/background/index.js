chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('=======REQUEST: ', request.text)
  sendResponse({})
})
