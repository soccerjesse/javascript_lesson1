'use strict';

$(() => {
  const $input = $('input');
  $input.focus();

  $('button').click(() => {
    $('<li>').text($input.val()).appendTo('ul');
    $input.val('').focus();
  })

  $('ul').click(e => {
    if (e.target.nodeName !== 'LI' || !confirm('sure?')){
      return;
    }

    $(e.target).fadeOut();
  })
})