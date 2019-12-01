if (document.readyState || document.body.readyState == 'complete') {
    // const loading = document.querySelector('.loading-wrap');
    // loading.classList.add('close-loading');

}


2
3
window.onload = function() {
    const loading = document.querySelector('.loading-wrap');
    loading.classList.add('close-loading');
}