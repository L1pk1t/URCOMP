        document.addEventListener('DOMContentLoaded', () => {
            const burgerIcon = document.getElementById('burgerIcon');
            const mobileMenu = document.getElementById('mobileMenu');
            const closeMenu = document.getElementById('closeMenu');
            
            burgerIcon.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                burgerIcon.classList.toggle('active');
            });
            
            closeMenu.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            // Закрытие меню при клике на пункты
            document.querySelectorAll('.mobile-menu-item a').forEach(item => {
                item.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        });