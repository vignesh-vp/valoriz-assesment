import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 50 }, // Ramp-up to 50 users in 30s
        { duration: '1m', target: 50 },  // Stay at 50 users for 1m
        { duration: '30s', target: 0 },  // Ramp-down to 0 users in 30s
    ],
};

export default function () {
    let res = http.get('http://localhost:32002/api/menu/');
    sleep(1);
}

