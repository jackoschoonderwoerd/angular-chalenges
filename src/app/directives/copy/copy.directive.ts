import { Directive, Input, HostListener, Inject } from '@angular/core';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Directive({
    selector: '[appCopy]'
})
export class CopyDirective {
    @Input() appCopy = '';

    constructor(
        @Inject('Navigator') public navigator: Navigator,
        @Inject('Document') public document: Document,
        public snackbarService: SnackbarService) { }

    @HostListener('click')

    public async copy(): Promise<void> {
        try {
            await this.navigator.clipboard.writeText(this.appCopy)
                .then(() => {
                    this.snackbarService.callSnackbar('Copied Success');
                })
                .catch((err) => {
                    console.log(err);
                    this.snackbarService.callSnackbar('Copied Failure');
                })

        } catch {
            this.snackbarService.callSnackbar('Copied Failed');
        }
    }
}
