import { FormDirtyGuard } from './form-dirty.guard';

import { IFormDirty } from './form-dirty-.interface';
import { FormGroup, FormControl } from '@angular/forms';

// fdescribe(FormDirtyGuard.name, () => {
//     it('exists', () => {
//         expect(FormDirtyGuard).toBeDefined()
//     });
//     describe('General', () => {
//         let guard: FormDirtyGuard;
//         let component: IFormDirty

//         beforeEach(() => {
//             guard = new FormDirtyGuard()
//             component = {
//                 form: new FormGroup(
//                     { firstName: new FormControl('', []) }
//                 )
//             }
//         });
//         describe('canDeactivate', () => {
//             it('when the form is dirty ask the usres if they would like to proceed', () => {
//                 // arrange
//                 component.form.get('firstName').markAsDirty()
//                 spyOn(window, 'confirm').and.returnValue(true);

//                 // act
//                 const result = guard.canDeactivate(component)
//                 // assert

//                 expect(window.confirm).toHaveBeenCalled()
//             });

//             it('when form is clean proceeds', () => {
//                 // act
//                 const result = guard.canDeactivate(component)
//                 // assert
//                 expect(result).toBe(true)
//             })
//         })
//     });

// })

// *****************

// describe('FormDirtyGuard', () => {
//   let guard: FormDirtyGuard;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     guard = TestBed.inject(FormDirtyGuard);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });
// });

