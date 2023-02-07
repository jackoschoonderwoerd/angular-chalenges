import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from '../shared/shared.service';

describe('CalcService', () => {
    let service: CalcService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalcService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('shoud multiply two numbers', () => {
        const sharedService = new SharedService();
        const calcService = new CalcService(sharedService);
        const result = calcService.multiply(3, 5);
        expect(result).toBe(15);
    });

    it('should call the mySharedFunction func', () => {
        const shared = new SharedService();
        spyOn(shared, 'mySharedFunction').and.callThrough();
        const calc = new CalcService(shared);
        calc.multiply(3, 5)
        expect(shared.mySharedFunction).toHaveBeenCalled();
    })
});
