(function ($) {
  const responsiveWindow = () => {
    if (window.matchMedia('(min-width: 650px)').matches) {
      $('.burger').on('click', function () {
        if (!$('.nav').hasClass('active')) {
          $(this).addClass('active');
          $('.nav').addClass('active');
        } else {
          $(this).removeClass('active');
          $('.nav').removeClass('active');
        }
      });

      $(document).mouseup(function (event) {
        if ($('.nav').has(event.target).length === 0) {
          $('.nav').removeClass('active');
          $('.burger').removeClass('active');
        }
      });

      $('#signin').on('click', function () {
        $('.popup').addClass('open');
        $('.popup-wrapper').addClass('open');
      });
    } else {
      $('.burger').on('click', function () {
        if (!$('.nav').hasClass('active')) {
          $(this).addClass('active');
          $('.nav').addClass('active');
        } else {
          $(this).removeClass('active');
          $('.nav').removeClass('active');
        }
      });
    }
  };

  responsiveWindow();

  $('.share-btn').on('click', function () {
    $('.js-btn').toggleClass('active');
  });

  $('.close-btn').on('click', function () {
    $('.popup').removeClass('open');
    $('.popup-wrapper').removeClass('open');
  });

  //Slider
  $('.webinar-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: '850',
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.lists-btn').on('click', function () {
    if ($('.icon-lists-1')) {
      $('.icon-lists-1').css('display', 'none');
      $('.icon-lists-2').css('display', 'flex');
      $('.webinar-slider')
        .addClass('webinar-row')
        .removeClass('webinar-slider');
      $('.webinar-slide').addClass('webinar-col').removeClass('webinar-slide');
    } else {
      $('.icon-lists-1').css('display', 'flex');
      $('.icon-lists-2').css('display', 'none');
      $('.webinar-row').addClass('webinar-slider').removeClass('webinar-row');
      $('.webinar-col').addClass('webinar-slide').removeClass('webinar-col');
    }
  });

  // Timer

  let deadline = '2021-04-23';

  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (days < 10) {
      days = '0' + days;
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
    };
  };

  const setClock = (endtime) => {
    let days = $('#days'),
      hours = $('#hours'),
      minutes = $('#minutes');

    const updateClock = () => {
      let a = getTimeRemaining(endtime);
      days.text(a.days);
      hours.text(a.hours);
      minutes.text(a.minutes);

      if (a.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
      }
    };
    let timeInterval = setInterval(updateClock, 1000);
  };

  setClock(deadline);
})(jQuery);
