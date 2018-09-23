export const setZIndex = (sectionName, number) => {
  $(`.${sectionName}`).css({
    'z-index': number
  });
}

export const setLeftSlideConfig = (sectionName) => {
  $(`.${sectionName}`).css({
    'position': 'fixed',
    'top': 0,
    'left': '100%'
  });
}

export const positionFixedDiv = (sectionName) => {
  $(`.${sectionName} > div`).css({
    'position': 'fixed'
  });
}

export const positionFixed = (sectionName) => {
  $(`.${sectionName}`).css({
    'position': 'fixed'
  });
}

export const transformScaleFixed = (sectionName) => {
  $(`${sectionName} > .content > .text`).css({
    'transform': 'scale(1)'
  });
}

export const positionAbsoluteDiv = (sectionName) => {
  $(`.${sectionName} > div`).css({
      'position': 'absolute'
  });
}

export const transformScaleZoom = (sectionName, zooming) => {
  $(`.${sectionName} > .content > .text`).css({
    'transform': `scale(${zooming})`
  });
}

export const paddingBottom = (sectionName, padding) => {
  $(`.${sectionName}`).css({
    'padding-bottom': padding
  });
}

export const left = (sectionName, left) => {
  $(`.${sectionName}`).css({
    'left': left
  });
}
