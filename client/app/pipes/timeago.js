'use strict';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'timeAgo'})
export class TimeAgo implements PipeTransform {
    transform(dateString, args) {
        var dt = new Date(Date.parse(dateString));
        var now = new Date();

        var diff = now.getTime() - dt.getTime();

        var minutes = Math.floor((diff / (60000)));

        if ( isNaN(minutes) ) {
            return 1 + ' Seconds';
        } else if ( minutes === 0 ) {
            var seconds = Math.floor((diff / (1000)));
            return seconds + ' Seconds';
        } else if ( minutes > 1440 ) {
            return Math.floor((diff / 86400000)) + ' Days';
        } else if ( minutes > 60 ) {
            var hours = Math.floor((diff / 3600000));
            minutes = Math.floor(((diff % 3600000) / 60000));
            return hours + ' Hours and ' + minutes + ' Minutes';
        } else {
            return minutes + ' Minutes';
        }
    }
}


