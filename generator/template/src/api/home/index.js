import $http from '@/lib/fetch.js';

export function getBasicData(param) {
    return $http(param);
}
