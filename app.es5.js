
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



document.getElementById('plus-button').addEventListener('click', function () {
  let cookieArr;
  if(cookieTest == true) {
    cookieArr = Cookies.get(currentEmail);
  } else {
    cookieArr = JSON.parse(localStorage.getItem(currentEmail));
  }
  

  if (cookieArr != null) {
    if(cookieTest == true) {
      arr = JSON.parse(cookieArr) || null;
    } else {
      let temp = [];
      temp.push(cookieArr);
      arr = temp;
    }
    if(Array.isArray(arr) == false) {
      let temp = [];
      temp.push(arr);
      arr = temp;
    }

    if (!checkStorage(arr, imgList[currentImg - 1].id)) {
      createSideUl(sideEmailCount, currentImg - 1);
      emailAnimate();
      menuHighlight();
    }
  } else {
    createSideUl(sideEmailCount, currentImg - 1);
    emailAnimate();
  }

  storageSetup();
});
let cookieTest;
let emailLoad = true;
let loadV = true;
let cloneArray = {};
let cloneOne = '';
let cloneTwo = '';
let cloneThree = '';
let cloneFour = '';
let imgList = [];
let currentCard = 1;
let cycleNum = 0;
let currentEmail = "";
let buttonCheck = 0;
let sideUlCount = 0;
let sideEmailCount = 0;
let emailArray = [];
let loadArray = [];
let test;
var carouselSnippet = "\n        <img src=\"resources/test-img.jpg\" alt=\"\" class=\"card-img card-one-img\">\n        <i></i>\n        <div class=\"info-area\">\n            <h3 class=\"info-title\">Flower Bride</h3>\n            <ul class=\"info-ul\">\n                <li class=\"info-li\">\n                    <h5 class=\"info-key\">Creator:</h5>\n                    <p class=\"info-value\">J. Balla (J. Balla Photography)</p>\n                </li>\n                <li class=\"info-li\">\n                    <h5 class=\"info-key\">Dimensions:</h5>\n                    <p class=\"info-value\">3070 \xD7 4605</p>\n                </li>\n            </ul>\n        </div> \n    </div\n  ";
var sideUlSnippet = "<ul class=\"side-ul\">\n        <li class=\"side-img-li\">\n            <img src=\"\" class=\"side-img\">\n        </li>\n        <li class=\"side-info\"></li>\n        <li class=\"side-link-li\">\n            <a href=\"\" class=\"side-link\" target=\"_blank\">View Image</a>\n        </li>\n    </div> \n  ";
var emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
document.getElementById('menu-button').addEventListener('click', function () {
  $('#menu-side').toggleClass('menu-open');
});

checkType();

function loadCarousel() {
  return _loadCarousel.apply(this, arguments);
}

function _loadCarousel() {
  _loadCarousel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cloneArray = $('.slick-cloned');
            _context.next = 3;
            return setImgList();

          case 3:
            _context.next = 5;
            return setImgList();

          case 5:
            getImage(imgList[0].id, cloneOne);

            getImage(imgList[1].id, cloneTwo);
            getImage(imgList[2].id, cloneThree);
            getImage(imgList[3].id, cloneFour);
            loadInfo();

            for (i = 0; i <= 3; i++) {
              getImage(imgList[i].id, getImgLoc(i + 1));
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadCarousel.apply(this, arguments);
}

document.getElementById('email-button').addEventListener('click', function () {
  if (buttonCheck === 0) {
    $('#email-input').removeClass('email-hidden');
    $('#email-button').removeClass('email-check');
    buttonCheck = 1;
  } else if (buttonCheck === 1) {
    var checkResult = checkEmail();
    var inputVal = document.getElementById('email-input').value;

    if (checkResult) {
      $('#plus-button').removeClass('email-hidden');
      currentEmail = inputVal;
      $('#email-input').addClass('email-hidden');
      $('#email-button').addClass('email-check');
      document.getElementById('email-button').textContent = "Change Email";

      if (emailArray.indexOf(inputVal) == -1) {
        emailArray.push(inputVal);

        if (emailLoad) {
          emailLoad = false;
        } else {
          sideEmailCount += 1;
        }

        createSideDiv();
      } else {
        sideEmailCount = emailArray.indexOf(inputVal);
      }

      $('#menu-side h5')[0].textContent = currentEmail;
      buttonCheck = 0;
    } else {
      $('#email-button').toggleClass('error-button');
      setTimeout(function () {
        $('#email-button').toggleClass('error-button');
      }, 2000);
    }
  } else if (buttonCheck === 2) {}
});

function emailAnimate() {
  $('#plus-button').addClass('back-tick');
  $('#plus-horizontal').addClass('tick');
  $('#plus-vertical').addClass('tick');
}

function emailDeAnimate() {
  $('#plus-button').removeClass('back-tick');
  $('#plus-horizontal').removeClass('tick');
  $('#plus-vertical').removeClass('tick');
}

function setImgList() {
  return _setImgList.apply(this, arguments);
}

function _setImgList() {
  _setImgList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var imgPage, listURL, listJSON;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            imgPage = randImg(248, 0);
            listURL = "https://picsum.photos/v2/list?page=".concat(imgPage).concat("&limit=4");
            listJSON = {};
            _context2.next = 5;
            return $.getJSON(listURL);

          case 5:
            listJSON = _context2.sent;

            for (i = 0; i < 4; i++) {
              imgList.push(listJSON[i]);
            }

            ;

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _setImgList.apply(this, arguments);
}

function randImg(max, neg) {
  return Math.floor(Math.random() * max) - neg;
}

function getImage(id, iObj) {
  $(iObj).attr('src', 'https://picsum.photos/id/'.concat(id).concat('/400/800'));
}

function getImgLoc(cardFind) {
  var cardLoc = "";
  cardLoc = numberString(cardFind);
  cardLoc = "#card-".concat(cardLoc);
  return cardLoc.concat(' .card-img');
}

function prevButton() {
  return _prevButton.apply(this, arguments);
}

function _prevButton() {
  _prevButton = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var cardCounter;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            currentImg = currentCard + cycleNum * 4;
            cardCounter = currentCard;
            nextLoadHandle();

            if (currentCard > 1) {
              currentCard -= 1;
            } else {
              currentCard = 4;
              cycleNum += 1;
            }

            if (!(currentCard == 2)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 7;
            return setImgList(4);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _prevButton.apply(this, arguments);
}

function nextLoadHandle() {
  return _nextLoadHandle.apply(this, arguments);
}

function _nextLoadHandle() {
  _nextLoadHandle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            cloneArray = $('.slick-cloned');
            getImage(imgList[currentImg - 1].id, getImgLoc(currentCard));

            if (currentCard == 1) {
              getImage(imgList[currentImg - 1].id, cloneOne);
            } else if (currentCard == 2) {
              getImage(imgList[currentImg - 1].id, cloneTwo);
            } else if (currentCard == 3) {
              getImage(imgList[currentImg - 1].id, cloneThree);
            } else if (currentCard == 4) {
              getImage(imgList[currentImg - 1].id, cloneFour);
            }

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _nextLoadHandle.apply(this, arguments);
}

function numberString(a) {
  var b = "";

  if (a == 1) {
    b = "one";
  } else if (a == 2) {
    b = "two";
  } else if (a == 3) {
    b = "three";
  } else {
    b = "four";
  }

  return b;
}

function loadInfo() {
  if (loadV === true) {
    currentImg = currentCard + cycleNum * 4;
    loadV = false;
  } else {
    currentImg = currentCard + (cycleNum - 1) * 4;
  }

  var currentObj = imgList[currentImg - 1];
  var authorV = document.getElementById('author');
  authorV.textContent = currentObj.author;
  document.getElementById('line-one').textContent = currentObj.width + ' x ' + currentObj.height;
  document.getElementById('line-three-link').setAttribute('href', currentObj.url);
}

function storageSetup() {
  var id = imgList[currentImg - 1].id;
  saveStorage(currentEmail, id);
}

function saveStorage(email, id) {
  var idV = [];
  let checkSaveStorage;
  if (cookieTest == true) {
    checkSaveStorage = Cookies.get(email);
  } else {
    checkSaveStorage = localStorage.getItem(email);
  }
  if (checkSaveStorage != undefined) {
    if (cookieTest == true) {
      var locS = JSON.parse(Cookies.get(email)) ;
    } else {
      var locS = JSON.parse(localStorage.getItem(email));
    }
    idV = locS;

    if (!checkStorage(locS, id)) {
      idV.push(id);
    }
  } else {
    idV.push(id);
  }
  if (cookieTest == true) {
    Cookies.set(email, JSON.stringify(idV));
  } else {
    localStorage.setItem(email, JSON.stringify(idV));
  }
  
}

function checkStorage(arr, val) {
  if (arr.indexOf(val) == -1) {
    return false;
  } else {
    return true;
  }
}

function checkEmail() {
  inputEmail = document.getElementById('email-input').value;
  var check = emailRegex.test(inputEmail);
  return check;
}

function createSideUl(emailNum, imgNum) {
  var ulObj = $(sideUlSnippet);
  $('.email-div')[emailNum].appendChild(ulObj[0]);
  var tEl = $('.email-div')[emailNum];
  sideUlCount = $(tEl).children('.side-ul').length;
  $(tEl).children('.side-ul').children('.side-img-li').children('.side-img')[sideUlCount - 1].setAttribute('src', 'https://picsum.photos/id/'.concat(imgList[imgNum].id).concat('/50/50'));
  $(tEl).children('.side-ul').children('.side-info')[sideUlCount - 1].textContent = imgList[imgNum].author;
  $(tEl).children('.side-ul').children('.side-link-li').children('.side-link')[sideUlCount - 1].setAttribute('href', imgList[imgNum].url);
  sideUlCount += 1;
}

function createSideDiv() {
  $('#menu-side').append('<div class="email-div"></div>');
  var h4 = document.createElement('h4');
  $('.email-div')[sideEmailCount].appendChild(h4);
  $('.email-div h4')[sideEmailCount].textContent = currentEmail;
}

function loadStorage() {
  checkType();
  return _loadStorage.apply(this, arguments);
}

function _loadStorage() {
  _loadStorage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var obj, i, idList, a, check, _check, b, arr, subArr, c, finder, subArrJSON;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            obj = {};
            i = 0;
            idList = [];

            if (!(cookieTest == true)) {
              _context.next = 19;
              break;
            }

            _context.t0 = regeneratorRuntime.keys(Cookies.get());

          case 5:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 17;
              break;
            }

            a = _context.t1.value;
            check = Cookies.get(a);

            if (!(check !== null)) {
              _context.next = 13;
              break;
            }

            obj[i] = [a, JSON.parse(check)];
            emailLoad = false;
            _context.next = 14;
            break;

          case 13:
            return _context.abrupt("break", 17);

          case 14:
            i++;
            _context.next = 5;
            break;

          case 17:
            _context.next = 32;
            break;

          case 19:
            _context.t2 = regeneratorRuntime.keys(localStorage);

          case 20:
            if ((_context.t3 = _context.t2()).done) {
              _context.next = 32;
              break;
            }

            a = _context.t3.value;
            _check = localStorage.getItem(a);

            if (!(_check !== null)) {
              _context.next = 28;
              break;
            }

            obj[i] = [a, JSON.parse(_check)];
            emailLoad = false;
            _context.next = 29;
            break;

          case 28:
            return _context.abrupt("break", 32);

          case 29:
            i++;
            _context.next = 20;
            break;

          case 32:
            i = 0;
            _context.t4 = regeneratorRuntime.keys(obj);

          case 34:
            if ((_context.t5 = _context.t4()).done) {
              _context.next = 56;
              break;
            }

            b = _context.t5.value;
            arr = obj[i];
            i++;
            currentEmail = arr[0];
            sideEmailCount = b;
            emailArray.push(currentEmail);
            createSideDiv();
            subArr = arr[1];
            _context.t6 = regeneratorRuntime.keys(subArr);

          case 44:
            if ((_context.t7 = _context.t6()).done) {
              _context.next = 54;
              break;
            }

            c = _context.t7.value;
            finder = subArr[c];
            _context.next = 49;
            return $.getJSON("https://picsum.photos/id/" + finder + "/info");

          case 49:
            subArrJSON = _context.sent;
            loadSideUl(sideEmailCount, 0, subArrJSON);
            idList.push(subArr[c]);
            _context.next = 44;
            break;

          case 54:
            _context.next = 34;
            break;

          case 56:
            sideEmailCount = parseInt(sideEmailCount);

          case 57:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadStorage.apply(this, arguments);
}

function menuHighlight() {
  $('#menu-button').addClass('highlight');
  setTimeout(function () {
    $('#menu-button').removeClass('highlight');
  }, 500)
}

function loadSideUl(emailNum, imgNum, subArr) {
  var ulObj = $(sideUlSnippet);
  $('.email-div')[emailNum].appendChild(ulObj[0]);
  var tEl = $('.email-div')[emailNum];
  sideUlCount = $(tEl).children('.side-ul').length;
  $(tEl).children('.side-ul').children('.side-img-li').children('.side-img')[sideUlCount - 1].setAttribute('src', 'https://picsum.photos/id/'.concat(subArr.id).concat('/50/50'));
  $(tEl).children('.side-ul').children('.side-info')[sideUlCount - 1].textContent = subArr.author;
  $(tEl).children('.side-ul').children('.side-link-li').children('.side-link')[sideUlCount - 1].setAttribute('href', subArr.url);
  sideUlCount += 1;
}

function checkType() {
  Cookies.set("check", "true");
  if(Cookies.get("check") == undefined) {
    cookieTest = false;
  } else {
    cookieTest = true;
    Cookies.remove("check");
  }
}

$(document).ready(function(){
  $('.img-div').slick({
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '20px',
      adaptiveHeight: true,
      rtl: true,
      nextArrow: "",
      prevArrow: "\n            <button id=\"next-button\" class=\"bar-button\">\n                <span id=\"next-tp\" class=\"next-span icon-span\"></span>\n                <span id=\"next-bt\" class=\"next-span icon-span\"></span>\n            </button>"
          ,
      appendArrows: $('.button-bar-two'),
      infinite: true,
      draggable: false,
  });
  loadCarousel();
  loadStorage();
  $('.img-div').on('afterChange', function () {
      prevButton();
      loadInfo();
      emailDeAnimate();
  });
  cloneArray = $('.slick-cloned');
  cloneOne = cloneArray[3].childNodes[1];
  cloneTwo = cloneArray[0].childNodes[1];
  cloneThree = cloneArray[1].childNodes[1];
  cloneFour = cloneArray[2].childNodes[1];

  setInterval(function () {window.onresize = $('.card-img').css('height', parseInt(window.innerHeight) - 120 + 'px')}, 500);

});