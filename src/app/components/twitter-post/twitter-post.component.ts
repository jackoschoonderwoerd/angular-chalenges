import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-twitter-post',
    templateUrl: './twitter-post.component.html',
    styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
    @Input() public baseHref = 'https://www.jazzengel.nl';
    @Input() public hashTags: string[] = ['Jazz', 'Amsterdam']

    constructor(public titleService: Title) { }

    public get twitterUrl(): string {
        const base = this.getBaseWithHasTagsAndRoute();
        const message = encodeURIComponent(`check out ${this.titleService.getTitle()} and become a coding nerd`)
        return `${base}${message}`
    }

    getBaseWithHasTagsAndRoute() {
        const route = encodeURI(this.baseHref);
        const hashTags = this.hashTags.join(',');

        return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=pizzapokerguy&url=${route}`;
    }
}
