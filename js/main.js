$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });

  particlesJS.load('particles-js', 'particlesjs.json');
});

var typed = new Typed('#typed', {
  strings: ['<p class="header1">metlx</p>^400\n `<script src="https://tryhackme.com/badge/199267"></script>` ^400\n `<a class="link1" href="https://github.com/metlx" data-toggle="tooltip" data-placement="bottom" title="Github"><i class="fab fa-github"></i></a>`'],
  typeSpeed: 90,
  backSpeed: 0,
  loop: false,
  cursorChar: '|',
  fadeout: true,
});
