Vue.config.devtools = true;

new Vue(
    {
        el: "#root",
        data: {
            photos: [
                'img/roma.jpg',
                'img/napoli.png',
                'img/parigi.jpg',
                'img/londra.jpg',
            ],
            photoIndex: 0,
            timer: null,
        },
        created() {
            this.thankUNext();
        },
        methods: {
            next: function () {
                this.stopCounting();
                if (this.photoIndex === this.photos.length - 1) {
                    this.photoIndex = 0;
                } else {
                    this.photoIndex++;
                }
            },
            prev: function () {
                this.stopCounting();
                if (this.photoIndex === 0) {
                    this.photoIndex = this.photos.length - 1;
                } else {
                    this.photoIndex--;
                }
            },
            currentDot: function (index) {
                if (index === this.photoIndex) {
                    return 'current';
                } else {
                    return '';
                }
            },
            moveTo: function (index) {
                this.stopCounting();
                this.photoIndex = index;
            },
            thankUNext: function () {
                //creo una variabile globale cui assegnare il setInterval
                this.timer = setInterval(() => {
                    this.next();
                }, 3000)
            },
            stopCounting: function () {
                clearInterval(this.timer);
                this.thankUNext();
            }
        }
    }
)