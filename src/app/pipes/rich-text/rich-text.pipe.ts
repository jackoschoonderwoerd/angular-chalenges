import { Pipe, PipeTransform } from '@angular/core';
import { htmlRegex } from '../../components/rich-text-viewer/models/html-valid.data';

@Pipe({
    name: 'richText'
})
export class RichTextPipe implements PipeTransform {

    transform(value: string): unknown {
        const html = this.parseNonEmptyHtml(value);
        const isValidHtml = htmlRegex.test(html)
        return isValidHtml ? html : 'non valid html, (check public html-string in pipes-documentation.component.ts, is missing "<")';
    }
    private parseNonEmptyHtml(html: string) {
        const htmlTags: RegExp = /<[^]*?>/g;
        const hasContent = html.replace(htmlTags, '').trim().length > 0;
        return hasContent ? html : ''
    }

}
