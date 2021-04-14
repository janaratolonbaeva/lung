(function ($) {
  $(document).on('mouseup', function (e) {
    const target = $(e.target);

    if (!$('.nav').is(target) && $('.nav').has(target).length === 0) {
      $('.nav').removeClass('active');
      $('.burger').removeClass('active');
    }
  });

  $(document).on('mouseup', function (e) {
    const target = $(e.target);

    if (!$('.popup').is(target) && $('.popup').has(target).length === 0) {
      $('.popup').removeClass('open');
      $('.popup-wrapper').removeClass('open');
    }
  });

  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
  });

  $('#signin').on('click', function () {
    $('.popup').addClass('open');
    $('.popup-wrapper').addClass('open');
  });

  $('.close-btn').on('click', function () {
    $('.popup').removeClass('open');
    $('.popup-wrapper').removeClass('open');
  });

  $('.share-btn').on('click', function () {
    $('.js-btn').toggleClass('active');
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
    if ($('.webinar-slider')) {
      $('.webinar-slider').css('display', 'none');
      $('.webinar-row').css('display', 'flex');
      $('.icon-lists-1').css('display', 'none');
      $('.icon-lists-2').css('display', 'flex');
    } else {
      $('.webinar-slider').css('display', 'block');
      $('.webinar-row').css('display', 'none');
      $('.icon-lists-2').css('display', 'none');
      $('.icon-lists-1').css('display', 'flex');
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

  // Form submit

  $('#signin-form').on('submit', function (e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    const url = '/';

    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      data: {
        email: email,
        pass: password,
      },
      success: function (data, textStatus, jQxhr) {
        console.log('Success');
      },
      error: function (jqXhr, textStatus, error) {
        console.log(error);
      },
    });
  });
})(jQuery);
