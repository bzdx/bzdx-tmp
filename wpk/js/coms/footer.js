export default {
    props: ['page'],
    data() {
        return {
            list: [],
            qrcode: "/static/img/qrcode.png",
            copy: "",
            beian: "",
            info_img: "/static/img/footer.png"
        }
    },
    methods: {
        goTo(link) {
            location.href = link;
        }
    },
    template: `<footer id="page-footer">
        <div class="footer-logo"></div>
        <img :src="info_img" alt="喜岳云庐的联系方式" class="footer-info" width="896">
        <img src="/static/img/qrcode.png" alt="喜岳云庐二维码" class="footer-code" width="200">
        <div class="footer-beian" :style="{width: page.width + 'px'}">
        <div class="footer-bottom">
            <div class="footer-bottom-copy">Copyright&copy; 2019, xy-yunhouse.com. All rights reserved.</div>
                <a href='http://beian.miit.gov.cn' target='_blank'>沪ICP备16015902号</a> | 
                <a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502008481'>
                    <img src="/static/img/gov.png" alt="喜岳云庐公安备案" style="position: relative; top: 4px; left: 8px; margin-right: 12px" class="img-gongan">
                    沪公网安备 31011502008481号
                </a>
            </div>
        </div>
    </footer>`,
    beforeMount() {
        this.lang = localStorage.getItem("lang") || 'zh-CN';
    },
    mounted() {
        setTimeout(()=>{
            this.beian = this.$t('footer.beian');
            this.list = this.$t('footer.list');
        }, 100);

        if (this.lang === 'zh-CN') {
            this.page.width > 768 ? this.info_img = "/static/img/footer.png" : this.info_img = "/static/img/footer-m.png";
        } else {
            this.page.width > 768 ? this.info_img = "/static/img/footer-en.png" : this.info_img = "/static/img/footer-m-en.png";
        }
    }
};