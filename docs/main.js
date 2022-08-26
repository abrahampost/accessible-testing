function showDevVisibilityBullet(but) {
    /**
     * @{HTMLElement} 
     */
    const el = document.querySelector('#dev-visibility');
    el.classList.remove('hidden');
    console.log(but);
    but.style.display = 'none';
}