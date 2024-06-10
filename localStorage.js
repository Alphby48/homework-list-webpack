import { matkulH } from "./route.js";
export function saveStorage() {
  localStorage.setItem("MATKUL_JADWAL", JSON.stringify(matkulH.saveFile));
}
