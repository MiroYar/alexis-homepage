/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./projects/alexis-homepage/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./projects/alexis-homepage/src/js/index.js":
/*!**************************************************!*\
  !*** ./projects/alexis-homepage/src/js/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_nav_nav003_nav003_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/nav/.nav003/nav003.js */ "./projects/alexis-homepage/src/modules/nav/.nav003/nav003.js");
/* harmony import */ var _modules_nav_nav003_nav003_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_nav003_nav003_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_other_sections_ourteam003_ourteam003_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/other-sections/.ourteam003/ourteam003.js */ "./projects/alexis-homepage/src/modules/other-sections/.ourteam003/ourteam003.js");
/* harmony import */ var _modules_feedbackpanels_feedbackpanel003_feedbackpanel003_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/feedbackpanels/.feedbackpanel003/feedbackpanel003.js */ "./projects/alexis-homepage/src/modules/feedbackpanels/.feedbackpanel003/feedbackpanel003.js");
/* harmony import */ var _modules_other_scrolled_scrolled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/other/.scrolled/scrolled */ "./projects/alexis-homepage/src/modules/other/.scrolled/scrolled.js");




window.addEventListener('load', _modules_other_sections_ourteam003_ourteam003_js__WEBPACK_IMPORTED_MODULE_1__["setEventsForTeamSection"]);




new _modules_other_scrolled_scrolled__WEBPACK_IMPORTED_MODULE_3__["Scrolled"]('.feedbackpanel__text-wrap').init();


/***/ }),

/***/ "./projects/alexis-homepage/src/modules/ajax.js":
/*!******************************************************!*\
  !*** ./projects/alexis-homepage/src/modules/ajax.js ***!
  \******************************************************/
/*! exports provided: ajax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
let ajax = (url, done) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            done(request.response);
        }
    });

    request.responseType =	"json";
    request.open('GET', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send();
}

/***/ }),

/***/ "./projects/alexis-homepage/src/modules/feedbackpanels/.feedbackpanel003/feedbackpanel003.js":
/*!***************************************************************************************************!*\
  !*** ./projects/alexis-homepage/src/modules/feedbackpanels/.feedbackpanel003/feedbackpanel003.js ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ajax */ "./projects/alexis-homepage/src/modules/ajax.js");


class FeedbackPanel {
    constructor(
        selector, // Предпочтительно указывать название класса (с точкой) панели, либо название ID
        // (с решоткой) панели, тогда предпочтительно чтобы названия класса и ID совпадали, либо
        // обязательно название класса указывать в опциях (третий параметр) в виде:
        // {classSelector: <название класса>}.
        data, // Массив из объектов, представлющих собой объекты, у которых key является частью
        // названия класса элемента панели (<название класса панели>__<key>), а value - значение
        // в зависиомоти от типа элемента (для img - ссылка на изображение, для p - текст, и т.д.).
        {
            // Опции.
            BEM = true,
            updatedElem = { img: ['img'], text: ['comment-wrap'] },
            updatedAttr = { img: 'src', text: 'textContent' },
            checkedMod, // Набор названий классовых CSS модификаторов (см. ниже).
            animMod,
            classSelector // Название класса панели без точки (см. выше).
        } = {}
    ) {
        // Название класса информационной панели.
        this._selector = classSelector || selector.slice(1);
        // Основной блок в DOM.
        this._panel = document.querySelector(`${selector}`);
        // Персонализированный набор данных.
        this._data = data;
        // Объект соодержащий список елементов с обновляемой информацией разбитых по типам (img -
        // изображения, text - текстовый), имеет вид:
        // {
        //     <тип>: [
        //         {
        //             element: <ссылка на элемент в DOM>,
        //             elemClass: <имя класса элемента>
        //         },
        //         ...
        //     ],
        //     ...
        // }
        this.BEM = BEM;
        this._updatedElem = this._getUpdatedElements.bind(this)(updatedElem);
        // Обновляемые атрибуты по умолчанию у img - src, у text - textContent.
        this._updatedAttr = updatedAttr;
        // Массив выбранных навигационных элементов, где певым указан индекс ранее выбранного
        // элемента, а вторым - индекс текущего.
        this._checkedInd;
        // Возможный набор названий классовых CSS модификаторов в зависимости от индекса выбранного
        // навигационнго элемента применяемого как непосредственно к выбранному элементу, так и к
        // панели в целом. CSS названия классов принимает вид (подставьте свои названия
        // вместо <...>): для панели - <название класса панели>_<название модификации>,
        // для навигационного элемента - <название класса панели>__nav-item_<название модификации>
        this._checkedMod = typeof checkedMod === 'string' ? [checkedMod] : checkedMod;
        // Объект у которого key - название класса, а value - название анимирующего модификатора.
        this._animMod = animMod;
        this._animElem = this._getAnimatedElements.bind(this)(Object.keys(this._animMod));
        // Массив из элементов навигационной панели.
        this._navItems = this._constructNavItems(
            this._panel.querySelector(`.${this._selector}__nav`)
        );
    }

    _getUpdatedElements(updatedElem) {
        for (const type in updatedElem) {
            updatedElem[type] = updatedElem[type].map(elemClass => {
                return {
                    element: this._panel.querySelector(
                        this.BEM ? `.${this._selector}__${elemClass}` : `${elemClass}`
                    ),
                    elemClass
                };
            });
        }
        return updatedElem;
    }

    _getAnimatedElements(animElem) {
        return animElem.reduce((result, elemClass) => {
            result[elemClass] = this._panel.querySelector(
                this.BEM ? `.${this._selector}__${elemClass}` : `${elemClass}`
            );
            return result;
        }, {});
    }

    _constructNavItems(parent) {
        const navItems = [];
        for (let i = this._data.length; i > 0; i--) {
            const navItem = document.createElement('div');
            const props = { className: this.BEM ? `${this._selector}__nav-item` : '' };
            Object.keys(props).forEach(key => (navItem[key] = props[key]));
            parent.appendChild(navItem);
            navItems.push(navItem);
        }
        return navItems;
    }

    _toggleAnimatingClasses(action) {
        for (const elemClass in this._animElem) {
            this._animElem[elemClass].classList[action](
                this.BEM
                    ? `${this._selector}__${elemClass}_${this._animMod[elemClass]}`
                    : `${this._animMod[elemClass]}`
            );
        }
    }

    _mousedownEventForNavItems(handler, event) {
        handler.bind(this)(event);
        if (this._animMod) {
            this._panel.addEventListener(
                'transitionend',
                this._transitionEndEventForComment.bind(this, this._updateInformation),
                { once: true }
            );
            // Добавление трансформирующих классов к элементам.
            this._toggleAnimatingClasses.bind(this)('add');
        } else {
            this._updateInformation.bind(this)();
        }
    }

    _transitionEndEventForComment(handler, event) {
        handler.bind(this)();
        // Удаление трансформирующих классов у элементов.
        this._toggleAnimatingClasses.bind(this)('remove');
    }

    _toggleCheckedNavItemClass(action, itemInd) {
        this._navItems[itemInd].classList[action](`${this._selector}__nav-item_checked`);
        // Изменение модификатора класса выбранного навигационного элемента.
        if (this._checkedMod) {
            this._navItems[itemInd].classList[action](
                this.BEM
                    ? `${this._selector}__nav-item_${
                          this._checkedMod[itemInd % this._checkedMod.length]
                      }`
                    : `${this._checkedMod[itemInd % this._checkedMod.length]}`
            );
        }
    }

    _checkedNavItem(event) {
        const indPrev = (this._checkedInd[0] = this._checkedInd[1]);
        const indCurr = (this._checkedInd[1] = this._navItems.indexOf(event.target));
        // Изменение класса выбранного навигационного элемента.
        this._toggleCheckedNavItemClass('remove', indPrev);
        this._toggleCheckedNavItemClass('add', indCurr);
    }

    _togglePanelModClass(action, itemInd) {
        this._panel.classList[action](
            `${this._selector}_${this._checkedMod[itemInd % this._checkedMod.length]}`
        );
    }

    _updateInformation() {
        // Изменение модификатора класса информационной панели.
        if (this._checkedMod) {
            this._togglePanelModClass.bind(this)('remove', this._checkedInd[0]);
            this._togglePanelModClass.bind(this)('add', this._checkedInd[1]);
        }
        // Обновление информации на панеле.
        let data = this._data[this._checkedInd[1]];
        for (const type in this._updatedElem) {
            this._updatedElem[type].forEach(elementObj => {
                const element = elementObj['element'];
                const attr = this._updatedAttr[type];
                const elemClass = elementObj['elemClass'];
                element[attr] = data[elemClass];
            });
        }
    }

    init(ind = 0) {
        // Инициализация
        this._checkedInd = [null, ind];
        this._checkedNavItem({ target: this._navItems[ind] });
        this._updateInformation({ ind });

        // Добавление слушителя событий.
        this._navItems.forEach(navItem => {
            navItem.addEventListener(
                'mousedown',
                this._mousedownEventForNavItems.bind(this, this._checkedNavItem)
            );
        });
    }
}

Object(_ajax__WEBPACK_IMPORTED_MODULE_0__["ajax"])('./json/clientfeedback.json', response => {
    new FeedbackPanel('.feedbackpanel', response, {
        updatedElem: {
            img: ['img'],
            text: ['name', 'signature', 'prof', 'text']
        },
        animMod: { comment: 'constriction', img: 'filter' },
        checkedMod: ['red', 'green', 'blue', 'orange']
    }).init();
});


/***/ }),

/***/ "./projects/alexis-homepage/src/modules/nav/.nav003/nav003.js":
/*!********************************************************************!*\
  !*** ./projects/alexis-homepage/src/modules/nav/.nav003/nav003.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function navMod() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const MAIN_NAV = document.querySelector('.main-nav');
    if (scrolled > 0) {
        MAIN_NAV.classList.add('main-nav_onscroll');
    } else {
        MAIN_NAV.classList.remove('main-nav_onscroll');
    }
}
/* СОБЫТИЯ */
window.addEventListener('scroll', navMod);
/* СОБЫТИЯ */
window.addEventListener('load', navMod);

/***/ }),

/***/ "./projects/alexis-homepage/src/modules/other-sections/.ourteam003/ourteam003.js":
/*!***************************************************************************************!*\
  !*** ./projects/alexis-homepage/src/modules/other-sections/.ourteam003/ourteam003.js ***!
  \***************************************************************************************/
/*! exports provided: setEventsForTeamSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEventsForTeamSection", function() { return setEventsForTeamSection; });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ajax */ "./projects/alexis-homepage/src/modules/ajax.js");


function setArrowPositionXRelativeToCard(arrow, card) {
    const cardParent = card.parentElement;
    const coorCard = card.getBoundingClientRect();
    const coorCardPar = cardParent.getBoundingClientRect();
    const x = coorCard.left - coorCardPar.left + (card.offsetWidth / 2) - (arrow.offsetWidth / 2);
    arrow.style.transform = `translateX(${x}px)`;
}

function setAboutSpecialist(specialistName, data, event) {
    const ABOUT_SPECIALIST_WRAP = event.currentTarget;

    const TITLE = ABOUT_SPECIALIST_WRAP.querySelector('.about-specialist__title');
    const TEXT = ABOUT_SPECIALIST_WRAP.querySelector('.about-specialist__text');

    // Редактирование описания о специалисте.
    TITLE.innerHTML = `About ${specialistName.match(/[^\s]+/)[0]}`;
    TEXT.innerHTML = data.about;

    // Редактирование ссылок контактов специалиста.
    const CONTACTS = ABOUT_SPECIALIST_WRAP.getElementsByTagName('li');
    for (let i = 0; i < CONTACTS.length; i++) {
        const contactsItem = CONTACTS[i];
        contactsItem.classList.forEach(className => {
            if (/contact-item__/.test(className)) {
                const contactName = className.replace(/contact-item__/, '');
                const a = contactsItem.getElementsByTagName('a');
                if (data.contacts.hasOwnProperty(contactName)) {
                    contactsItem.style.display = '';
                    a[0].href = `${data.contacts[contactName]}`;
                }
                else {
                    contactsItem.style.display = 'none';
                    a[0].href = '#';
                }
            }
        });
    }

    // Удаление класса у блока с описанием о специалисте для появления блока.
    ABOUT_SPECIALIST_WRAP.classList.remove('about-specialist__wrap_hidden');
}

function setFocusEventForCard(arrow, specialistsData, aboutSpecialistWrap, event) {
    let card = event.target;

    setArrowPositionXRelativeToCard(arrow, card);

    const SPECIALIST_NAME = card.querySelector('.team-card__name').innerHTML;
    const DATA = specialistsData[`${SPECIALIST_NAME}`];

    // Присвоение класса блоку с описанием о специалисте для скрытия описания с последующего его редактирования и появления вновь.
    aboutSpecialistWrap.addEventListener('transitionend', setAboutSpecialist.bind(null, SPECIALIST_NAME, DATA), { once: true });
    aboutSpecialistWrap.classList.add('about-specialist__wrap_hidden');
}

function setEventsForTeamSection() {
    const OURTEAM = document.querySelector('.ourteam');
    const ABOUT_SPECIALIST = OURTEAM.querySelector('.about-specialist');
    const ARROW = ABOUT_SPECIALIST.querySelector('.about-specialist__arrow');
    const ABOUT_SPECIALIST_WRAP = ABOUT_SPECIALIST.querySelector('.about-specialist__wrap');

    // AJAX запрос для получения данных о специалистах.
    Object(_ajax__WEBPACK_IMPORTED_MODULE_0__["ajax"])('./json/ourteam.json',
        (response) => {
            const SPECIALISTS_DATA = response;

            // Выбор карты специалиста по умолчанию.
            setFocusEventForCard(ARROW, SPECIALISTS_DATA, ABOUT_SPECIALIST_WRAP, { target: OURTEAM.querySelector('.team-card') });

            // Назначение действий при выборе карты специалиста.
            OURTEAM.addEventListener('focusin', setFocusEventForCard.bind(null, ARROW, SPECIALISTS_DATA, ABOUT_SPECIALIST_WRAP));
        }
    );
}

/***/ }),

/***/ "./projects/alexis-homepage/src/modules/other/.scrolled/scrolled.js":
/*!**************************************************************************!*\
  !*** ./projects/alexis-homepage/src/modules/other/.scrolled/scrolled.js ***!
  \**************************************************************************/
/*! exports provided: Scrolled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrolled", function() { return Scrolled; });
class Scrolled {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.right = getComputedStyle(this.element).paddingRight;
    }

    _scrollOverflow() {
        let style = this.element.style;
        let overflow = style.overflow || getComputedStyle(this.element).overflow;
        if (overflow !== 'scroll') {
            style.paddingRight = '0px';
            style.overflow = 'scroll';
        }
    }

    _hiddenOverflow() {
        let style = this.element.style;
        let overflow = style.overflow || getComputedStyle(this.element).overflow;
        if (overflow === 'scroll') {
            style.paddingRight = this.right || '0px';
            style.overflow = 'hidden';
        }
    }

    init() {
        this.element.addEventListener('mouseover', this._scrollOverflow.bind(this));
        this.element.addEventListener('touchstart', this._scrollOverflow.bind(this));
        this.element.addEventListener('mouseout', this._hiddenOverflow.bind(this));
        this.element.addEventListener('touchend', this._hiddenOverflow.bind(this));
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdHMvYWxleGlzLWhvbWVwYWdlL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0cy9hbGV4aXMtaG9tZXBhZ2Uvc3JjL21vZHVsZXMvYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0cy9hbGV4aXMtaG9tZXBhZ2Uvc3JjL21vZHVsZXMvZmVlZGJhY2twYW5lbHMvLmZlZWRiYWNrcGFuZWwwMDMvZmVlZGJhY2twYW5lbDAwMy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0cy9hbGV4aXMtaG9tZXBhZ2Uvc3JjL21vZHVsZXMvbmF2Ly5uYXYwMDMvbmF2MDAzLmpzIiwid2VicGFjazovLy8uL3Byb2plY3RzL2FsZXhpcy1ob21lcGFnZS9zcmMvbW9kdWxlcy9vdGhlci1zZWN0aW9ucy8ub3VydGVhbTAwMy9vdXJ0ZWFtMDAzLmpzIiwid2VicGFjazovLy8uL3Byb2plY3RzL2FsZXhpcy1ob21lcGFnZS9zcmMvbW9kdWxlcy9vdGhlci8uc2Nyb2xsZWQvc2Nyb2xsZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wcm9qZWN0cy9hbGV4aXMtaG9tZXBhZ2Uvc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9tb2R1bGVzL25hdi8ubmF2MDAzL25hdjAwMy5qcyc7XHJcblxyXG5pbXBvcnQgeyBzZXRFdmVudHNGb3JUZWFtU2VjdGlvbiB9IGZyb20gJy4uL21vZHVsZXMvb3RoZXItc2VjdGlvbnMvLm91cnRlYW0wMDMvb3VydGVhbTAwMy5qcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNldEV2ZW50c0ZvclRlYW1TZWN0aW9uKTtcclxuXHJcbmltcG9ydCAnLi4vbW9kdWxlcy9mZWVkYmFja3BhbmVscy8uZmVlZGJhY2twYW5lbDAwMy9mZWVkYmFja3BhbmVsMDAzLmpzJztcclxuXHJcbmltcG9ydCB7IFNjcm9sbGVkIH0gZnJvbSAnLi4vbW9kdWxlcy9vdGhlci8uc2Nyb2xsZWQvc2Nyb2xsZWQnO1xyXG5uZXcgU2Nyb2xsZWQoJy5mZWVkYmFja3BhbmVsX190ZXh0LXdyYXAnKS5pbml0KCk7XHJcbiIsImV4cG9ydCBsZXQgYWpheCA9ICh1cmwsIGRvbmUpID0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgZG9uZShyZXF1ZXN0LnJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9XHRcImpzb25cIjtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsKTtcclxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcbn0iLCJpbXBvcnQgeyBhamF4IH0gZnJvbSAnLi4vLi4vYWpheCc7XHJcblxyXG5jbGFzcyBGZWVkYmFja1BhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHNlbGVjdG9yLCAvLyDQn9GA0LXQtNC/0L7Rh9GC0LjRgtC10LvRjNC90L4g0YPQutCw0LfRi9Cy0LDRgtGMINC90LDQt9Cy0LDQvdC40LUg0LrQu9Cw0YHRgdCwICjRgSDRgtC+0YfQutC+0LkpINC/0LDQvdC10LvQuCwg0LvQuNCx0L4g0L3QsNC30LLQsNC90LjQtSBJRFxyXG4gICAgICAgIC8vICjRgSDRgNC10YjQvtGC0LrQvtC5KSDQv9Cw0L3QtdC70LgsINGC0L7Qs9C00LAg0L/RgNC10LTQv9C+0YfRgtC40YLQtdC70YzQvdC+INGH0YLQvtCx0Ysg0L3QsNC30LLQsNC90LjRjyDQutC70LDRgdGB0LAg0LggSUQg0YHQvtCy0L/QsNC00LDQu9C4LCDQu9C40LHQvlxyXG4gICAgICAgIC8vINC+0LHRj9C30LDRgtC10LvRjNC90L4g0L3QsNC30LLQsNC90LjQtSDQutC70LDRgdGB0LAg0YPQutCw0LfRi9Cy0LDRgtGMINCyINC+0L/RhtC40Y/RhSAo0YLRgNC10YLQuNC5INC/0LDRgNCw0LzQtdGC0YApINCyINCy0LjQtNC1OlxyXG4gICAgICAgIC8vIHtjbGFzc1NlbGVjdG9yOiA80L3QsNC30LLQsNC90LjQtSDQutC70LDRgdGB0LA+fS5cclxuICAgICAgICBkYXRhLCAvLyDQnNCw0YHRgdC40LIg0LjQtyDQvtCx0YrQtdC60YLQvtCyLCDQv9GA0LXQtNGB0YLQsNCy0LvRjtGJ0LjRhSDRgdC+0LHQvtC5INC+0LHRitC10LrRgtGLLCDRgyDQutC+0YLQvtGA0YvRhSBrZXkg0Y/QstC70Y/QtdGC0YHRjyDRh9Cw0YHRgtGM0Y5cclxuICAgICAgICAvLyDQvdCw0LfQstCw0L3QuNGPINC60LvQsNGB0YHQsCDRjdC70LXQvNC10L3RgtCwINC/0LDQvdC10LvQuCAoPNC90LDQt9Cy0LDQvdC40LUg0LrQu9Cw0YHRgdCwINC/0LDQvdC10LvQuD5fXzxrZXk+KSwg0LAgdmFsdWUgLSDQt9C90LDRh9C10L3QuNC1XHJcbiAgICAgICAgLy8g0LIg0LfQsNCy0LjRgdC40L7QvNC+0YLQuCDQvtGCINGC0LjQv9CwINGN0LvQtdC80LXQvdGC0LAgKNC00LvRjyBpbWcgLSDRgdGB0YvQu9C60LAg0L3QsCDQuNC30L7QsdGA0LDQttC10L3QuNC1LCDQtNC70Y8gcCAtINGC0LXQutGB0YIsINC4INGCLtC0LikuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICBCRU0gPSB0cnVlLFxyXG4gICAgICAgICAgICB1cGRhdGVkRWxlbSA9IHsgaW1nOiBbJ2ltZyddLCB0ZXh0OiBbJ2NvbW1lbnQtd3JhcCddIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdHRyID0geyBpbWc6ICdzcmMnLCB0ZXh0OiAndGV4dENvbnRlbnQnIH0sXHJcbiAgICAgICAgICAgIGNoZWNrZWRNb2QsIC8vINCd0LDQsdC+0YAg0L3QsNC30LLQsNC90LjQuSDQutC70LDRgdGB0L7QstGL0YUgQ1NTINC80L7QtNC40YTQuNC60LDRgtC+0YDQvtCyICjRgdC8LiDQvdC40LbQtSkuXHJcbiAgICAgICAgICAgIGFuaW1Nb2QsXHJcbiAgICAgICAgICAgIGNsYXNzU2VsZWN0b3IgLy8g0J3QsNC30LLQsNC90LjQtSDQutC70LDRgdGB0LAg0L/QsNC90LXQu9C4INCx0LXQtyDRgtC+0YfQutC4ICjRgdC8LiDQstGL0YjQtSkuXHJcbiAgICAgICAgfSA9IHt9XHJcbiAgICApIHtcclxuICAgICAgICAvLyDQndCw0LfQstCw0L3QuNC1INC60LvQsNGB0YHQsCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3QvtC5INC/0LDQvdC10LvQuC5cclxuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IGNsYXNzU2VsZWN0b3IgfHwgc2VsZWN0b3Iuc2xpY2UoMSk7XHJcbiAgICAgICAgLy8g0J7RgdC90L7QstC90L7QuSDQsdC70L7QuiDQsiBET00uXHJcbiAgICAgICAgdGhpcy5fcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3NlbGVjdG9yfWApO1xyXG4gICAgICAgIC8vINCf0LXRgNGB0L7QvdCw0LvQuNC30LjRgNC+0LLQsNC90L3Ri9C5INC90LDQsdC+0YAg0LTQsNC90L3Ri9GFLlxyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgICAgIC8vINCe0LHRitC10LrRgiDRgdC+0L7QtNC10YDQttCw0YnQuNC5INGB0L/QuNGB0L7QuiDQtdC70LXQvNC10L3RgtC+0LIg0YEg0L7QsdC90L7QstC70Y/QtdC80L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQtdC5INGA0LDQt9Cx0LjRgtGL0YUg0L/QviDRgtC40L/QsNC8IChpbWcgLVxyXG4gICAgICAgIC8vINC40LfQvtCx0YDQsNC20LXQvdC40Y8sIHRleHQgLSDRgtC10LrRgdGC0L7QstGL0LkpLCDQuNC80LXQtdGCINCy0LjQtDpcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIDzRgtC40L8+OiBbXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxlbWVudDogPNGB0YHRi9C70LrQsCDQvdCwINGN0LvQtdC80LXQvdGCINCyIERPTT4sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxlbUNsYXNzOiA80LjQvNGPINC60LvQsNGB0YHQsCDRjdC70LXQvNC10L3RgtCwPlxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIC4uLlxyXG4gICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgIC8vICAgICAuLi5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5CRU0gPSBCRU07XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlZEVsZW0gPSB0aGlzLl9nZXRVcGRhdGVkRWxlbWVudHMuYmluZCh0aGlzKSh1cGRhdGVkRWxlbSk7XHJcbiAgICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC80YvQtSDQsNGC0YDQuNCx0YPRgtGLINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINGDIGltZyAtIHNyYywg0YMgdGV4dCAtIHRleHRDb250ZW50LlxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZWRBdHRyID0gdXBkYXRlZEF0dHI7XHJcbiAgICAgICAgLy8g0JzQsNGB0YHQuNCyINCy0YvQsdGA0LDQvdC90YvRhSDQvdCw0LLQuNCz0LDRhtC40L7QvdC90YvRhSDRjdC70LXQvNC10L3RgtC+0LIsINCz0LTQtSDQv9C10LLRi9C8INGD0LrQsNC30LDQvSDQuNC90LTQtdC60YEg0YDQsNC90LXQtSDQstGL0LHRgNCw0L3QvdC+0LPQvlxyXG4gICAgICAgIC8vINGN0LvQtdC80LXQvdGC0LAsINCwINCy0YLQvtGA0YvQvCAtINC40L3QtNC10LrRgSDRgtC10LrRg9GJ0LXQs9C+LlxyXG4gICAgICAgIHRoaXMuX2NoZWNrZWRJbmQ7XHJcbiAgICAgICAgLy8g0JLQvtC30LzQvtC20L3Ri9C5INC90LDQsdC+0YAg0L3QsNC30LLQsNC90LjQuSDQutC70LDRgdGB0L7QstGL0YUgQ1NTINC80L7QtNC40YTQuNC60LDRgtC+0YDQvtCyINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQuNC90LTQtdC60YHQsCDQstGL0LHRgNCw0L3QvdC+0LPQvlxyXG4gICAgICAgIC8vINC90LDQstC40LPQsNGG0LjQvtC90L3Qs9C+INGN0LvQtdC80LXQvdGC0LAg0L/RgNC40LzQtdC90Y/QtdC80L7Qs9C+INC60LDQuiDQvdC10L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90L4g0Log0LLRi9Cx0YDQsNC90L3QvtC80YMg0Y3Qu9C10LzQtdC90YLRgywg0YLQsNC6INC4INC6XHJcbiAgICAgICAgLy8g0L/QsNC90LXQu9C4INCyINGG0LXQu9C+0LwuIENTUyDQvdCw0LfQstCw0L3QuNGPINC60LvQsNGB0YHQvtCyINC/0YDQuNC90LjQvNCw0LXRgiDQstC40LQgKNC/0L7QtNGB0YLQsNCy0YzRgtC1INGB0LLQvtC4INC90LDQt9Cy0LDQvdC40Y9cclxuICAgICAgICAvLyDQstC80LXRgdGC0L4gPC4uLj4pOiDQtNC70Y8g0L/QsNC90LXQu9C4IC0gPNC90LDQt9Cy0LDQvdC40LUg0LrQu9Cw0YHRgdCwINC/0LDQvdC10LvQuD5fPNC90LDQt9Cy0LDQvdC40LUg0LzQvtC00LjRhNC40LrQsNGG0LjQuD4sXHJcbiAgICAgICAgLy8g0LTQu9GPINC90LDQstC40LPQsNGG0LjQvtC90L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCAtIDzQvdCw0LfQstCw0L3QuNC1INC60LvQsNGB0YHQsCDQv9Cw0L3QtdC70Lg+X19uYXYtaXRlbV880L3QsNC30LLQsNC90LjQtSDQvNC+0LTQuNGE0LjQutCw0YbQuNC4PlxyXG4gICAgICAgIHRoaXMuX2NoZWNrZWRNb2QgPSB0eXBlb2YgY2hlY2tlZE1vZCA9PT0gJ3N0cmluZycgPyBbY2hlY2tlZE1vZF0gOiBjaGVja2VkTW9kO1xyXG4gICAgICAgIC8vINCe0LHRitC10LrRgiDRgyDQutC+0YLQvtGA0L7Qs9C+IGtleSAtINC90LDQt9Cy0LDQvdC40LUg0LrQu9Cw0YHRgdCwLCDQsCB2YWx1ZSAtINC90LDQt9Cy0LDQvdC40LUg0LDQvdC40LzQuNGA0YPRjtGJ0LXQs9C+INC80L7QtNC40YTQuNC60LDRgtC+0YDQsC5cclxuICAgICAgICB0aGlzLl9hbmltTW9kID0gYW5pbU1vZDtcclxuICAgICAgICB0aGlzLl9hbmltRWxlbSA9IHRoaXMuX2dldEFuaW1hdGVkRWxlbWVudHMuYmluZCh0aGlzKShPYmplY3Qua2V5cyh0aGlzLl9hbmltTW9kKSk7XHJcbiAgICAgICAgLy8g0JzQsNGB0YHQuNCyINC40Lcg0Y3Qu9C10LzQtdC90YLQvtCyINC90LDQstC40LPQsNGG0LjQvtC90L3QvtC5INC/0LDQvdC10LvQuC5cclxuICAgICAgICB0aGlzLl9uYXZJdGVtcyA9IHRoaXMuX2NvbnN0cnVjdE5hdkl0ZW1zKFxyXG4gICAgICAgICAgICB0aGlzLl9wYW5lbC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9zZWxlY3Rvcn1fX25hdmApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VXBkYXRlZEVsZW1lbnRzKHVwZGF0ZWRFbGVtKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIGluIHVwZGF0ZWRFbGVtKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRFbGVtW3R5cGVdID0gdXBkYXRlZEVsZW1bdHlwZV0ubWFwKGVsZW1DbGFzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX3BhbmVsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQkVNID8gYC4ke3RoaXMuX3NlbGVjdG9yfV9fJHtlbGVtQ2xhc3N9YCA6IGAke2VsZW1DbGFzc31gXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtQ2xhc3NcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXBkYXRlZEVsZW07XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEFuaW1hdGVkRWxlbWVudHMoYW5pbUVsZW0pIHtcclxuICAgICAgICByZXR1cm4gYW5pbUVsZW0ucmVkdWNlKChyZXN1bHQsIGVsZW1DbGFzcykgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRbZWxlbUNsYXNzXSA9IHRoaXMuX3BhbmVsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJFTSA/IGAuJHt0aGlzLl9zZWxlY3Rvcn1fXyR7ZWxlbUNsYXNzfWAgOiBgJHtlbGVtQ2xhc3N9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY29uc3RydWN0TmF2SXRlbXMocGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fZGF0YS5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHsgY2xhc3NOYW1lOiB0aGlzLkJFTSA/IGAke3RoaXMuX3NlbGVjdG9yfV9fbmF2LWl0ZW1gIDogJycgfTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IChuYXZJdGVtW2tleV0gPSBwcm9wc1trZXldKSk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuYXZJdGVtKTtcclxuICAgICAgICAgICAgbmF2SXRlbXMucHVzaChuYXZJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5hdkl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVBbmltYXRpbmdDbGFzc2VzKGFjdGlvbikge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbUNsYXNzIGluIHRoaXMuX2FuaW1FbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1FbGVtW2VsZW1DbGFzc10uY2xhc3NMaXN0W2FjdGlvbl0oXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJFTVxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7dGhpcy5fc2VsZWN0b3J9X18ke2VsZW1DbGFzc31fJHt0aGlzLl9hbmltTW9kW2VsZW1DbGFzc119YFxyXG4gICAgICAgICAgICAgICAgICAgIDogYCR7dGhpcy5fYW5pbU1vZFtlbGVtQ2xhc3NdfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX21vdXNlZG93bkV2ZW50Rm9yTmF2SXRlbXMoaGFuZGxlciwgZXZlbnQpIHtcclxuICAgICAgICBoYW5kbGVyLmJpbmQodGhpcykoZXZlbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmltTW9kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhbmVsLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uRW5kRXZlbnRGb3JDb21tZW50LmJpbmQodGhpcywgdGhpcy5fdXBkYXRlSW5mb3JtYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0YLRgNCw0L3RgdGE0L7RgNC80LjRgNGD0Y7RidC40YUg0LrQu9Cw0YHRgdC+0LIg0Log0Y3Qu9C10LzQtdC90YLQsNC8LlxyXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVBbmltYXRpbmdDbGFzc2VzLmJpbmQodGhpcykoJ2FkZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUluZm9ybWF0aW9uLmJpbmQodGhpcykoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3RyYW5zaXRpb25FbmRFdmVudEZvckNvbW1lbnQoaGFuZGxlciwgZXZlbnQpIHtcclxuICAgICAgICBoYW5kbGVyLmJpbmQodGhpcykoKTtcclxuICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1INGC0YDQsNC90YHRhNC+0YDQvNC40YDRg9GO0YnQuNGFINC60LvQsNGB0YHQvtCyINGDINGN0LvQtdC80LXQvdGC0L7Qsi5cclxuICAgICAgICB0aGlzLl90b2dnbGVBbmltYXRpbmdDbGFzc2VzLmJpbmQodGhpcykoJ3JlbW92ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVDaGVja2VkTmF2SXRlbUNsYXNzKGFjdGlvbiwgaXRlbUluZCkge1xyXG4gICAgICAgIHRoaXMuX25hdkl0ZW1zW2l0ZW1JbmRdLmNsYXNzTGlzdFthY3Rpb25dKGAke3RoaXMuX3NlbGVjdG9yfV9fbmF2LWl0ZW1fY2hlY2tlZGApO1xyXG4gICAgICAgIC8vINCY0LfQvNC10L3QtdC90LjQtSDQvNC+0LTQuNGE0LjQutCw0YLQvtGA0LAg0LrQu9Cw0YHRgdCwINCy0YvQsdGA0LDQvdC90L7Qs9C+INC90LDQstC40LPQsNGG0LjQvtC90L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsC5cclxuICAgICAgICBpZiAodGhpcy5fY2hlY2tlZE1vZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9uYXZJdGVtc1tpdGVtSW5kXS5jbGFzc0xpc3RbYWN0aW9uXShcclxuICAgICAgICAgICAgICAgIHRoaXMuQkVNXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHt0aGlzLl9zZWxlY3Rvcn1fX25hdi1pdGVtXyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tlZE1vZFtpdGVtSW5kICUgdGhpcy5fY2hlY2tlZE1vZC5sZW5ndGhdXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogYCR7dGhpcy5fY2hlY2tlZE1vZFtpdGVtSW5kICUgdGhpcy5fY2hlY2tlZE1vZC5sZW5ndGhdfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrZWROYXZJdGVtKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5kUHJldiA9ICh0aGlzLl9jaGVja2VkSW5kWzBdID0gdGhpcy5fY2hlY2tlZEluZFsxXSk7XHJcbiAgICAgICAgY29uc3QgaW5kQ3VyciA9ICh0aGlzLl9jaGVja2VkSW5kWzFdID0gdGhpcy5fbmF2SXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpKTtcclxuICAgICAgICAvLyDQmNC30LzQtdC90LXQvdC40LUg0LrQu9Cw0YHRgdCwINCy0YvQsdGA0LDQvdC90L7Qs9C+INC90LDQstC40LPQsNGG0LjQvtC90L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsC5cclxuICAgICAgICB0aGlzLl90b2dnbGVDaGVja2VkTmF2SXRlbUNsYXNzKCdyZW1vdmUnLCBpbmRQcmV2KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVDaGVja2VkTmF2SXRlbUNsYXNzKCdhZGQnLCBpbmRDdXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBfdG9nZ2xlUGFuZWxNb2RDbGFzcyhhY3Rpb24sIGl0ZW1JbmQpIHtcclxuICAgICAgICB0aGlzLl9wYW5lbC5jbGFzc0xpc3RbYWN0aW9uXShcclxuICAgICAgICAgICAgYCR7dGhpcy5fc2VsZWN0b3J9XyR7dGhpcy5fY2hlY2tlZE1vZFtpdGVtSW5kICUgdGhpcy5fY2hlY2tlZE1vZC5sZW5ndGhdfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVJbmZvcm1hdGlvbigpIHtcclxuICAgICAgICAvLyDQmNC30LzQtdC90LXQvdC40LUg0LzQvtC00LjRhNC40LrQsNGC0L7RgNCwINC60LvQsNGB0YHQsCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3QvtC5INC/0LDQvdC10LvQuC5cclxuICAgICAgICBpZiAodGhpcy5fY2hlY2tlZE1vZCkge1xyXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVQYW5lbE1vZENsYXNzLmJpbmQodGhpcykoJ3JlbW92ZScsIHRoaXMuX2NoZWNrZWRJbmRbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVQYW5lbE1vZENsYXNzLmJpbmQodGhpcykoJ2FkZCcsIHRoaXMuX2NoZWNrZWRJbmRbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQuNC90YTQvtGA0LzQsNGG0LjQuCDQvdCwINC/0LDQvdC10LvQtS5cclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGFbdGhpcy5fY2hlY2tlZEluZFsxXV07XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRoaXMuX3VwZGF0ZWRFbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZWRFbGVtW3R5cGVdLmZvckVhY2goZWxlbWVudE9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9ialsnZWxlbWVudCddO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX3VwZGF0ZWRBdHRyW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbUNsYXNzID0gZWxlbWVudE9ialsnZWxlbUNsYXNzJ107XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJdID0gZGF0YVtlbGVtQ2xhc3NdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChpbmQgPSAwKSB7XHJcbiAgICAgICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y9cclxuICAgICAgICB0aGlzLl9jaGVja2VkSW5kID0gW251bGwsIGluZF07XHJcbiAgICAgICAgdGhpcy5fY2hlY2tlZE5hdkl0ZW0oeyB0YXJnZXQ6IHRoaXMuX25hdkl0ZW1zW2luZF0gfSk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSW5mb3JtYXRpb24oeyBpbmQgfSk7XHJcblxyXG4gICAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INGB0LvRg9GI0LjRgtC10LvRjyDRgdC+0LHRi9GC0LjQuS5cclxuICAgICAgICB0aGlzLl9uYXZJdGVtcy5mb3JFYWNoKG5hdkl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAnbW91c2Vkb3duJyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlZG93bkV2ZW50Rm9yTmF2SXRlbXMuYmluZCh0aGlzLCB0aGlzLl9jaGVja2VkTmF2SXRlbSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuYWpheCgnLi9qc29uL2NsaWVudGZlZWRiYWNrLmpzb24nLCByZXNwb25zZSA9PiB7XHJcbiAgICBuZXcgRmVlZGJhY2tQYW5lbCgnLmZlZWRiYWNrcGFuZWwnLCByZXNwb25zZSwge1xyXG4gICAgICAgIHVwZGF0ZWRFbGVtOiB7XHJcbiAgICAgICAgICAgIGltZzogWydpbWcnXSxcclxuICAgICAgICAgICAgdGV4dDogWyduYW1lJywgJ3NpZ25hdHVyZScsICdwcm9mJywgJ3RleHQnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbU1vZDogeyBjb21tZW50OiAnY29uc3RyaWN0aW9uJywgaW1nOiAnZmlsdGVyJyB9LFxyXG4gICAgICAgIGNoZWNrZWRNb2Q6IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnb3JhbmdlJ11cclxuICAgIH0pLmluaXQoKTtcclxufSk7XHJcbiIsImZ1bmN0aW9uIG5hdk1vZCgpIHtcclxuICAgIGxldCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgTUFJTl9OQVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcclxuICAgIGlmIChzY3JvbGxlZCA+IDApIHtcclxuICAgICAgICBNQUlOX05BVi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdl9vbnNjcm9sbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBNQUlOX05BVi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdl9vbnNjcm9sbCcpO1xyXG4gICAgfVxyXG59XHJcbi8qINCh0J7QkdCr0KLQmNCvICovXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBuYXZNb2QpO1xyXG4vKiDQodCe0JHQq9Ci0JjQryAqL1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG5hdk1vZCk7IiwiaW1wb3J0IHsgYWpheCB9IGZyb20gJy4uLy4uL2FqYXgnO1xyXG5cclxuZnVuY3Rpb24gc2V0QXJyb3dQb3NpdGlvblhSZWxhdGl2ZVRvQ2FyZChhcnJvdywgY2FyZCkge1xyXG4gICAgY29uc3QgY2FyZFBhcmVudCA9IGNhcmQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGNvb3JDYXJkID0gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNvb3JDYXJkUGFyID0gY2FyZFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHggPSBjb29yQ2FyZC5sZWZ0IC0gY29vckNhcmRQYXIubGVmdCArIChjYXJkLm9mZnNldFdpZHRoIC8gMikgLSAoYXJyb3cub2Zmc2V0V2lkdGggLyAyKTtcclxuICAgIGFycm93LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eH1weClgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBYm91dFNwZWNpYWxpc3Qoc3BlY2lhbGlzdE5hbWUsIGRhdGEsIGV2ZW50KSB7XHJcbiAgICBjb25zdCBBQk9VVF9TUEVDSUFMSVNUX1dSQVAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0IFRJVExFID0gQUJPVVRfU1BFQ0lBTElTVF9XUkFQLnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1zcGVjaWFsaXN0X190aXRsZScpO1xyXG4gICAgY29uc3QgVEVYVCA9IEFCT1VUX1NQRUNJQUxJU1RfV1JBUC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtc3BlY2lhbGlzdF9fdGV4dCcpO1xyXG5cclxuICAgIC8vINCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L7Qv9C40YHQsNC90LjRjyDQviDRgdC/0LXRhtC40LDQu9C40YHRgtC1LlxyXG4gICAgVElUTEUuaW5uZXJIVE1MID0gYEFib3V0ICR7c3BlY2lhbGlzdE5hbWUubWF0Y2goL1teXFxzXSsvKVswXX1gO1xyXG4gICAgVEVYVC5pbm5lckhUTUwgPSBkYXRhLmFib3V0O1xyXG5cclxuICAgIC8vINCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0YHRgdGL0LvQvtC6INC60L7QvdGC0LDQutGC0L7QsiDRgdC/0LXRhtC40LDQu9C40YHRgtCwLlxyXG4gICAgY29uc3QgQ09OVEFDVFMgPSBBQk9VVF9TUEVDSUFMSVNUX1dSQVAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPTlRBQ1RTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFjdHNJdGVtID0gQ09OVEFDVFNbaV07XHJcbiAgICAgICAgY29udGFjdHNJdGVtLmNsYXNzTGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgvY29udGFjdC1pdGVtX18vLnRlc3QoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFjdE5hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvY29udGFjdC1pdGVtX18vLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gY29udGFjdHNJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb250YWN0cy5oYXNPd25Qcm9wZXJ0eShjb250YWN0TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWN0c0l0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFbMF0uaHJlZiA9IGAke2RhdGEuY29udGFjdHNbY29udGFjdE5hbWVdfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWN0c0l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBhWzBdLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQo9C00LDQu9C10L3QuNC1INC60LvQsNGB0YHQsCDRgyDQsdC70L7QutCwINGBINC+0L/QuNGB0LDQvdC40LXQvCDQviDRgdC/0LXRhtC40LDQu9C40YHRgtC1INC00LvRjyDQv9C+0Y/QstC70LXQvdC40Y8g0LHQu9C+0LrQsC5cclxuICAgIEFCT1VUX1NQRUNJQUxJU1RfV1JBUC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1zcGVjaWFsaXN0X193cmFwX2hpZGRlbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb2N1c0V2ZW50Rm9yQ2FyZChhcnJvdywgc3BlY2lhbGlzdHNEYXRhLCBhYm91dFNwZWNpYWxpc3RXcmFwLCBldmVudCkge1xyXG4gICAgbGV0IGNhcmQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgc2V0QXJyb3dQb3NpdGlvblhSZWxhdGl2ZVRvQ2FyZChhcnJvdywgY2FyZCk7XHJcblxyXG4gICAgY29uc3QgU1BFQ0lBTElTVF9OQU1FID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcudGVhbS1jYXJkX19uYW1lJykuaW5uZXJIVE1MO1xyXG4gICAgY29uc3QgREFUQSA9IHNwZWNpYWxpc3RzRGF0YVtgJHtTUEVDSUFMSVNUX05BTUV9YF07XHJcblxyXG4gICAgLy8g0J/RgNC40YHQstC+0LXQvdC40LUg0LrQu9Cw0YHRgdCwINCx0LvQvtC60YMg0YEg0L7Qv9C40YHQsNC90LjQtdC8INC+INGB0L/QtdGG0LjQsNC70LjRgdGC0LUg0LTQu9GPINGB0LrRgNGL0YLQuNGPINC+0L/QuNGB0LDQvdC40Y8g0YEg0L/QvtGB0LvQtdC00YPRjtGJ0LXQs9C+INC10LPQviDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC4INC/0L7Rj9Cy0LvQtdC90LjRjyDQstC90L7QstGMLlxyXG4gICAgYWJvdXRTcGVjaWFsaXN0V3JhcC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc2V0QWJvdXRTcGVjaWFsaXN0LmJpbmQobnVsbCwgU1BFQ0lBTElTVF9OQU1FLCBEQVRBKSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgYWJvdXRTcGVjaWFsaXN0V3JhcC5jbGFzc0xpc3QuYWRkKCdhYm91dC1zcGVjaWFsaXN0X193cmFwX2hpZGRlbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RXZlbnRzRm9yVGVhbVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBPVVJURUFNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91cnRlYW0nKTtcclxuICAgIGNvbnN0IEFCT1VUX1NQRUNJQUxJU1QgPSBPVVJURUFNLnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1zcGVjaWFsaXN0Jyk7XHJcbiAgICBjb25zdCBBUlJPVyA9IEFCT1VUX1NQRUNJQUxJU1QucXVlcnlTZWxlY3RvcignLmFib3V0LXNwZWNpYWxpc3RfX2Fycm93Jyk7XHJcbiAgICBjb25zdCBBQk9VVF9TUEVDSUFMSVNUX1dSQVAgPSBBQk9VVF9TUEVDSUFMSVNULnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1zcGVjaWFsaXN0X193cmFwJyk7XHJcblxyXG4gICAgLy8gQUpBWCDQt9Cw0L/RgNC+0YEg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YUg0L4g0YHQv9C10YbQuNCw0LvQuNGB0YLQsNGFLlxyXG4gICAgYWpheCgnLi9qc29uL291cnRlYW0uanNvbicsXHJcbiAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFNQRUNJQUxJU1RTX0RBVEEgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgIC8vINCS0YvQsdC+0YAg0LrQsNGA0YLRiyDRgdC/0LXRhtC40LDQu9C40YHRgtCwINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLlxyXG4gICAgICAgICAgICBzZXRGb2N1c0V2ZW50Rm9yQ2FyZChBUlJPVywgU1BFQ0lBTElTVFNfREFUQSwgQUJPVVRfU1BFQ0lBTElTVF9XUkFQLCB7IHRhcmdldDogT1VSVEVBTS5xdWVyeVNlbGVjdG9yKCcudGVhbS1jYXJkJykgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQndCw0LfQvdCw0YfQtdC90LjQtSDQtNC10LnRgdGC0LLQuNC5INC/0YDQuCDQstGL0LHQvtGA0LUg0LrQsNGA0YLRiyDRgdC/0LXRhtC40LDQu9C40YHRgtCwLlxyXG4gICAgICAgICAgICBPVVJURUFNLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBzZXRGb2N1c0V2ZW50Rm9yQ2FyZC5iaW5kKG51bGwsIEFSUk9XLCBTUEVDSUFMSVNUU19EQVRBLCBBQk9VVF9TUEVDSUFMSVNUX1dSQVApKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGNsYXNzIFNjcm9sbGVkIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5wYWRkaW5nUmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgX3Njcm9sbE92ZXJmbG93KCkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHRoaXMuZWxlbWVudC5zdHlsZTtcclxuICAgICAgICBsZXQgb3ZlcmZsb3cgPSBzdHlsZS5vdmVyZmxvdyB8fCBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkub3ZlcmZsb3c7XHJcbiAgICAgICAgaWYgKG92ZXJmbG93ICE9PSAnc2Nyb2xsJykge1xyXG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuICAgICAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGRlbk92ZXJmbG93KCkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHRoaXMuZWxlbWVudC5zdHlsZTtcclxuICAgICAgICBsZXQgb3ZlcmZsb3cgPSBzdHlsZS5vdmVyZmxvdyB8fCBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkub3ZlcmZsb3c7XHJcbiAgICAgICAgaWYgKG92ZXJmbG93ID09PSAnc2Nyb2xsJykge1xyXG4gICAgICAgICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLnJpZ2h0IHx8ICcwcHgnO1xyXG4gICAgICAgICAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9zY3JvbGxPdmVyZmxvdy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX3Njcm9sbE92ZXJmbG93LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuX2hpZGRlbk92ZXJmbG93LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hpZGRlbk92ZXJmbG93LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9