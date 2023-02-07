import { Component, OnInit } from '@angular/core';
import { User } from '../user-service/user.model';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs'
import { SnackbarService } from '../snackbar/snackbar.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';


@Component({
    selector: 'app-services-documentation',
    templateUrl: './services-documentation.component.html',
    styleUrls: ['./services-documentation.component.scss']
})
export class ServicesDocumentationComponent implements OnInit {
    public user: User = new User();
    public error: string;
    public completed = 'not completed'
    public state: { [key: string]: any } = {};
    public localStorageform: FormGroup;
    public userIdExample: User


    user$: Observable<User>

    constructor(
        public userService: UserService,
        public snackBarService: SnackbarService,
        public localStorageService: LocalStorageService,
        public fb: FormBuilder,
        public route: ActivatedRoute) { }

    public ngOnInit(): void {
        // 74 Route Params
        this.route.params
            .pipe(
                map((params: any) => params.id),
                mergeMap((id) => this.userService.getUserById(id))

            ).subscribe({
                next: (value) => {
                    this.userIdExample = value
                }
            })

        // 73 Local storage
        this.initForm();

        this.localStorageService.state$.subscribe((data) => {
            this.state = data;
        })


        this.user$ = this.userService.getUserById(1)
        this.userService.getUserById(1).subscribe({
            next: (response: any) => {
                this.user = response
            },
            error: (
                error => this.error = error
            ),
            complete: () => {
                this.completed = 'completed'
                console.log('done')
            }
        })
    }

    // 73 Local storage
    initForm() {
        this.localStorageform = this.fb.group({
            key: new FormControl(null, [Validators.required]),
            value: new FormControl(null, [Validators.required])
        })
    }
    updateState() {
        this.localStorageService.setState(
            this.localStorageform.value.key,
            this.localStorageform.value.value
        );
    }

    public callSnackbar(): void {
        this.snackBarService.callSnackbar('Snackbar service example');
    }
}
