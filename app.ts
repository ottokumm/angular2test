import {
	bootstrap
} from '@angular/platform-browser-dynamic';

import {
	Component
} from '@angular/core';

@Component({
	selector: 'hello-world',
	template: `
		<div>
			<ul>
				<li *ngFor="let name of names">{{name}}</li>
			</ul>
		</div>
	`
})

class HelloWorld {
	names: Array < string > ;

	constructor() {
		this.names = ['Alex', 'Erika', 'Miranda', 'July'];
	}

}

bootstrap(HelloWorld);