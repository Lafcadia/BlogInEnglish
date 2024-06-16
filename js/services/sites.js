utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-sites');
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const api = el.getAttribute('api');
      if (api == null) {
        continue;
      }
      const default_avatar = def.avatar;
      const default_cover = def.cover;
      // layout
      utils.request(el, api, function(data) {
        for (let item of data.content) {
          var cell = `<div class="grid-cell site-card">`;
          cell += `<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="${item.url}">`;
          cell += `<img src="${item.cover || item.screenshot}" onerror="javascript:this.removeAttribute(\'data-src\');this.src=\'${default_cover}\';"/>`;
          cell += `<div class="info">`;
          cell += `<img src="${item.icon || item.avatar || default_avatar}" onerror="javascript:this.removeAttribute(\'data-src\');this.src=\'${default_avatar}\';"/>`;
          cell += `<span class="title">${item.title}</span>`;
          cell += `<span class="desc">${item.description || item.url}</span>`;
          cell += `</div>`;
          cell += `</a>`;
          cell += `</div>`;
          $(el).find('.grid-box').append(cell);
        }
      });
    }
  });
});