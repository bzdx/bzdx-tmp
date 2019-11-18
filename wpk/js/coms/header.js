export default {
    props: ['page', 'nav_active'],
    data() {
        return {
            lang: "zh-CN",
            navs: [],
            logo: "/static/img/logo.png",
            header_height: 0,
            btn_img: '/static/img/menu-open.png',
            showMenu: false,
        }
    },
    methods: {
        menuBtn() {
            this.showMenu ? this.btn_img = '/static/img/menu-open.png' : this.btn_img = '/static/img/menu-close.png';
            this.showMenu = !this.showMenu;
        },
        changeLang(lang) {
            localStorage.setItem('lang', lang);
            location.href = lang === 'zh-CN' ? '/' : '/en';
        }
    },
    template: `<header id="page-header" :style="{height: header_height, width: page.width + 'px'}">
        <img class="header-logo" :src="logo" alt="喜岳云庐logo">
        <div class="header-btn" v-if="page.width <= 768" :style="{'background-image': 'url(' + btn_img + ')'}" @click="menuBtn"></div>
        
        <transition name="fade"
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutRight"
          :duration="1000">
            <nav class="header-nav-list" v-show="page.width >= 768 || showMenu">
                <a class="header-nav-list-item" 
                  v-for="(nav, index) in navs" 
                  :href="lang === 'zh-CN' ? nav.link : '/en' + nav.link"
                  :class="{'header-nav-list-item-active': nav_active === index, 'header-nav-list-item-en': lang === 'en-US'}">
                    {{ nav.text }}
                </a>
            </nav>
        </transition>
        
        <div class="header-lang">
            <span :class="{'active': lang === 'zh-CN'}" @click="changeLang('zh-CN')">中文</span> | 
            <span :class="{'active': lang === 'en-US'}" @click="changeLang('en-US')">English</span>
        </div>
    </header>`,
    mounted() {
        setTimeout(()=>{
            this.lang = localStorage.getItem("lang") || 'zh-CN';
            this.navs = this.$t("header.navs");
            this.header_height = this.page.width * 0.072 + 'px';
        }, 100);
    }
};