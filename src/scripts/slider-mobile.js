import * as setCss from './cssModifier';
import * as utils from './utils';

(() => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    $('.scrollable-sections').css({
        'overflow': 'scroll'
    });

    $('.scrollable-sections').scroll(() => {
      const currentPosition = $('.scrollable-sections').scrollTop();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const scrollPercent = (currentPosition / windowHeight) - 2;
      const elementPosition = windowWidth - scrollPercent * windowWidth;
      const zooming = (currentPosition / windowHeight) * 2;

      const about = $('.about').offset().top;
      const sapFirst = $('.experience.sap-first').offset().top;
      const sapSecond = $('.experience.sap-second');
      const xsolve = $('.experience.xsolve');
      const autea = $('.experience.autea');
      const aeiFirst = $('.education.aei-first').offset().top;
      const aeiSecond = $('.education.aei-second');
      const skills = $('.skills').offset().top;
      const openwhisk = $('.portfolio.openwhisk').offset().top;
      const blog = $('.portfolio.blog');
      const other = $('.portfolio.other');
      const contact = $('.contact').offset().top;

      if (currentPosition - about >= windowHeight) {
        setCss.positionFixedChild('about');
        setCss.transformScaleFixed('about');
      }

      if (currentPosition - about < windowHeight) {
        setCss.positionAbsoluteChild('about');
        setCss.transformScaleZoom('about', zooming - 1);
      }

      if (currentPosition - sapFirst >= 2 * windowHeight) {
        setCss.positionFixedChild('experience.sap-first');
        setCss.transformScaleFixed('experience.sap-first');

        if (elementPosition >= 0) {
          setCss.left('experience.sap-second', elementPosition);
        }

        if (elementPosition < 25) {
          setCss.left('experience.sap-second', 0);
        }
      }

      if (currentPosition - sapFirst < 2 * windowHeight) {
        setCss.positionAbsoluteChild('experience.sap-first');
        setCss.transformScaleZoom('experience.sap-first', zooming - 3);
        setCss.paddingBottom('experience.sap-first', 3 * window.innerHeight);
        setCss.left('experience.sap-second', '100%');
      }

      if ($('.experience.sap-second').offset().left === 0) {
        setCss.positionFixed('experience.sap-second');
        setCss.transformScaleFixed('experience.sap-second');

        if (windowWidth + elementPosition >= 0) {
          setCss.left('experience.xsolve', windowWidth + elementPosition);
        }

        if (windowWidth + elementPosition < 25) {
          setCss.left('experience.xsolve', 0);
        }
      }

      if ($('.experience.sap-second').offset().left > 0) {
        setCss.transformScaleZoom('experience.sap-second', utils.countedZoom('experience.sap-second'));
        setCss.left('experience.xsolve', '100%');
      }

      if ($('.experience.xsolve').offset().left === 0) {
        setCss.positionFixed('experience.xsolve');
        setCss.transformScaleFixed('experience.xsolve');

        if (2 * windowWidth + elementPosition >= 0) {
          setCss.left('experience.autea', 2 * windowWidth + elementPosition);
        }

        if (2 * windowWidth + elementPosition < 25) {
          setCss.left('experience.autea', 0);
        }
      }

      if ($('.experience.xsolve').offset().left > 0) {
        setCss.transformScaleZoom('experience.xsolve', utils.countedZoom('experience.xsolve'));
        setCss.left('experience.autea', '100%');
      }

      if ($('.experience.autea').offset().left > 0) {
        setCss.transformScaleZoom('experience.autea', utils.countedZoom('experience.autea'));
      }

      if ($('.experience.autea').offset().left === 0) {
        setCss.positionFixed('experience.autea');
        setCss.transformScaleFixed('experience.autea');
      }

      if (currentPosition - aeiFirst >= 6 * windowHeight) {
        setCss.positionFixedChild('education.aei-first');
        setCss.transformScaleFixed('education.aei-first');

        if (4 * windowWidth + elementPosition >= 0) {
          setCss.left('education.aei-second', 4 * windowWidth + elementPosition);
        }

        if (4 * windowWidth + elementPosition < 25) {
          setCss.left('education.aei-second', 0);
        }
      }

      if (currentPosition - aeiFirst < 6 * windowHeight) {
        setCss.positionAbsoluteChild('education.aei-first');
        setCss.paddingBottom('education.aei-first', window.innerHeight);
        setCss.left('education.aei-second', '100%');

        if (zooming - 11 < 1) {
          setCss.transformScaleZoom('education.aei-first', zooming  - 11);
        }
      }

      if ($('.education.aei-second').offset().left > 0) {
        setCss.transformScaleZoom('education.aei-second', utils.countedZoom('education.aei-second'));
      }

      if ($('.education.aei-second').offset().left === 0) {
        setCss.positionFixed('education.aei-second');
        setCss.transformScaleFixed('education.aei-second');
      }

      if (currentPosition - skills >= 8 * windowHeight) {
        setCss.positionFixedChild('skills');
        setCss.transformScaleFixed('skills');
      }

      if (currentPosition - skills < 8 * windowHeight) {
        setCss.positionAbsoluteChild('skills');

        if (zooming - 15 < 1) {
          setCss.transformScaleZoom('skills', zooming - 15);
        }
      }

      if (currentPosition - openwhisk >= 9 * windowHeight) {
        setCss.positionFixedChild('portfolio.openwhisk');
        setCss.transformScaleFixed('portfolio.openwhisk');

        if (7 * windowWidth + elementPosition >= 0) {
          setCss.left('portfolio.blog', 7 * windowWidth + elementPosition);
        }

        if (7 * windowWidth + elementPosition < 25) {
          setCss.left('portfolio.blog', 0);
        }
      }

      if (currentPosition - openwhisk < 9 * windowHeight) {
        setCss.positionAbsoluteChild('portfolio.openwhisk');
        setCss.paddingBottom('portfolio.openwhisk', 2 * window.innerHeight);
        setCss.left('portfolio.blog', '100%');

        if (zooming - 17 < 1) {
          setCss.transformScaleZoom('portfolio.openwhisk', zooming - 17);
        }
      }

      if ($('.portfolio.blog').offset().left === 0) {
        setCss.positionFixed('portfolio.blog');
        setCss.transformScaleFixed('portfolio.blog');

        if (8 * windowWidth + elementPosition >= 0) {
          setCss.left('portfolio.other', 8 * windowWidth + elementPosition);
        }

        if (8 * windowWidth + elementPosition < 25) {
          setCss.left('portfolio.other', 0);
        }
      }

      if ($('.portfolio.blog').offset().left > 0) {
        setCss.transformScaleZoom('portfolio.blog', zooming - 19);
        setCss.left('portfolio.other', '100%');
      }

      if ($('.portfolio.other').offset().left === 0) {
        setCss.positionFixed('portfolio.other');
        setCss.transformScaleFixed('portfolio.other');
      }

      if ($('.portfolio.other').offset().left > 0) {
          setCss.transformScaleZoom('portfolio.other', zooming - 21);
      }

      if (currentPosition - openwhisk >= 15 * windowHeight) {
        setCss.positionFixedChild('contact');
        setCss.transformScaleFixed('contact');
      }

      if (currentPosition - openwhisk < 15 * windowHeight) {
        setCss.positionAbsoluteChild('contact');

        if (zooming - 23 < 1) {
          setCss.transformScaleZoom('contact', zooming - 23);
        }
      }
    });
  }
})();
