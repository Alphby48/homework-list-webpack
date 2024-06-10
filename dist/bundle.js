/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matkulH: () => (/* binding */ matkulH)
/* harmony export */ });
/* harmony import */ var _script_matkul_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/matkul.config.js */ "./src/script/matkul.config.js");
/* harmony import */ var _script_setData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/setData.js */ "./src/script/setData.js");
/* harmony import */ var _script_perubahanData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/perubahanData.js */ "./src/script/perubahanData.js");
/* harmony import */ var _script_cariData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/cariData.js */ "./src/script/cariData.js");







//
const matkulH = new _script_matkul_config_js__WEBPACK_IMPORTED_MODULE_0__.MatkulHomework();
//
document.addEventListener("DOMContentLoaded", () => {
  if (matkulH.periksaPenyimpanan) {
    matkulH.saveFile = JSON.parse(matkulH.periksaPenyimpanan);
  }

  matkulH.onClick(_script_setData_js__WEBPACK_IMPORTED_MODULE_1__.promiseData);

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("butn-belum")) {
      (0,_script_perubahanData_js__WEBPACK_IMPORTED_MODULE_2__.perubahanData)(false, e);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("butn-selesai")) {
      (0,_script_perubahanData_js__WEBPACK_IMPORTED_MODULE_2__.perubahanData)(true, e);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("butn-hapus")) {
      (0,_script_perubahanData_js__WEBPACK_IMPORTED_MODULE_2__.hapusData)(e);
    }
  });

  matkulH.btnCariData.addEventListener("submit", function (e) {
    e.preventDefault();
    const cari = matkulH.saveFile.filter((sF) =>
      sF.Matkul.toUpperCase().includes(matkulH.cariData.value.toUpperCase())
    );
    (0,_script_cariData_js__WEBPACK_IMPORTED_MODULE_3__.promiseCari)(cari);
    (0,_script_cariData_js__WEBPACK_IMPORTED_MODULE_3__.showPr)(_script_cariData_js__WEBPACK_IMPORTED_MODULE_3__.promiseCari);
  });

  (0,_script_setData_js__WEBPACK_IMPORTED_MODULE_1__.panggildata)();
});

const toggel = document.querySelector(".peer");
const bodi = document.querySelector("html");
toggel.addEventListener("click", () => {
  bodi.classList.toggle("dark");
});


/***/ }),

/***/ "./src/script/cariData.js":
/*!********************************!*\
  !*** ./src/script/cariData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   promiseCari: () => (/* binding */ promiseCari),
/* harmony export */   showPr: () => (/* binding */ showPr)
/* harmony export */ });
/* harmony import */ var _setData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setData.js */ "./src/script/setData.js");
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route.js */ "./src/route.js");


function promiseCari(cari) {
  return new Promise((resolve, reject) => {
    if (cari.length) {
      resolve(panggildataCari(cari));
    } else {
      reject(alert("pencarian anda tidak ada"));
    }
  });
}

function showPr(promiseCari) {
  return promiseCari()
    .then((res) => res)
    .catch((res) => res);
}

function panggildataCari(cari) {
  const simpanBelum = cari.filter((sF) => sF.Cek === false);
  const simpanSudah = cari.filter((sF) => sF.Cek === true);
  if (simpanBelum) {
    const tambahPage = simpanBelum.map((sF) => (0,_setData_js__WEBPACK_IMPORTED_MODULE_0__.addForm)(sF));
    _route_js__WEBPACK_IMPORTED_MODULE_1__.matkulH.inputBelum.innerHTML = tambahPage.join("");
  }
  if (simpanSudah) {
    const tambahPage2 = simpanSudah.map((sF) => (0,_setData_js__WEBPACK_IMPORTED_MODULE_0__.addFormSelesai)(sF));
    _route_js__WEBPACK_IMPORTED_MODULE_1__.matkulH.inputSelesai.innerHTML = tambahPage2.join("");
  }
}


/***/ }),

/***/ "./src/script/localStorage.js":
/*!************************************!*\
  !*** ./src/script/localStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveStorage: () => (/* binding */ saveStorage)
/* harmony export */ });
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.js */ "./src/route.js");

function saveStorage() {
  localStorage.setItem("MATKUL_JADWAL", JSON.stringify(_route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.saveFile));
}


/***/ }),

/***/ "./src/script/matkul.config.js":
/*!*************************************!*\
  !*** ./src/script/matkul.config.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatkulHomework: () => (/* binding */ MatkulHomework)
/* harmony export */ });
class MatkulHomework {
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


/***/ }),

/***/ "./src/script/perubahanData.js":
/*!*************************************!*\
  !*** ./src/script/perubahanData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hapusData: () => (/* binding */ hapusData),
/* harmony export */   perubahanData: () => (/* binding */ perubahanData)
/* harmony export */ });
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.js */ "./src/route.js");
/* harmony import */ var _setData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setData.js */ "./src/script/setData.js");



function perubahanData(nilai, e) {
  const imdbid = e.target.dataset.imdbid;
  const values = _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.saveFile.filter((sv) => sv.Id == imdbid);
  values[0].Cek = nilai;
  (0,_setData_js__WEBPACK_IMPORTED_MODULE_1__.panggildata)();
}

function hapusData(e) {
  const imdbid = e.target.dataset.imdbid;
  const hapusFile = _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.saveFile.findIndex(
    (hf) => hf.Id.toString() === imdbid
  );
  if (hapusFile !== -1) {
    _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.saveFile.splice(hapusFile, 1);
  }
  (0,_setData_js__WEBPACK_IMPORTED_MODULE_1__.panggildata)();
}


/***/ }),

/***/ "./src/script/setData.js":
/*!*******************************!*\
  !*** ./src/script/setData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addForm: () => (/* binding */ addForm),
/* harmony export */   addFormSelesai: () => (/* binding */ addFormSelesai),
/* harmony export */   panggildata: () => (/* binding */ panggildata),
/* harmony export */   promiseData: () => (/* binding */ promiseData)
/* harmony export */ });
/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route.js */ "./src/route.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/script/localStorage.js");


function promiseData(valIn) {
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
  _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.setInput();

  _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.saveFile.push(_route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.setInput());

  panggildata();
  reset();
}

function panggildata() {
  const simpanBelum = _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.saveFile.filter((sF) => sF.Cek === false);
  const simpanSudah = _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.saveFile.filter((sF) => sF.Cek === true);
  if (simpanBelum) {
    const tambahPage = simpanBelum.map((sF) => addForm(sF));
    _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.inputBelum.innerHTML = tambahPage.join("");
  }
  if (simpanSudah) {
    const tambahPage2 = simpanSudah.map((sF) => addFormSelesai(sF));
    _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.inputSelesai.innerHTML = tambahPage2.join("");
  }
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveStorage)();
}

function reset() {
  _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.inputMatkul.value = "";
  _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.inputKeterangan.value = "";
  _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.inputDeadline.value = "";
  _route_js__WEBPACK_IMPORTED_MODULE_0__.matkulH.inputCheck.checked = false;
}

function addForm(sF) {
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

function addFormSelesai(sF) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/route.js");
/******/ 	
/******/ })()
;