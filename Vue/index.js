var app = new Vue({
    el: '#app',

    data: {
        carColor: {
            color: 'purple'
        },
        offersList: [
            {
                img: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/05/0x0-ModelS_05.jpg?quality=70&strip=info",
                title: 'Tesla Model S',
                price: '22000',
                description: 'New car, 0km to pick up in NY',
                bonus: false,
                special: false,
                color: 'red'
            },
            {
                img: "https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5658cc682daad077cb99f68btesla-model-x-conf-1.jpeg?quality=70&strip=all",
                title: 'Tesla Model X',
                price: '46000',
                description: 'New car, 0km to pick up in MIA',
                bonus: true,
                special: true,
                color: 'gray'
            }
        ]
    }
})