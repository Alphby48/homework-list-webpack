import { matkulH } from "../route.js";
import { panggildata } from "./setData.js";

export function perubahanData(nilai, e) {
  const imdbid = e.target.dataset.imdbid;
  const values = matkulH.saveFile.filter((sv) => sv.Id == imdbid);
  values[0].Cek = nilai;
  panggildata();
}

export function hapusData(e) {
  const imdbid = e.target.dataset.imdbid;
  const hapusFile = matkulH.saveFile.findIndex(
    (hf) => hf.Id.toString() === imdbid
  );
  if (hapusFile !== -1) {
    matkulH.saveFile.splice(hapusFile, 1);
  }
  panggildata();
}
