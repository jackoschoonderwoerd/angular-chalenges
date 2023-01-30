



import { AccordionComponent } from './components/accordion/accordion.component';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';

import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { FilterTermPipe } from './pipes/filter-term/filter-term.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { QuoteComponent } from './components/quote/quote.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SharedModule } from './shared/shared.module';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PagingComponent } from './components/paging/paging.component';
import { TabComponent } from './components/tab/tab.component';
import { SortTableComponent } from './components/sort-table/sort-table.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './components/banner-cut-out/banner-cut-out.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SimplePopupComponent } from './components/simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';






@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        TopOfPageComponent,
        // AccordionComponent,
        // BannerCutOutComponent,
        // ButtonToggleComponent,
        // ComponentDocumentationComponent,
        // CountdownTimerComponent,
        // CounterInputComponent,
        // CreditCardInputComponent,
        // DebounceSearchComponent,
        // EmailFormComponent,
        // LoaderComponent,
        // PagingComponent,
        // ProgressBarComponent,
        // QuoteComponent,
        // RibbonComponent,
        // RichTextViewerComponent,
        // SearchListComponent,
        // SimplePopupComponent,
        // SimpleTableComponent,
        // SnackbarComponent,
        // SortTableComponent,
        // StarRatingsComponent,
        // TabComponent,
        // ToggleComponent,
        // TwitterPostComponent,

        // FilterTermPipe,




    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AppMaterialModule,
        AppRoutingModule,
        // FormsModule,
        // ReactiveFormsModule,

    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
