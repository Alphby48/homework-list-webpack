import { matkulH } from "./route.js";
import { saveStorage } from "./localStorage.js";
export function promiseData(valIn) {
  console.log(valIn);
  return new Promise((resolve, reject) => {
    if (!valIn) {
      resolve(addData());
    } else {
      reject(alert("data sudah ada"));
    }
  });
}

function addData() {
  matkulH.setInput();

  matkulH.saveFile.push(matkulH.setInput());

  panggildata();
  reset();
}

export function panggildata() {
  const simpanBelum = matkulH.saveFile.filter((sF) => sF.Cek === false);
  const simpanSudah = matkulH.saveFile.filter((sF) => sF.Cek === true);
  if (simpanBelum) {
    const tambahPage = simpanBelum.map((sF) => addForm(sF));
    matkulH.inputBelum.innerHTML = tambahPage.join("");
  }
  if (simpanSudah) {
    const tambahPage2 = simpanSudah.map((sF) => addFormSelesai(sF));
    matkulH.inputSelesai.innerHTML = tambahPage2.join("");
  }
  saveStorage();
}

function reset() {
  matkulH.inputMatkul.value = "";
  matkulH.inputKeterangan.value = "";
  matkulH.inputDeadline.value = "";
  matkulH.inputCheck.checked = false;
}

export function addForm(sF) {
  return `
    <div class="card w-11/12 sm:w-2/5 my-3 bg-stone-100">
      <h5 class="card-header capitalize text-2xl text-blue-600">${sF.Matkul}</h5>
      <div class="card-body min-h-48 relative bg-yellow-50 dark:bg-slate-500">
        <h5 class="card-title text-red-500 dark:text-amber-50">Deadline : ${sF.Deadline}</h5>
        <p class="card-text mb-4 min-h-20 dark:text-neutral-200">
          Ket: ${sF.Keterangan}
        </p>
        <div class="col flex justify-between">
          <btn class="btn btn-primary butn-selesai" data-imdbid="${sF.Id}">Selesai</btn>
          <btn class="btn btn-danger butn-hapus" data-imdbid="${sF.Id}">Hapus</btn>
        </div>
      </div>
    </div>
  `;
}

export function addFormSelesai(sF) {
  return `
  <div class="card w-11/12 sm:w-2/5 my-3 bg-stone-100">
  <h5 class="card-header capitalize text-2xl text-blue-600">${sF.Matkul}</h5>
  <div class="card-body min-h-48 relative bg-yellow-50 dark:bg-slate-500">
    <h5 class="card-title text-red-500 dark:text-amber-50">Deadline : ${sF.Deadline}</h5>
    <p class="card-text mb-4 min-h-20 dark:text-neutral-200">
      Ket: ${sF.Keterangan}
    </p>
    <div class="col flex justify-between">
      <btn class="btn btn-primary butn-belum" data-imdbid="${sF.Id}">Belum</btn>
      <btn class="btn btn-danger butn-hapus" data-imdbid="${sF.Id}">Hapus</btn>
    </div>
  </div>
</div>
`;
}
