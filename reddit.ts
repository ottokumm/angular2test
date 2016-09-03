import {
    bootstrap
} from '@angular/platform-browser-dynamic';

import {
    Component
}
from '@angular/core';

class Article {
    votes: number;
    title: string
    link: string;

    constructor(title: string, link: string, votes ? : number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }
}

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: './redditArticle.html'
})

class ArticleComponent {
    article: Article;

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
}

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    templateUrl: './redditForm.html'

})

class RedditApp {
    articles: Array < Article > ;

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 10),
            new Article('Fullstack', 'http://fullstack.io', 3),
            new Article('Angular Homepage', 'http://angular.io', 10)
        ]
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article with title ${title.value} and link ${link.value}`)
    }
}

bootstrap(RedditApp);