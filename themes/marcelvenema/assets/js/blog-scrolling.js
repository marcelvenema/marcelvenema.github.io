let grid = document.querySelector('.grid-wrapper');
let msnry = new Masonry(grid, {
    itemSelector: 'none', // select none at first
    columnWidth: '.grid__col-sizer',
    gutter: '.grid__gutter-sizer',
    percentPosition: true,
    stagger: 30,
    // nicer reveal transition
    visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

// initial items reveal
imagesLoaded(grid, function () {
    grid.classList.remove('are-images-unloaded');
    msnry.options.itemSelector = '.grid__item';
    let items = grid.querySelectorAll('.grid__item');
    msnry.appended(items);
});

//-------------------------------------//
// init Infinite Scroll
let infScroll = new InfiniteScroll(grid, {
    path: '.pagination__page',
    append: '.grid__item',
    outlayer: msnry,
    status: '.page-load-status',
});