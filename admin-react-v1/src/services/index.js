'use strict';

import axios from 'axios';

const services = {
    getAppReviews() {
        return axios.get('https://api-caveira600.mybluemix.net/reviews');
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(axios.get('../../resources/example.json'));
        //     }, 2000);
        // });
    }
};

export default services;