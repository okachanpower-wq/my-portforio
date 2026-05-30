document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // ハンバーガーメニューをクリックした時の動き
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // メニュー内のリンクをクリックしたら、メニューを閉じる
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 料金プランのボタンをクリックしたときに、フォームのプランを自動選択
    const planSelect = document.getElementById('plan');
    const planButtons = document.querySelectorAll('.btn-plan[data-plan]');

    planButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planValue = button.dataset.plan;
            if (planSelect && planSelect.querySelector(`option[value="${planValue}"]`)) {
                planSelect.value = planValue;
            }
        });
    });
});