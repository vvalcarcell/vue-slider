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
        },
        created() {
            setInterval(() => {
                this.next();
            }, 3000)
        },
        methods: {
            next: function () {
                if (this.photoIndex === this.photos.length - 1) {
                    this.photoIndex = 0;
                } else {
                    this.photoIndex++;
                }
            },
            prev: function () {
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
                this.photoIndex = index;
            }
        }
    }
)