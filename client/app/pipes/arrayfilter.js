'use strict';
import { Pipe } from "angular2/core";

@Pipe({
    name: "arraySort"
})
export class ArraySortPipe {

    transform(array: Array<string>, args: string): Array<string> {
        array.sort(
            function (a, b) {

                var dta = Date.parse(a.val.getFinishedAt());
                var dtb = Date.parse(b.val.getFinishedAt());

                if ( dta < dtb ) {
                    return 1;
                } else if ( dta === dtb ) {
                    return 0;
                } else {
                    return -1;
                }
            }
        );
        return array;
    }
}
