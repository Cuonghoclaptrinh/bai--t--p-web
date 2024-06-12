document.querySelectorAll('.catelogue-item-link').forEach(item => {
    item.addEventListener('click', event => {
        // Ngăn chặn hành vi mặc định của liên kết
        event.preventDefault();

        // Xóa lớp 'active' từ tất cả các mục
        document.querySelectorAll('.catelogue-item').forEach(el => {
            el.classList.remove('active');
        });

        // Thêm lớp 'active' vào mục được click
        item.parentElement.classList.add('active');
    });
});