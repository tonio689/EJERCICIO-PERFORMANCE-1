import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const data = new SharedArray('users', function () {
    return open('./data.csv')
        .split('\n')
        .slice(1)
        .map(line => {
            const [user, passwd] = line.split(',');
            return { user, passwd };
        });
});

export const options = {
    stages: [
        { duration: '30s', target: 20 }, // llegar a 20 TPS
        { duration: '1m', target: 20 },  // mantener carga
        { duration: '20s', target: 0 },  // bajar carga
    ],
    thresholds: {
        http_req_duration: ['p(95)<1500'], // ≤ 1.5s
        http_req_failed: ['rate<0.03'],    // < 3% errores
    },
};

export default function () {

    const userData = data[Math.floor(Math.random() * data.length)];

    const payload = JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(
        'https://fakestoreapi.com/auth/login',
        payload,
        params
    );

    check(res, {
        'status es 200': (r) => r.status === 200,
        'tiene token': (r) => r.json('token') !== undefined,
    });

    sleep(1);
}