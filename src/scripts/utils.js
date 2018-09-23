export const countZoom = (sectionName) => {
  return 1 - ($(`.${sectionName}`).offset().left / window.innerWidth)
}

export const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
}
