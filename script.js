// Scroll to Top Button
window.onscroll = function () {
    const scrollTopButton = document.getElementById("scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

// Scroll to the top functionality
document.getElementById("scroll-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
