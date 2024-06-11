import * as bootstrap from "bootstrap";
import css from "./style.scss";
import { MatkulHomework } from "./script/matkul.config.js";
import { promiseData } from "./script/setData.js";
import { perubahanData } from "./script/perubahanData.js";
import { hapusData } from "./script/perubahanData.js";
import { promiseCari } from "./script/cariData.js";
import { showPr } from "./script/cariData.js";
import { panggildata } from "./script/setData.js";
//
export const matkulH = new MatkulHomework();
//
document.addEventListener("DOMContentLoaded", () => {
  if (matkulH.periksaPenyimpanan) {
    matkulH.saveFile = JSON.parse(matkulH.periksaPenyimpanan);
  }

  matkulH.onClick(promiseData);

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("butn-belum")) {
      perubahanData(false, e);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("butn-selesai")) {
      perubahanData(true, e);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("butn-hapus")) {
      hapusData(e);
    }
  });

  matkulH.btnCariData.addEventListener("submit", function (e) {
    e.preventDefault();
    const cari = matkulH.saveFile.filter((sF) =>
      sF.Matkul.toUpperCase().includes(matkulH.cariData.value.toUpperCase())
    );
    promiseCari(cari);
    showPr(promiseCari);
  });

  panggildata();
});

const toggel = document.querySelector(".peer");
const bodi = document.querySelector("html");
toggel.addEventListener("click", () => {
  bodi.classList.toggle("dark");
});
