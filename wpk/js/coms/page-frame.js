import headerComponents from "./header"
import footerComponents from "./footer"
export default {
    props: ['title', 'nav_active', "bar"],
    data() {
        return {
            page: {
                width: innerWidth,
                height: innerHeight
            },
        }
    },
    template: `<div id="page-content">
        <!-- -------------------- 页头 -------------------- -->
        <page-header :page="page" :nav_active="nav_active"></page-header>
        
        <!-- -------------------- 背景图 -------------------- -->
        <div class="content-bar" :page="page" :style="{height: page.height + 'px', 'width': page.width + 'px', 'background-image': 'url(' + bar + ')'}">
            <img :src="title" alt="喜岳云庐酒店美景" class="content-bar-title ani-show">
        </div>
        
        <!-- -------------------- 内容 -------------------- -->
        <slot></slot>
        
        <!-- -------------------- 页脚 -------------------- -->
        <page-footer :page="page"></page-footer>
    </div>`,
    components: {
        'page-header': headerComponents,
        'page-footer': footerComponents,
    },
    mounted() {
        if (this.page.width >= 1200) {
            let toLeft = {
                distance: '80%',
                origin: 'right',
                opacity: 0
            };
            let toRight = {
                distance: '80%',
                origin: 'left',
                opacity: 0
            };
            let toUp = {
                distance: '80%',
                origin: 'bottom',
                opacity: 0
            };
            let toDown = {
                distance: '80%',
                origin: 'top',
                opacity: 0
            };
            let opacity = {
                opacity: 0,
            };
            ScrollReveal({
                duration: 2000,
                delay: 300,
                easing: "ease-out",
            });
            ScrollReveal().reveal('.ani-show', opacity);
            ScrollReveal().reveal('.ani-left', toLeft);
            ScrollReveal().reveal('.ani-right', toRight);
            ScrollReveal().reveal('.ani-up', toUp);
            ScrollReveal().reveal('.ani-down', toDown);
        }

        // 响应式
        window.onresize = ()=>{
            this.page.width = innerWidth;
        }
    }
}