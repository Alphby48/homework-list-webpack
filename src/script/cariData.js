import { addForm, addFormSelesai } from "./setData.js";
import { matkulH } from "../route.js";
export function promiseCari(cari) {
  return new Promise((resolve, reject) => {
    if (cari.length) {
      resolve(panggildataCari(cari));
    } else {
      reject(alert("pencarian anda tidak ada"));
    }
  });
}

export function showPr(promiseCari) {
  return promiseCari()
    .then((res) => res)
    .catch((res) => res);
}

function panggildataCari(cari) {
  const simpanBelum = cari.filter((sF) => sF.Cek === false);
  const simpanSudah = cari.filter((sF) => sF.Cek === true);
  if (simpanBelum) {
    const tambahPage = simpanBelum.map((sF) => addForm(sF));
    matkulH.inputBelum.innerHTML = tambahPage.join("");
  }
  if (simpanSudah) {
    const tambahPage2 = simpanSudah.map((sF) => addFormSelesai(sF));
    matkulH.inputSelesai.innerHTML = tambahPage2.join("");
  }
}
