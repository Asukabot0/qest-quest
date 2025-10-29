(function () {
  var hero = document.querySelector('[data-hero-slideshow]');
  if (!hero) return;

  var track = hero.querySelector('[data-hero-track]');
  if (!track) return;

  var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
  if (!slides.length) return;

  var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
  var prev = hero.querySelector('[data-hero-prev]');
  var next = hero.querySelector('[data-hero-next]');
  var pauseBtn = hero.querySelector('[data-hero-pause]');
  var interval = parseInt(hero.getAttribute('data-interval'), 10);
  if (isNaN(interval) || interval <= 0) interval = 5000;

  var index = 0;
  var timer = null;

  function setActive(nextIndex) {
    slides.forEach(function (el) {
      el.classList.remove('is-active');
    });
    dots.forEach(function (d) {
      d.removeAttribute('aria-current');
    });

    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add('is-active');
    if (dots[index]) {
      dots[index].setAttribute('aria-current', 'true');
    }
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (pauseBtn) {
      pauseBtn.setAttribute('aria-pressed', 'true');
      pauseBtn.textContent = '▶';
    }
  }

  function play() {
    stop();
    if (slides.length < 2) return;
    timer = setInterval(function () {
      setActive(index + 1);
    }, interval);
    if (pauseBtn) {
      pauseBtn.setAttribute('aria-pressed', 'false');
      pauseBtn.textContent = '❚❚';
    }
  }

  if (prev) {
    prev.addEventListener('click', function () {
      setActive(index - 1);
    });
  }

  if (next) {
    next.addEventListener('click', function () {
      setActive(index + 1);
    });
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var target = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(target)) {
        setActive(target);
      }
    });
  });

  if (pauseBtn) {
    pauseBtn.addEventListener('click', function () {
      if (timer) {
        stop();
      } else {
        play();
      }
    });
  }

  track.addEventListener('mouseenter', stop);
  track.addEventListener('mouseleave', play);
  track.addEventListener('focusin', stop);
  track.addEventListener('focusout', play);
  track.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActive(index - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActive(index + 1);
    }
  });

  if (slides.length > 1) {
    play();
  } else {
    if (prev) prev.style.display = 'none';
    if (next) next.style.display = 'none';
    if (pauseBtn) pauseBtn.style.display = 'none';
    if (hero.querySelector('.qest-hero__nav')) {
      hero.querySelector('.qest-hero__nav').style.display = 'none';
    }
  }
})();
