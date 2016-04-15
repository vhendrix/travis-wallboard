'use strict';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'stateClass'})
export class StateClass implements PipeTransform {
    transform(state, args) {
        var blockClass = '';
        if (state === 'failed') {
            blockClass = 'build-failed-item';
        } else if (state === 'passed' || state === 'finished') {
            blockClass = 'build-success-item';
        } else if (state === 'started' || state === 'received' || state === 'created') {
            blockClass = 'build-pending-item';
        } else if (state === 'canceled') {
            blockClass = 'build-canceled-item';
        } else {
            blockClass = 'build-error-item';
        }

        return blockClass;
    }
}
