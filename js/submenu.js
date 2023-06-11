const Hover = {
    menu: {},
    subMenu: {},
    currentElement: null,
    timeoutOver: null,
    time: 180,

    activate: function (menu, subMenu, time) {
        if (typeof menu === "undefined" || typeof subMenu === "undefined") return;
        if (typeof time !== "undefined")this.time = parseInt(time);
        this.menu = document.querySelector(menu);
        this.subMenu = document.querySelector(subMenu);

        this.over();
        this.out();
    },
    over: function () {
        this.menu.onmouseover = (e) => {

            clearTimeout(this.timeoutOver);

            this.timeoutOver = setTimeout(() => {

                if ((this.menu.contains(e.relatedTarget) && this.currentElement) || this.menu === e.target) return;

                let parentElement = e.target;

                let menuChildren = [...this.menu.children];
                let subMenuChildren = [...this.subMenu.children];

                menuChildren.forEach(index => index.removeAttribute('style'));
                subMenuChildren.forEach(index => index.removeAttribute('style'));

                while (this.menu !== parentElement && this.menu.contains(parentElement)) {
                    this.currentElement = parentElement;
                    parentElement = this.currentElement.parentNode;
                }
                if (!this.currentElement) return;

                let index = menuChildren.indexOf(this.currentElement);
                this.currentElement.style.background = '#EEEEEE';
                this.currentElement.style.borderTopLeftRadius = '25px';
                this.currentElement.style.borderBottomLeftRadius = '25px';
                subMenuChildren[index].style.display = 'block';
            }, this.time);
        }
    },
    out: function () {
        this.menu.onmouseout = (e) => {

            if (!this.currentElement || this.menu === e.relatedTarget || !this.menu.contains(e.relatedTarget)) return;

            let relatedTarget = e.relatedTarget;
            while (this.menu.contains(relatedTarget)) {
                if (relatedTarget === this.currentElement) return;
                relatedTarget = relatedTarget.parentNode;
            }
            this.currentElement = null;
        }
    }
};
Hover.activate('.menu','.column_container')
