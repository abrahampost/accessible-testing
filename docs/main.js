function showDevVisibilityBullet(but) {
    /**
     * @{HTMLElement} 
     */
    const el = document.querySelector('#dev-visibility');
    el.classList.remove('hidden');
    but.style.display = 'none';
}