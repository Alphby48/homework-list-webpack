export class MatkulHomework {
  constructor() {
    this.inputForm = document.querySelector(".input-form");
    this.inputMatkul = document.querySelector(".input-matkul");
    this.inputKeterangan = document.querySelector(".input-keterangan");
    this.inputDeadline = document.querySelector(".input-deadline");
    this.inputCheck = document.querySelector(".input-check");
    //
    this.inputSelesai = document.querySelector(".input-selesai");
    this.inputBelum = document.querySelector(".input-belum");
    //
    this.cariData = document.querySelector(".cari-data");
    this.btnCariData = document.querySelector(".btn-cari-data");
    //
    this.periksaPenyimpanan = localStorage.getItem("MATKUL_JADWAL");
    this.saveFile = [];
  }
  getResult() {
    return this.saveFile.some((sF) => sF.Matkul === this.inputMatkul.value);
  }
  setInput() {
    const data = {
      Id: new Date().getTime(),
      Matkul: this.inputMatkul.value,
      Keterangan: this.inputKeterangan.value,
      Deadline: this.inputDeadline.value,
      Cek: this.inputCheck.checked,
    };
    return data;
  }
  onClick(promiseData) {
    this.inputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.getResult();
      promiseData(this.getResult());
    });
  }
}
