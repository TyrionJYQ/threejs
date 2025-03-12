// 获取当前页面的文件名
function getCurrentPageNumber() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return parseInt(filename) || 1;
}

// 创建导航按钮
function createNavigationButtons() {
    const nav = document.createElement('div');
    nav.className = 'page-navigation';
    nav.innerHTML = `
        <button class="nav-button prev" title="上一课">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            <span>上一课</span>
        </button>
        <button class="nav-button next" title="下一课">
            <span>下一课</span>
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
        </button>
    `;

    // 添加到页面
    document.body.appendChild(nav);

    // 添加事件监听
    const prevButton = nav.querySelector('.prev');
    const nextButton = nav.querySelector('.next');
    const currentPage = getCurrentPageNumber();

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            window.location.href = `${currentPage - 1}.html`;
        }
    });

    nextButton.addEventListener('click', () => {
        window.location.href = `${currentPage + 1}.html`;
    });

    // 添加键盘事件监听
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentPage > 1) {
            window.location.href = `${currentPage - 1}.html`;
        } else if (e.key === 'ArrowRight') {
            window.location.href = `${currentPage + 1}.html`;
        }
    });

    // 更新按钮状态
    if (currentPage === 1) {
        prevButton.disabled = true;
    }
}

// 页面加载完成后初始化导航
document.addEventListener('DOMContentLoaded', createNavigationButtons);