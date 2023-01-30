import { Component, OnInit } from '@angular/core';
import { User } from '../user-service/user.model';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs'
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
    selector: 'app-services-documentation',
    templateUrl: './services-documentation.component.html',
    styleUrls: ['./services-documentation.component.scss']
})
export class ServicesDocumentationComponent implements OnInit {
    public user: User = new User();
    public error: string;
    public completed: string = 'not completed'

    user$: Observable<User>

    constructor(
        public userService: UserService,
        public snackBarService: SnackbarService) { }

    public ngOnInit(): void {
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

    public callSnackbar(): void {
        this.snackBarService.callSnackbar('Snackbar service example');
    }
}
