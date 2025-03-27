
    $(document).ready(function () {
        var currentPage = window.location.pathname.split("/").pop() || 'index.html';
        function updateActiveLinks() {
            $('.navigation-bar a, .burger-menu .links-container a').each(function () {
                if ($(this).attr('href') === currentPage) {
                    $(this).addClass('active').attr('aria-current', 'page');
                } else {
                    $(this).removeClass('active').removeAttr('aria-current');
                }
            });
        }
        updateActiveLinks();
    });
