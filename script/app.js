Vue.createApp({
    data() {
        return {
            images: [
                {currentImage: 'https://i.ibb.co/1qXSh0s/nana.png', old: 'https://i.ibb.co/S72Dyhv/nana.jpg', current: 'https://i.ibb.co/xhf1mC5/new2.jpg'},
                {currentImage: 'https://i.ibb.co/qJZw7sC/new1.jpg', old: 'https://i.ibb.co/hsck58J/nana2.jpg', current: 'https://i.ibb.co/cJ1jHGR/new4.jpg'},
                {currentImage: 'https://i.ibb.co/PMLWTv2/new5.jpg', old: 'https://i.ibb.co/k6Byhfy/nana3.jpg', current: 'https://i.ibb.co/0tmjmYB/new6.jpg'},
                {currentImage: 'https://i.ibb.co/dBKxDDR/new7.jpg', old: 'https://i.ibb.co/YhG1zNw/nana4.jpg', current: 'https://i.ibb.co/bJjdQC2/new8.jpg'},
            ]
        }
    }
}).mount('#app');
