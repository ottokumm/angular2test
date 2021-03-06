System.register(['@angular/platform-browser-dynamic', '@angular/core'], function(exports_1, context_1) {
	"use strict";
	var __moduleName = context_1 && context_1.id;
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
		if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var platform_browser_dynamic_1, core_1;
	var Article, ArticleComponent, RedditApp;
	return {
		setters:[
			function (platform_browser_dynamic_1_1) {
				platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
			},
			function (core_1_1) {
				core_1 = core_1_1;
			}],
		execute: function() {
			Article = (function () {
				function Article(title, link, votes) {
					this.title = title;
					this.link = link;
					this.votes = votes || 0;
				}
				Article.prototype.voteUp = function () {
					this.votes += 1;
				};
				Article.prototype.voteDown = function () {
					this.votes -= 1;
				};
				return Article;
			}());
			ArticleComponent = (function () {
				function ArticleComponent() {
				}
				ArticleComponent.prototype.voteUp = function () {
					this.article.voteUp();
					return false;
				};
				ArticleComponent.prototype.voteDown = function () {
					this.article.voteDown();
					return false;
				};
				ArticleComponent = __decorate([
					core_1.Component({
						selector: 'reddit-article',
						inputs: ['article'],
						host: {
							class: 'row'
						},
						templateUrl: './redditArticle.html'
					}), 
					__metadata('design:paramtypes', [])
				], ArticleComponent);
				return ArticleComponent;
			}());
			RedditApp = (function () {
				function RedditApp() {
					this.articles = [
						new Article('Angular 2', 'http://angular.io', 10),
						new Article('Fullstack', 'http://fullstack.io', 3),
						new Article('Angular Homepage', 'http://angular.io', 10)
					];
				}
				RedditApp.prototype.addArticle = function (title, link) {
					console.log("Adding article with title " + title.value + " and link " + link.value);
				};
				RedditApp = __decorate([
					core_1.Component({
						selector: 'reddit',
						directives: [ArticleComponent],
						templateUrl: './redditForm.html'
					}), 
					__metadata('design:paramtypes', [])
				], RedditApp);
				return RedditApp;
			}());
			platform_browser_dynamic_1.bootstrap(RedditApp);
		}
	}
});
//# sourceMappingURL=reddit.js.map