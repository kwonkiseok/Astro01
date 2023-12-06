// Header Sticky
// const el = document.querySelector('.header');
// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
//   { threshold: [1] }
// );

// observer.observe(el);

// console.log( observer );

const headerEl = document.querySelector('.header')
const sentinalEl = document.querySelector('.sentinal')

const handler = (entries) => {
  // console.log(entries)
  // entries is an array of observed dom nodes
  // we're only interested in the first one at [0]
  // because that's our .sentinal node.
  // Here observe whether or not that node is in the viewport
  if (!entries[0].isIntersecting) {
    headerEl.classList.add('sticky')
  } else {
    headerEl.classList.remove('sticky')
  }
}

// create the observer
const observer = new window.IntersectionObserver(handler)
// give the observer some dom nodes to keep an eye on
observer.observe(sentinalEl)

// Mouse Cursor
// const $trif = $('.trif'),
//         $ct = $('.ct'),
//         $line = $('.welcome > span:nth-child(1)'),
//         $wave = $('.welcome > span:nth-child(2)');
  
//     let colorFunc = () => {
//         let randomColor = Math.random().toString(16).substr(-6);
//         let randomColorHash = '#'+randomColor;
//         let randomCtOp = Math.random() * (0.8 - 0.5) + 0.5;
//         let randomCtOpNum = randomCtOp.toFixed(2);

//         $ct.css({ 'background-color': randomColorHash, 'opacity': randomCtOpNum });
//         $trif.css( 'border-bottom-color', randomColorHash );
//         $wave.css( 'color', randomColorHash );
//         $line.css({ 
//           'text-shadow': '-1px -1px 0 '+ randomColorHash +', 1px -1px 0 '+ randomColorHash + ', -1px 1px 0 '+ randomColorHash + ', 1px 1px 0 '+ randomColorHash,
//           'opacity': Math.random() * (0.5 - 0.3) + 0.3
//         });

//         $trif.each((key, val) => {
//           let randomOp = Math.random() * (0.8 - 0.4) + 0.4;
//           let randomOpNum = randomOp.toFixed(2);
//           $(val).css('opacity', randomOpNum);
//         });
//     }

//     setInterval(colorFunc, 3000);
//   });

// document.addEventListener('DOMContentLoaded', function(event) {
//     var cursor = document.querySelector(".custom-cursor");
//     var links = document.querySelectorAll("a");
//     var initCursor = false;

//     for (var i = 0; i < links.length; i++) {
//       var selfLink = links[i];

//       selfLink.addEventListener("mouseover", function() {
//         cursor.classList.add("custom-cursor--link");
//       });
//       selfLink.addEventListener("mouseout", function() {
//         cursor.classList.remove("custom-cursor--link");
//       });
//     }

//     window.onmousemove = function(e) {
//       var mouseX = e.clientX;
//       var mouseY = e.clientY;
      
//       if (!initCursor) {
//         // cursor.style.opacity = 1;
//         TweenLite.to(cursor, 0.3, {
//           opacity: 1
//         });
//         initCursor = true;
//       }

//       TweenLite.to(cursor, 0, {
//         top: mouseY + "px",
//         left: mouseX + "px"
//       });
//     };

//     window.onmouseout = function(e) {
//       TweenLite.to(cursor, 0.3, {
//         opacity: 0
//       });
//       initCursor = false;
//     };
//   });