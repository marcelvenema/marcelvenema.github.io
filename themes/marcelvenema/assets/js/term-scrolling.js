let card = document.querySelector('.blog-card__wrapper');
//-------------------------------------//
// init Infinite Scroll
let termScroll = new InfiniteScroll(card, {
    path: '.pagination__page',
    append: '.blog-card',
    status: '.page-load-status',
});