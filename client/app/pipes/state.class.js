'use strict';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'stateClass'})
export class StateClass implements PipeTransform {
    transform(state, args) {
        var blockClass = '';
        console.debug(state);
        if (state === 'failed') {
            blockClass = 'btn-danger text-danger';
        } else if (state === 'passed' || state === 'finished') {
            blockClass = 'btn-success text-success';
        } else if (state === 'started' || state === 'received' || state === 'created') {
            blockClass = 'btn-info text-info';
        } else if (state === 'canceled') {
            blockClass = 'btn-info text-info text-canceled';
        } else {
            blockClass = 'btn-warning';
        }

        return blockClass;
    }
}
