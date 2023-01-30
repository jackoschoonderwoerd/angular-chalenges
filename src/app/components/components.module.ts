import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { BannerCutOutComponent } from './banner-cut-out/banner-cut-out.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { LoaderComponent } from './loader/loader.component';
import { PagingComponent } from './paging/paging.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { QuoteComponent } from './quote/quote.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { TabComponent } from './tab/tab.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './component-routing.module';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsMaterialModule } from './components-material.module';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PillComponent } from './pill/pill.component';



@NgModule({
    declarations: [
        AccordionComponent,
        BannerCutOutComponent,
        ButtonToggleComponent,
        ComponentDocumentationComponent,
        CountdownTimerComponent,
        CounterInputComponent,
        CreditCardInputComponent,
        DebounceSearchComponent,
        EmailFormComponent,
        LoaderComponent,
        PagingComponent,
        ProgressBarComponent,
        QuoteComponent,
        RibbonComponent,
        RichTextViewerComponent,
        SearchListComponent,
        SimplePopupComponent,
        SimpleTableComponent,
        // SnackbarComponent,
        SortTableComponent,
        StarRatingsComponent,
        // TabComponent,
        ToggleComponent,
        // TopOfPageComponent,
        TwitterPostComponent,
        FooterComponent,
        SkeletonLoaderComponent,
        SocialMediaBarComponent,
        BottomSheetComponent,
        FieldsetComponent,
        PillComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsRoutingModule,
        ComponentsMaterialModule
    ]
})
export class ComponentsModule { }
