import * as setCss from './cssModifier';

(function() {
  if (setCss.isMobi) {
    $('.scrollable-sections').css({
        'overflow': 'scroll'
    });
  }

  const isOnViewPort = (selector) => {
    const elementTop = $(selector).offset().top;
    const elementBottom = elementTop + $(selector).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  const getSlideAttributes = () => {
    return $('section').each(() => {
      console.log(this.attributes);
    });
  }

  const getSlides = () => $('section');

  const getCurrentPosition = () => setCss.isMobi() ? $('.scrollable-sections').scrollTop() : $(document).scrollTop();

  const getCurrentFixedSlideIndex = () => {
    const windowHeight = window.innerHeight;
    const currentPosition = getCurrentPosition();

    return Math.floor(currentPosition / windowHeight)
  }

  $(`${setCss.isMobi ? '.scrollable-sections' : window}`).scroll(function() {
    const currentPosition = $(`${setCss.isMobi ? '.scrollable-sections' : document}`).scrollTop();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const scrollPercent = (currentPosition / windowHeight) - 2;
    const elementPosition = windowWidth - scrollPercent * windowWidth;
    const zooming = (currentPosition / windowHeight) * 2;

    const slides = getSlides();
    const currentFixedSlideIndex = getCurrentFixedSlideIndex();

    console.log(slides[currentFixedSlideIndex])

    if (currentPosition >= slides[currentFixedSlideIndex].className) {
      setCss.positionFixedChild(slides[currentFixedSlideIndex].className);
      setCss.transformScaleFixed(slides[currentFixedSlideIndex].className);
    }


    if (currentPosition >= about) {
      setCss.positionFixedChild('about');
      setCss.transformScaleFixed('about');
    }

    if (currentPosition < about) {
      setCss.positionAbsoluteChild('about');
      setCss.transformScaleZoom('about', zooming  - 1);
      setCss.opacity('about', zooming);
    }
  });
})();
