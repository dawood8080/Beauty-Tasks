class Sidebar {
    constructor() {
        this.SidebarContainer = document.createElement('div');
        const icon1Container = document.createElement('div');
        const icon2Container = document.createElement('div');
        const icon3Container = document.createElement('div');
        const icon1 = document.createElement('img');
        const icon2 = document.createElement('img');
        const icon3 = document.createElement('img');
        icon1.src = './icons/Download.png';
        icon2.src = './icons/heart.png';
        icon3.src = './icons/save.png';

        this.SidebarContainer.classList.add('sidebar-container');
        icon1Container.classList.add('icon-container');
        icon2Container.classList.add('icon-container');
        icon3Container.classList.add('icon-container');

        window.addEventListener('mousemove', this.ShowHideSidebar);

        icon1Container.appendChild(icon1);
        icon2Container.appendChild(icon2);
        icon3Container.appendChild(icon3);
        this.SidebarContainer.appendChild(icon1Container);
        this.SidebarContainer.appendChild(icon2Container);
        this.SidebarContainer.appendChild(icon3Container);
    }

    ShowHideSidebar = event => {
        const fullWidth = document.body.offsetWidth;
        if( event.x > fullWidth - 120 ){
            document.querySelector('.sidebar-container').classList.add('show');
        }
        else {
            document.querySelector('.sidebar-container').classList.remove('show');
        }
    }

    getSidebarContainer() {
        return this.SidebarContainer;
    }
}

const sidebar = new Sidebar().getSidebarContainer();
document.body.appendChild(sidebar);
