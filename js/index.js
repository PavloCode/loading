1
2
3
4
if (document.readyState || document.body.readyState == 'complete') {
    const loading = document.querySelector('.loading-wrap');
    loading.classList.add('close-loading');
}