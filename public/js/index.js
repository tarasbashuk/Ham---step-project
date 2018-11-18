$('document').ready(function () {

// прячет скрытые элементы в карусели
    
function hideFeedback() {
 $(".hide").fadeOut();
}
hideFeedback();

    
//masonry
    
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 175,
//  percentPosition: true,
  gutter: 20
});
 
var $grid = $('.grid').masonry({
  columnWidth: 175,
  itemSelector: '.grid-item'
});

$('#load-more-gallery-btn').on( 'click', function() {
  var elems = [ getItemElement(), getItemElement(), getItemElement() ];
  // make jQuery object
  var $elems = $( elems );
  $grid.append( $elems ).masonry( 'appended', $elems );
});

// create <div class="grid-item"></div>
function getItemElement() {
  var elem = document.createElement('div');
  var wRand = Math.random();
  var hRand = Math.random();
  let imageNum = Math.floor((Math.random() * 8) + 1);
  var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
  var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
  elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
  elem.innerHTML = `<img src="img/best_images/${imageNum}.png" alt="gallery image${imageNum}" class="gallery-img">`;
  return elem;
}
    
//переключатель по вкладкам сервисов
    
function showOurServices() {
        let activeIndex = $(".active-service-tab").index();
        let index = $(this).index();
        console.log(activeIndex);
        $(".active-service-tab").removeClass().addClass('service-tab');
        $(this).removeClass().addClass('active-service-tab');

        $('.active-service-text-item').removeClass().addClass('service-text-item');
        $('.service-text-item').eq(index).removeClass().addClass('active-service-text-item');

        $('.active-service-img-item').removeClass().addClass('service-img-item');
        $('.service-img-item').eq(index).removeClass().addClass('active-service-img-item');
    }
    $("#our-services-tab-container p").on("click", showOurServices);


//карусель
    
$('#prev').click(function () {
        let currentIndex = $('.small-photo-carousel-active').index();
        $(".feedback-main-item").eq(currentIndex).fadeOut(500);
        $('.small-photo-carousel-active').removeClass('small-photo-carousel-active');
        $('.small-photo-carousel').eq(currentIndex - 1).addClass('small-photo-carousel-active');
        $(".feedback-main-item").eq(currentIndex - 1).fadeIn(500);
    });

    $('#next').click(function () {
        let currentIndex = $('.small-photo-carousel-active').index();

        $(".feedback-main-item").eq(currentIndex).fadeOut(500);

        currentIndex = currentIndex === $('.small-photo-carousel').length - 1 ?
            -1 : $('.small-photo-carousel-active').index();
        $('.small-photo-carousel-active').removeClass('small-photo-carousel-active');
        $('.small-photo-carousel').eq(currentIndex + 1).addClass('small-photo-carousel-active');
        $(".feedback-main-item").eq(currentIndex + 1).fadeIn(500);
    });

    $('.small-photo-carousel').click(function () {
        let currentPhotoIndex = $('.small-photo-carousel-active').index();
        let currentIndex = $(this).index();

        $('.small-photo-carousel-active').removeClass('small-photo-carousel-active');
        $('.small-photo-carousel').eq(currentIndex).addClass('small-photo-carousel-active');
        $(".feedback-main-item").eq(currentPhotoIndex).fadeOut(500);
        $(".feedback-main-item").eq(currentIndex).fadeIn(500);

    });

//  добавляет рандомно 12 элементов при загрузке страницы
    
    let count = 0;

    function addImages() {
        let arrayElements = [];
        for (let i = 0; i < 3; i++) {
            let imageNum = Math.floor((Math.random() * 12) + 1);
            let elem = $('.work-example-img-container').append(`<div class="work-example-img-wraper"><img src="img/our_amazing_work/1/graphic-design${imageNum}.jpg" alt="graphic-design image${imageNum}" class="graphic-design">
            <div class="work-example-img-info">
                <div class="circles-container">
                    <div class="circle1"><i class="fas fa-link" id="chain-circle"></i></div>
                    <div class="circle2"><i class="fas fa-search" id="serch-circle"></i></div>
                </div>
                <h3>creative design</h3>
                <p>Graphic Design</p>
            </div>
    </div>`)
            arrayElements.push(elem);
        }

        for (let i = 0; i < 3; i++) {
            let imageNum = Math.floor((Math.random() * 7) + 1);
                    let elem = $('.work-example-img-container').append(`<div class="work-example-img-wraper"><img src="img/our_amazing_work/2/web-design${imageNum}.jpg" alt="web-design image${imageNum}" class="web-design">
            <div class="work-example-img-info">
                <div class="circles-container">
                    <div class="circle1"><i class="fas fa-link" id="chain-circle"></i></div>
                    <div class="circle2"><i class="fas fa-search" id="serch-circle"></i></div>
                </div>
                <h3>creative design</h3>
                <p>Web Design</p>
            </div>
    </div>`)
            
        arrayElements.push(elem);
        }
        
        for (let i = 0; i < 3; i++) {
            let imageNum = Math.floor((Math.random() * 7) + 1);
           let elem = $('.work-example-img-container').append(`<div class="work-example-img-wraper"><img src="img/our_amazing_work/3/landing-page${imageNum}.jpg" alt="landing-page image${imageNum}" class="landing-page">
            <div class="work-example-img-info">
                <div class="circles-container">
                    <div class="circle1"><i class="fas fa-link" id="chain-circle"></i></div>
                    <div class="circle2"><i class="fas fa-search" id="serch-circle"></i></div>
                </div>
                <h3>creative design</h3>
                <p>Landing Page</p>
            </div>
    </div>`)
          arrayElements.push(elem);
        }

        for (let i = 0; i < 3; i++) {
            let imageNum = Math.floor((Math.random() * 10) + 1);
              let elem = $('.work-example-img-container').append(`<div class="work-example-img-wraper"><img src="img/our_amazing_work/4/wordpress${imageNum}.jpg" alt="wordpress image${imageNum}" class="wordpress">
            <div class="work-example-img-info">
                <div class="circles-container">
                    <div class="circle1"><i class="fas fa-link" id="chain-circle"></i></div>
                    <div class="circle2"><i class="fas fa-search" id="serch-circle"></i></div>
                </div>
                <h3>creative design</h3>
                <p>Wordpress</p>
            </div>
    </div>`) 
            arrayElements.push(elem);
        }
        $('.work-example-img-container').append(arrayElements);
        count++;
        if (count === 3) {
            $('#load-more-amazing-work-btn').hide();
        }
    }
    addImages();

//добавляет по 12 элементов по нажатию на кнопку
    
    function loadMoreImages () {
    $('.preloader-container').fadeIn(1000);
    setTimeout(function() {
    $('.preloader-container').fadeOut(); 
    addImages();
    },2000);
}
    $('#load-more-amazing-work-btn').on('click', loadMoreImages);

    // сортирует our-amazing-work

    function sortImages() {

        $('.active-work-example-tab').removeClass().addClass('work-example-tab');
        $(this).removeClass().addClass('active-work-example-tab');
        let buttonIndex = $(this).index();
        
        if (buttonIndex === 0)
        showAllImages();
        
        if (buttonIndex === 1)
        showGraphicDesignImages();

        if (buttonIndex === 2)
        showWebDesignImages();
        
        if (buttonIndex === 3)
        showLandingPageImages();
        
         if (buttonIndex === 4)
        showWordpressImages();
        
            function showAllImages() {
            $('.graphic-design').fadeIn(1000);
            $('.web-design').fadeIn(1000);
            $('.landing-page').fadeIn(1000);
            $('.wordpress').fadeIn(1000);
        }

        function showGraphicDesignImages() {
            $('.graphic-design').fadeIn(1000);
            $('.web-design').fadeOut(1000);
            $('.landing-page').fadeOut(1000);
            $('.wordpress').fadeOut(1000);
        }
        
          function showWebDesignImages() {
            $('.graphic-design').fadeOut(1000);
            $('.web-design').fadeIn(1000);
            $('.landing-page').fadeOut(1000);
            $('.wordpress').fadeOut(1000);
        }
            function showLandingPageImages() {
            $('.graphic-design').fadeOut(1000);
            $('.web-design').fadeOut(1000);
            $('.landing-page').fadeIn(1000);
            $('.wordpress').fadeOut(1000);
        }
        
          function showWordpressImages() {
            $('.graphic-design').fadeOut(1000);
            $('.web-design').fadeOut(1000);
            $('.landing-page').fadeOut(1000);
            $('.wordpress').fadeIn(1000);
        }
    }
    $('#amazing-work-tab-container p').on('click', sortImages);
  });


function showSearch () {};
