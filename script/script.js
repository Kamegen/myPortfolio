

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('mobile-load-animation');
        web.classList.add('web-load-animation');
        htmlcss.classList.add('htmlcss-load-animation');
        js.classList.add('js-load-animation');
        angular.classList.add('angular-load-animation');

        }
    });
    });

    observer.observe(document.querySelector('.mobile-load'));
    const web = document.querySelector('.web-load');
    const htmlcss = document.querySelector('.htmlcss-load');
    const js = document.querySelector('.js-load');
    const angular = document.querySelector('.angular-load');