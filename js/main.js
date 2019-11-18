function toggleNav() {
  let headerEle = document.getElementsByClassName('header-right')[0];
  if (headerEle.getAttribute('style') === 'display: block') {
    headerEle.setAttribute('style', 'display: none');
  } else {
    headerEle.setAttribute('style', 'display: block');
  }
}
