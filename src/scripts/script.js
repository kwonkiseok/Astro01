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