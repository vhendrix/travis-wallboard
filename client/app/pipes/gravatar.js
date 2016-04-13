'use strict';
import {Pipe, PipeTransform} from 'angular2/core';
import { Store } from "../services/store";
@Pipe({name: 'gravatar'})
export class Gravatar implements PipeTransform {

    transform(email, args) {


        let store = new Store();
        let settings = store.getValue('user-settings');

        for (let i = 0; i < settings.length; i ++) {
            let setting = settings[i];
            if (setting.name === email) {
                return setting.img;
            }
        }
        let baseUrl = 'http://www.gravatar.com/avatar/';
        let hash = md5(email.trim().toLowerCase());

        return baseUrl + hash;
    }
}
