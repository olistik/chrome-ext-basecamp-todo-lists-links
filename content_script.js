// if (!window.location.host.match(/basecamphq\.com/) || window.location.pathname != '/todo_lists') {
//   // do nothing
//   return;
// }

// jQueryfy

(function($) {
  elements = $('small[id^="item_"]');
  elements.each(function() {
    element = $(this);
    link_id = element.attr('id'); // "item_135050089_notice"
    todo_id = link_id.replace(/item_|_notice/g, ''); // "135050089"

    row = element.closest('tr');
    if (!row.hasClass('"firstofgroup"')) {
      row = row.prevAll().filter('[class*=firstofgroup]').first();
    }
    todolist_link = row.first().find('.todolisttitle a').attr('href');
    // "/projects/9119713-e-commerce-prada/todo_lists/18702206"

    todo_link = todolist_link
      .replace(/todo_list.*$/, 'todo_items/' + todo_id + '/comments');
    // "/projects/9119713-e-commerce-prada/todo_items/135050089/comments"

    template  = '<div class="comments" behavior="selectable_target" style="display: inline-block;">';
    template += '  <a href="' + todo_link +  '" class="comments_link unread" target="_blank">';
    template += '    <span class="sprite comments" style="background: url(https://asset1.basecamphq.com/rev_70c2430/images/basecamp_sprites.png) no-repeat -135px -0px; width: 13px; padding-top: 13px; " title="Comments">';
    template += '      Comments';
    template += '    </span>';
    template += '  </a>';
    template += '</div>';

    element.before(template);
  });
})(jQuery);
