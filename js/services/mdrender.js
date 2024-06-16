utils.jq(() => {
  const els = document.getElementsByClassName('ds-mdrender');
  for (var i = 0; i < els.length; i++) {
    const el = els[i];
    const src = `${el.getAttribute('src')}?t=${new Date().getTime()}`;
    utils.request(el, src, function(data) {
      el.innerHTML = marked.parse(resp.data);
    });
  }
});