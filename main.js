/*letting read more*/

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
  });

let watchAll = document.getElementById("watchAll")
let newsBlockMore = document.getElementById("newsBlockMore")

watchAll.addEventListener('click', function () {
  /*newsBlockMore.hidden = !newsBlockMore.hidden;*/
  newsBlockMore.style.display = "block";
  watchAll.style.display = "none";
},);


function goForvard() {
  let gallery = document.getElementById('gallery')
  console.log('it works 1')
  gallery.style.marginRight = '400px'
  console.log('it works 2')

}
























// let oxSizeOfPicture = document.querySelector('.carousel img').width;

//     //кол-во картинок в кадре
//     let numberOfImagesPerFrame = Math.round((window.getComputedStyle(document.querySelector('.carousel')).width).split('px')[0] / oxSizeOfPicture);
//     //console.log('numberOfImagesPerFrame: ', numberOfImagesPerFrame);

//     //размер одного скрола
//     let fullSizeOfScroll = oxSizeOfPicture * numberOfImagesPerFrame;
//     // console.log('fullSizeOfScroll: ', fullSizeOfScroll);

//     //кол-во картинок
//     let numberOfImages = document.querySelector('.gallery').querySelectorAll('li').length;
//     //console.log('numberOfImages: ', numberOfImages);

//     //кол-во полных прокруток(скролов)
//     let quantityOfFullFrames = Math.trunc(numberOfImages / numberOfImagesPerFrame);
//     // console.log('quantityOfFullFrames: ', quantityOfFullFrames);

//     //число маргина для заполненных кадров(-1 тк отсчет с нуля)
//     let wholeFullMarginLeft = (quantityOfFullFrames-1) * fullSizeOfScroll;
//     console.log('wholeFullMarginLeft: ', wholeFullMarginLeft);

//     //с учетом кол-ва картинок полное число скрола
//     let fullMarginLeft = numberOfImages * oxSizeOfPicture;
//     //console.log('fullMarginLeft: ', fullMarginLeft);

//     //если число каринок не кратно числу картинок, помещающихся в полном скроле, то остаток и минус нулевой скролл
//     let restOfMargin = fullMarginLeft - wholeFullMarginLeft - fullSizeOfScroll;
//     console.log('restOfMargin: ', restOfMargin);



//     let nextButton = document.querySelector('.next');
//     // console.log('nextButton : ', nextButton );

//     let prevButton = document.querySelector('.prev');

//     // let marginLeft = document.querySelector('.gallery ul').style.marginLeft;
//     // marginLeft = +(marginLeft.split('px')[0]);
//    // console.log('marginLeft: ', marginLeft);

//    function margin() {
//     // console.log('на входе маргина', document.querySelector('.gallery ul').style.marginLeft);
//     let marginLeft = document.querySelector('.gallery ul').style.marginLeft;
//     marginLeft = +(marginLeft.split('px')[0]);
//     return marginLeft;
//    }


//    function marginUpChange() {
//      if (margin() ==  -wholeFullMarginLeft){
//       document.querySelector('.gallery ul').style.marginLeft = (margin() - restOfMargin) + "px";
//       return;
//      };
//      if (margin() < -wholeFullMarginLeft){
//        return;
//      }
//      document.querySelector('.gallery ul').style.marginLeft = (margin() - fullSizeOfScroll) + "px";
//    }


//    function marginDownChange(){
//      if (margin() >= 0){
//        return;
//      }
//      if (margin() == -wholeFullMarginLeft-restOfMargin){
//       document.querySelector('.gallery ul').style.marginLeft = -wholeFullMarginLeft + "px";
//       return;
//      }
//     document.querySelector('.gallery ul').style.marginLeft = (margin() + fullSizeOfScroll) + "px";
//   }

//    nextButton.addEventListener('click', () => marginUpChange());
//    prevButton.addEventListener('click', () => marginDownChange());