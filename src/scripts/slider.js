import * as cssModifier from './cssModifier';
import * as utils from './utils';

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(window).on('load', () => {
  $('.loader').fadeOut();
});

(() => {
  const setSlidesConfig = () => {
    const slides = $('section');
    let number = 0;

    slides.each(function(index, slide) {
      const className = slide.className.split(' ').join('.');
      cssModifier.setZIndex(className, number);
      number++;

      if (slide.attributes && slide.hasAttribute('left')) {
        cssModifier.setLeftSlideConfig(className);
      }
    });
  }

  setSlidesConfig();

  $(window).scroll(() => {
    const getCurrentPosition = () => {
      return utils.isMobile() ? $('.scrollable-sections').scrollTop() : $(document).scrollTop();
    };

    const getCurrentFixedSlideIndex = () => {
      const windowHeight = window.innerHeight;
      const currentPosition = getCurrentPosition();

      return Math.floor(currentPosition / windowHeight)
    }

    const setElementFixed = () => {
      const slides = $('section');
      const currentPosition = getCurrentPosition();
      const currentFixedSlideIndex = getCurrentFixedSlideIndex();
      const className = slides[currentFixedSlideIndex].className.split(' ').join('.');
      const $element = $(`.${className}`).offset().top;

      if (currentPosition >= $element) {
        cssModifier.positionFixedDiv(className);
        cssModifier.transformScaleFixed(className);

        slideLeftElement();
      }
    };

    const zoomNextElement = () => {
      const slides = $('section');
      const currentPosition = getCurrentPosition();
      const nextSlideIndex = getCurrentFixedSlideIndex() + 1;

      if (slides[nextSlideIndex]) {
        const className = slides[nextSlideIndex].className.split(' ').join('.');
        const windowHeight = window.innerHeight;
        const zooming = (currentPosition / windowHeight) * 2;
        const $element = $(`.${className}`)

        if ($(`.${className}`).offset()) {
          const $element = $(`.${className}`).offset().top;

          if (currentPosition < $element) {
            cssModifier.positionAbsoluteDiv(className);
            cssModifier.transformScaleZoom(className, zooming - (2 * nextSlideIndex - 1));
          }
        }
      }
    }

    const slideLeftElement = () => {
      const slides = $('section');
      const elementPosition = windowWidth - scrollPercent * windowWidth;
      const nextSlideIndex = getCurrentFixedSlideIndex() + 1;

      if (slides[nextSlideIndex]) {
        const className = slides[nextSlideIndex].className.split(' ').join('.');

        if ($(`.${className}`)[0].attributes) {
          if ($(`.${className}`)[0].hasAttribute('left')) {

            if (elementPosition >= 0) {
              cssModifier.left(className, elementPosition);
            }

            if (elementPosition < 25) {
              cssModifier.left(className, 0);
            }
          }
        }
      }
    }

    const getAllLeftSlides = () => {
      const slides = $('section');
      let counter = 0;

      slides.each(function(index, slide) {
        if (slide.attributes && slide.hasAttribute('left')) {
          counter++;
        }
      });
    }

    const currentPosition = $(document).scrollTop();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const scrollPercent = (currentPosition / windowHeight) - 2;
    const elementPosition = windowWidth - scrollPercent * windowWidth;
    const zooming = (currentPosition / windowHeight) * 2;

    const three = $('.three').offset().top;
    const six = $('.six').offset().top;
    const seven = $('.seven');

    // getAllLeftSlides();

    setElementFixed();
    zoomNextElement();

    if (currentPosition >= three) {
      if (elementPosition >= 0) {
        cssModifier.left('four', elementPosition);
      }

      if (elementPosition < 25) {
        cssModifier.left('four', 0);
      }
    }

    if (currentPosition < three) {
      cssModifier.paddingBottom('three', 2 * window.innerHeight);
      cssModifier.left('four', '100%');
    }

    if ($('.four').offset().left === 0) {
      cssModifier.positionFixed('four');
      cssModifier.transformScaleFixed('four');

      if (windowWidth + elementPosition >= 0) {
        cssModifier.left('fife', windowWidth + elementPosition);
      }

      if (windowWidth + elementPosition < 25) {
        cssModifier.left('fife', 0);
      }
    }

    if ($('.four').offset().left > 0) {
      cssModifier.transformScaleZoom('four', utils.countZoom('four'));
      cssModifier.left('fife', '100%');
    }

    if ($('.fife').offset().left > 0) {
      cssModifier.transformScaleZoom('fife', utils.countZoom('fife'));
    }

    if ($('.fife').offset().left === 0) {
      cssModifier.positionFixed('fife');
      cssModifier.transformScaleFixed('fife');
    }

    if (currentPosition >= six) {
      if (3 * windowWidth + elementPosition >= 0) {
        cssModifier.left('seven', 3 * windowWidth + elementPosition);
      }

      if (3 * windowWidth + elementPosition < 25) {
        cssModifier.left('seven', 0);
      }
    }

    if (currentPosition < six) {
      cssModifier.paddingBottom('six', window.innerHeight);
      cssModifier.left('seven', '100%');
    }

    if ($('.seven').offset().left > 0) {
      cssModifier.transformScaleZoom('seven', utils.countZoom('seven'));
    }

    if ($('.seven').offset().left === 0) {
      cssModifier.positionFixed('seven');
      cssModifier.transformScaleFixed('seven');
    }
  });
})();
