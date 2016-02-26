'use strict';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'gravatar'})
export class Gravatar implements PipeTransform {
    transform(email, args) {
        let baseUrl = 'http://www.gravatar.com/avatar/';
        let hash = md5(email.trim().toLowerCase());

        return baseUrl + hash;
    }
}
