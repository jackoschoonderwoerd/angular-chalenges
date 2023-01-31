import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByKey'
})
export class SortByKeyPipe implements PipeTransform {

    transform(value: { [key: string]: string }[], key: string, isAscending = true): { [key: string]: string }[] {


        // return value;

        if (value === null || value === undefined) {
            return value;
        }
        if (!Array.isArray(value)) {
            throw new Error('sortByKey pipe requires an array.')
        }

        const values = [...value];

        console.log(values)

        return values.sort((a, b) => {
            console.log(a[key])
            const upperCased1 = a[key].toLowerCase();
            const upperCased2 = b[key].toLowerCase();

            if (upperCased1 < upperCased2) {
                return isAscending ? -1 : 1;
            }
            if (upperCased1 > upperCased2) {
                return !isAscending ? -1 : 1;
            }
            return 0;
        });


    }

}
