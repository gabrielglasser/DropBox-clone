class DropBoxController {
  constructor() {
    this.btnSendFileEl = document.querySelector("#btn-send-file");
    this.inputFilesEl = document.querySelector("#files");
    this.snackModalEl = document.querySelector("#react-snackbar-root")

    this.initEvents();

  }

  initEvents() {
    //adicionando evento de clique para enviar arquivos
    this.btnSendFileEl.addEventListener("click", event => {
      this.inputFilesEl.click();
    });

    this.inputFilesEl.addEventListener("change", event => {
      this.snackModalEl.style.display = "block";
    });
  }

}