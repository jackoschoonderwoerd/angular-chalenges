import { Component, Input } from '@angular/core';
import { htmlRegex } from './models/html-valid.data'

@Component({
    selector: 'app-rich-text-viewer',
    templateUrl: './rich-text-viewer.component.html',
    styleUrls: ['./rich-text-viewer.component.scss']
})
export class RichTextViewerComponent {
    public validHtml = '';

    @Input() set htmlText(value: string) {
        const html = this.parseNonEmptyHtml(value);
        // console.log(html)

        const isValidHtml = htmlRegex.test(html)
        // console.log(isValidHtml)

        this.validHtml = isValidHtml ? html : '';
    }


    private parseNonEmptyHtml(html = '') {
        // console.log(html)
        const htmlTags = /<[^]*?>/g;
        const hasContent = html.replace(htmlTags, '').trim().length > 0;

        return hasContent ? html : '';
    }
}
