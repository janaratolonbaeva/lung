(function ($) {
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

  $('.share-btn').on('click', function () {
    $('.js-btn').toggleClass('active');
  });

  $('.email-btn').on('click', function () {
    $('.popup').addClass('open');
    $('.popup-wrapper').addClass('open');
  });

  $('.close-btn').on('click', function () {
    $('.popup').removeClass('open');
    $('.popup-wrapper').removeClass('open');
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

  //Slider
  $('#webinar-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: '768',
      },
    ],
  });
})(jQuery);

/*
<section class="webinar">
          <div class="title-block">
            <h2 class="title">
              <p>Centeast webinar series:</p>
              Hard talk on serous ovarian cancer
            </h2>
            <div class="title-btn">
              <a href="#" class="btn btn-primary">
                Узнать больше
                <svg width="5" height="8" fill="none">
                  <use xlink:href="#arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
          <div class="webinar-top">
            <div class="webinar-top-left">
              <h4>Прошедшие конференции</h4>
            </div>
            <div class="webinar-top-right">
              <a href="./index.html" class="lists-btn">
                <p>Список всех конференций</p>
                <div class="icon-lists icon-lists-2">
                  <i></i><i></i><i></i>
                </div>
              </a>
            </div>
          </div>
          <div class="webinar-row">
            <div class="webinar-item">
              <div class="webinar-item-img">
                <img src="./images/webinars-img.jpeg" width="466" height="316" alt="Webinar">
                <div class="webinar-item-info">
                  <p class="timer-title">Конференция
                    закончилась</p>
                  <div class="timer-item">
                    <span>25</span>
                    <p>Дней назад</p>
                  </div>
                </div>
              </div>
              <div class="webinar-item-content">
                <h5>Международная научно-практическая конференция</h5>
                <h3>ОНКОЛОГИЯ КАЗАХСТАНА ВЧЕРА, СЕГОДНЯ, ЗАВТРА</h3>
                <a href="#" class="btn btn-default">
                  Узнать больше
                  <svg width="5" height="8" fill="none">
                    <use xlink:href="#arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="webinar-item">
              <div class="webinar-item-img">
                <img src="./images/webinars-img.jpeg" width="466" height="316" alt="Webinar">
                <div class="webinar-item-info">
                  <p class="timer-title">Конференция
                    закончилась</p>
                  <div class="timer-item">
                    <span>148</span>
                    <p>Дней назад</p>
                  </div>
                </div>
              </div>
              <div class="webinar-item-content">
                <h5>Международная научно-практическая конференция</h5>
                <h3>ОНКОЛОГИЯ КАЗАХСТАНА ВЧЕРА, СЕГОДНЯ, ЗАВТРА</h3>
                <a href="#" class="btn btn-default">
                  Узнать больше
                  <svg width="5" height="8" fill="none">
                    <use xlink:href="#arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="webinar-item">
              <div class="webinar-item-img">
                <img src="./images/webinars-img.jpeg" width="466" height="316" alt="Webinar">
                <div class="webinar-item-info">
                  <p class="timer-title">Конференция
                    закончилась</p>
                  <div class="timer-item">
                    <span>25</span>
                    <p>Дней назад</p>
                  </div>
                </div>
              </div>
              <div class="webinar-item-content">
                <h5>Международная научно-практическая конференция</h5>
                <h3>ОНКОЛОГИЯ КАЗАХСТАНА ВЧЕРА, СЕГОДНЯ, ЗАВТРА</h3>
                <a href="#" class="btn btn-default">
                  Узнать больше
                  <svg width="5" height="8" fill="none">
                    <use xlink:href="#arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="webinar-item">
              <div class="webinar-item-img">
                <img src="./images/webinars-img.jpeg" width="466" height="316" alt="Webinar">
                <div class="webinar-item-info">
                  <p class="timer-title">Конференция
                    закончилась</p>
                  <div class="timer-item">
                    <span>148</span>
                    <p>Дней назад</p>
                  </div>
                </div>
              </div>
              <div class="webinar-item-content">
                <h5>Международная научно-практическая конференция</h5>
                <h3>ОНКОЛОГИЯ КАЗАХСТАНА ВЧЕРА, СЕГОДНЯ, ЗАВТРА</h3>
                <a href="#" class="btn btn-default">
                  Узнать больше
                  <svg width="5" height="8" fill="none">
                    <use xlink:href="#arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="webinar-item">
              <div class="webinar-item-img">
                <img src="./images/webinars-img.jpeg" width="466" height="316" alt="Webinar">
                <div class="webinar-item-info">
                  <p class="timer-title">Конференция
                    закончилась</p>
                  <div class="timer-item">
                    <span>25</span>
                    <p>Дней назад</p>
                  </div>
                </div>
              </div>
              <div class="webinar-item-content">
                <h5>Международная научно-практическая конференция</h5>
                <h3>ОНКОЛОГИЯ КАЗАХСТАНА ВЧЕРА, СЕГОДНЯ, ЗАВТРА</h3>
                <a href="#" class="btn btn-default">
                  Узнать больше
                  <svg width="5" height="8" fill="none">
                    <use xlink:href="#arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="webinar-item">
              <div class="webinar-item-img">
                <img src="./images/webinars-img.jpeg" width="466" height="316" alt="Webinar">
                <div class="webinar-item-info">
                  <p class="timer-title">Конференция
                    закончилась</p>
                  <div class="timer-item">
                    <span>148</span>
                    <p>Дней назад</p>
                  </div>
                </div>
              </div>
              <div class="webinar-item-content">
                <h5>Международная научно-практическая конференция</h5>
                <h3>ОНКОЛОГИЯ КАЗАХСТАНА ВЧЕРА, СЕГОДНЯ, ЗАВТРА</h3>
                <a href="#" class="btn btn-default">
                  Узнать больше
                  <svg width="5" height="8" fill="none">
                    <use xlink:href="#arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="webinar-bottom">
            <a href="#" class="btn btn-white">Показать еще</a>
          </div>
        </section>
        */
