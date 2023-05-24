/*necesita refrescar la pagina en desarrollo
sino el content esta apagado o fuera de covertura*/
chrome.commands.onCommand.addListener((command) => {
  if (command === 'new-page') {
    console.log("atajo");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {peticion: "hello"}, function(response) {
        console.log("llega respues del content");
        chrome.tabs.create({
          url: `https://www.wordreference.com/es/translation.asp?tranword=${response.respuesta}` 
        });
      });
    });
  }
});