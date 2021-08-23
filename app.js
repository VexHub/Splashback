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



document.getElementById('plus-button').addEventListener('click', function () {
    cookieArr = Cookies.get(currentEmail);
    if (cookieArr != null) {
        arr = JSON.parse(cookieArr) || null;
        if(!checkStorage(arr, imgList[currentImg - 1].id)) {
            createSideUl(sideEmailCount, currentImg - 1);
            emailAnimate();
        }
    } else {
        createSideUl(sideEmailCount, currentImg - 1);
        emailAnimate();
    }
    storageSetup();
    
    
});




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

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  
    document.getElementById('menu-button').addEventListener('click', function () {
        $('#menu-side').toggleClass('menu-open');
    })
    
  
    async function loadCarousel() {
    cloneArray = $('.slick-cloned'); 
      await setImgList();
      await setImgList();
      getImage(imgList[0].id, cloneOne);
      getImage(imgList[1].id, cloneTwo);
      getImage(imgList[2].id, cloneThree);
      getImage(imgList[3].id, cloneFour);
      loadInfo();
      
      for(i = 0; i <= 3; i++) {
        getImage(imgList[i].id, getImgLoc(i+1));
      }
  }

  document.getElementById('email-button').addEventListener('click', function () {
    if (buttonCheck === 0) {
        $('#email-input').removeClass('email-hidden');
        $('#email-button').removeClass('email-check');
        buttonCheck = 1;
    } else if (buttonCheck === 1) {
        let checkResult = checkEmail();
        let inputVal = document.getElementById('email-input').value;
        if (checkResult) {
            $('#plus-button').removeClass('email-hidden');
            currentEmail = inputVal;
            $('#email-input').addClass('email-hidden');
            $('#email-button').addClass('email-check');
            document.getElementById('email-button').textContent = "Change Email";
            if (!emailArray.includes(inputVal)) {
                emailArray.push(inputVal);
                if (emailLoad) {
                    emailLoad = false;
                } else {
                    sideEmailCount += 1;
                }
                createSideDiv();
            }  else {
                sideEmailCount = emailArray.indexOf(inputVal);
            }
            $('#menu-side h5')[0].textContent = currentEmail;
            buttonCheck = 0;
        } else {
            $('#email-button').toggleClass('error-button');
            setTimeout(function () {
                $('#email-button').toggleClass('error-button');
            }, 2000)
            
        }
    } else if (buttonCheck === 2) {
        
    }
    
    
})

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

  async function setImgList() {
      let imgPage = randImg(248, 0);
      let listURL = "https://picsum.photos/v2/list?page=".concat(imgPage).concat("&limit=4");
      let listJSON = {};
      listJSON = await $.getJSON(listURL);
      for(i = 0; i < 4; i++) {
            imgList.push(listJSON[i]);
        };
      }

      

  function randImg(max, neg) {
    return (Math.floor(Math.random() * max) - neg);
  }

  function getImage(id, iObj) {
    $(iObj).attr('src', 'https://picsum.photos/id/'.concat(id).concat('/400/800'));
  }

  function getImgLoc(cardFind) {
      let cardLoc = "";
      cardLoc = numberString(cardFind);
      cardLoc = "#card-".concat(cardLoc);
      return cardLoc.concat(' .card-img');
  }
      
  async function prevButton() {
    currentImg = currentCard + (cycleNum * 4);
    let cardCounter = currentCard;
    nextLoadHandle();
    
    
    if(currentCard > 1) {
        currentCard -= 1;
    } else {
        currentCard = 4;
        cycleNum += 1;
    }
    if(currentCard == 2) {
        await setImgList(4);
    }
    
  }

  async function nextLoadHandle() {
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
  }

  function numberString(a) {
    let b = "";
    if(a == 1) {
        b = "one";
    } else if(a == 2) {
        b = "two";
    } else if(a == 3) {
        b = "three";
    } else {
        b = "four";
    }
    return b;
  }

  function loadInfo() {
      if (loadV === true) {
        currentImg = currentCard + (cycleNum * 4);
        loadV = false;
      } else {
        currentImg = currentCard + ((cycleNum - 1) * 4);
      }
    
      let currentObj = imgList[currentImg - 1];
      let authorV = document.getElementById('author');
      authorV.textContent = currentObj.author;
      document.getElementById('line-one').textContent = currentObj.width + ' x ' + currentObj.height;
      document.getElementById('line-three-link').setAttribute('href', currentObj.url);
  }

  function storageSetup() {
      let id = imgList[currentImg - 1].id;
      saveStorage(currentEmail, id);
  }

  function saveStorage(email, id) {
      let idV = [];
      if (Cookies.get(email) != undefined) {
        let locS = JSON.parse(Cookies.get(email));
        idV = locS;
        if(!checkStorage(locS, id)) {
            idV.push(id);
        }
      } else {
          idV.push(id);
      }
    
    Cookies.set(email, JSON.stringify(idV));
  }

  function checkStorage(arr, val) {
    if(arr.indexOf(val) == -1) {
        return false;
    } else {
        return true;
    }
    
  }

  function checkEmail() {
      inputEmail = document.getElementById('email-input').value;
      let check = emailRegex.test(inputEmail);
      return check;
  }

  function createSideUl(emailNum, imgNum) {
      let ulObj = $(sideUlSnippet) ;
      $('.email-div')[emailNum].append(ulObj[0]);
      let tEl = $('.email-div')[emailNum];
    sideUlCount = $(tEl).children('.side-ul').length;
      $(tEl).children('.side-ul').children('.side-img-li').children('.side-img')[sideUlCount - 1].setAttribute('src', 'https://picsum.photos/id/'.concat(imgList[imgNum].id).concat('/50/50'));
      $(tEl).children('.side-ul').children('.side-info')[sideUlCount - 1].textContent = imgList[imgNum].author;
      $(tEl).children('.side-ul').children('.side-link-li').children('.side-link')[sideUlCount - 1].setAttribute('href', imgList[imgNum].url)
      sideUlCount += 1;
  }

  function createSideDiv() {
    $('#menu-side').append('<div class="email-div"></div>');
    const h4 = document.createElement('h4'); 
    $('.email-div')[sideEmailCount].appendChild(h4);
    $('.email-div h4')[sideEmailCount].textContent = currentEmail;
  }


async function loadStorage() {
    let obj = {};
      let i = 0;
      let idList = [];

    if(cookieTest = true) {
        for (var a in Cookies.get()) {
     		
            let check = Cookies.get(a);
            if(check !== null) {
                obj[i] = [a, JSON.parse(check)];
                emailLoad = false;
            } else {
                break;
            }
            i++; 
         }
    } else {
        for (var a in localStorage) {
            let check = localStorage.getItem(a);
            if(check !== null) {
                obj[i] = [a, JSON.parse(check)];
                emailLoad = false;
            } else {
                break;
            }
            i++; 
         }
    }
      

     i = 0;
     for (var b in obj) {
         let arr = obj[i];
         i++;
         currentEmail = arr[0];
        sideEmailCount = b;
        emailArray.push(currentEmail);
        createSideDiv();
        let subArr = arr[1];
        for (var c in subArr) {
            let finder = subArr[c];
            let subArrJSON = await $.getJSON("https://picsum.photos/id/" + finder + "/info");
            loadSideUl(sideEmailCount, 0, subArrJSON);
            idList.push(subArr[c]);
        }
        
     }
        sideEmailCount = parseInt(sideEmailCount);
    }

function loadSideUl(emailNum, imgNum, subArr) {
    let ulObj = $(sideUlSnippet) ;
    $('.email-div')[emailNum].append(ulObj[0]);
    let tEl = $('.email-div')[emailNum];
  sideUlCount = $(tEl).children('.side-ul').length;
    $(tEl).children('.side-ul').children('.side-img-li').children('.side-img')[sideUlCount - 1].setAttribute('src', 'https://picsum.photos/id/'.concat(subArr.id).concat('/50/50'));
    $(tEl).children('.side-ul').children('.side-info')[sideUlCount - 1].textContent = subArr.author;
    $(tEl).children('.side-ul').children('.side-link-li').children('.side-link')[sideUlCount - 1].setAttribute('href', subArr.url)
    sideUlCount += 1;
}


//

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