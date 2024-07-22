let sidebarActive = false;

function initializeSidebar() {
    const menu = document.querySelector('.icon-menu');

    menu.addEventListener('click', () => {
        sidebarActive = !sidebarActive;

        if (sidebarActive) {
            document.querySelector('.sidebar').innerHTML = `
                <div class="sidebar-top-section">
                <img class="icon-menu" src="images/Menu.png" alt="">
                <div class="home icon-container">
                    <img class="icon-home icon " src="images/Home.png" alt="">
                    <div class="icon-home-text icon-text">Home</div>
                </div>
                <div class="compare icon-container">
                    <img class="icon-divide icon" src="images/Divide.png" alt="">
                    <div class="icon-divide-text icon-text">Compare</div>
                </div>
                <div class="bookmark icon-container">
                    <img class="icon-bookmark icon" src="images/Bookmark.png" alt="">
                    <div class="icon-bookmark-text icon-text">Bookmark</div>
                </div>
                <div class="align-center icon-container">
                    <img class="icon-align-center icon" src="images/Align center.png" alt="">
                    <div class="icon-align-center-text icon-text">History</div>
                </div>
                </div>
                <img class="icon-settings icon" src="images/Settings.png" alt="">
            `;
            initializeSidebar();

            const home = document.querySelector('.icon-home');
            const divide = document.querySelector('.icon-divide');
            const bookmark = document.querySelector('.icon-bookmark');
            const alignCenter = document.querySelector('.icon-align-center');
            const settings = document.querySelector('.icon-settings');

            if (home) home.classList.toggle('active');
            setTimeout(() => { if (divide) divide.classList.toggle('active'); }, 100);
            setTimeout(() => { if (bookmark) bookmark.classList.toggle('active'); }, 200);
            setTimeout(() => { if (alignCenter) alignCenter.classList.toggle('active'); }, 300);
            setTimeout(() => { if (settings) settings.classList.toggle('active'); }, 1000);

            if (home) home.addEventListener('click', () => {
                window.location.href = 'home.html';
            });

            if (bookmark) bookmark.addEventListener('click', () => {
                window.location.href = 'bookmark.html';
            });

        } else {
            const home = document.querySelector('.icon-home');
            const divide = document.querySelector('.icon-divide');
            const bookmark = document.querySelector('.icon-bookmark');
            const alignCenter = document.querySelector('.icon-align-center');
            const settings = document.querySelector('.icon-settings');

            if (home) home.classList.toggle('active');
            setTimeout(() => { if (divide) divide.classList.toggle('active'); }, 100);
            setTimeout(() => { if (bookmark) bookmark.classList.toggle('active'); }, 200);
            setTimeout(() => { if (alignCenter) alignCenter.classList.toggle('active'); }, 300);
            setTimeout(() => { if (settings) settings.classList.toggle('active'); }, 1000);

            setTimeout(() => {
                document.querySelector('.sidebar').innerHTML = `
                <div class="sidebar-top-section">
                <img class="icon-menu" src="images/Menu.png" alt="">
                </div>
                <img class="icon-settings icon" src="images/Settings.png" alt="">
            `;
                initializeSidebar();
            }, 1100);
        }
    });
}

initializeSidebar();

document.querySelector('.image-cloud').addEventListener('click', () => {
    window.location.href = 'home.html';
});
