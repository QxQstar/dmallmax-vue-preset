import {fetch} from '@/lib/http.js';

export function getBasicData(param) {
    return fetch(param);
}
