import { Component, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { LoaderType } from '../loader/models/loader-type.enum';
import { RibbonType } from '../ribbon/ribbon-type';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { SocialMediaIcon } from '../social-media-bar/social-media-icon.interface';
import { SocialMedia } from '../social-media-bar/social-media.enum';
import { PillType } from '../pill/pill-type.enum';

@Component({
    selector: 'app-component-documentation',
    templateUrl: './component-documentation.component.html',
    styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {

    // 72 Overlay
    public isShownOverlay: boolean

    // 64 Pill Component
    public PillType = PillType;

    // SocialMediaBar

    public socialMedia: SocialMediaIcon[] = [
        {
            href: '',
            type: SocialMedia.Facebook
        },
        {
            href: '',
            type: SocialMedia.Instagram
        },
        {
            href: '',
            type: SocialMedia.LinkedIn
        },
        {
            href: '',
            type: SocialMedia.Twitter
        },
        {
            href: '',
            type: SocialMedia.Youtube
        }

    ];

    // *********

    @ViewChild('snackbar') public snackbar: SnackbarComponent

    public tabs: { title: string, active: boolean }[] = [
        { title: 'Tab 1', active: true },
        { title: 'Tab 2', active: false }
    ]
    public selectedTab = 0;
    public RibbonType = RibbonType;
    public RibbonLocation = RibbonLocation;
    public ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.TopRight }

    public toggleValue = false;

    public progressValue = 25;

    public loaderType = LoaderType.Loading;

    public accordionItems: AccordionItem[] = [
        {
            title: 'Example 1',
            content: 'Example Content 1',
            isExpanded: false
        },
        {
            title: 'Example 2',
            content: 'Example Content 2',
            isExpanded: false
        }
    ]
    // skeleton loader:
    public loaded = false;


    public buttonToggleOptions: ButtonMeta[] = [
        new ButtonMeta({ id: 1, title: 'Bold' }),
        new ButtonMeta({ id: 2, title: 'Italic' }),
        new ButtonMeta({ id: 3, title: 'Underline' })
    ]

    public debounceExampleMethod(value: string): void {
        console.log('Component Documentation: ', value)
    }
    public snackbarShow(): void {
        this.snackbar.showMessage('Snackbar Example')
    }

}
