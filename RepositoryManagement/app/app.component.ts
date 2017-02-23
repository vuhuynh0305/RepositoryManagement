import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li *ngFor="let router of routerLink"><a [routerLink]="['repository',router.repo]" routerLinkActive='active'>{{router.name}}</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container body-content">
        <router-outlet></router-outlet>
        <hr />
        <footer>
            regre
        </footer>
    </div>
    
    `,
})
export class AppComponent {
    public routerLink = [
        { repo: 'n', name: 'Chợ Nhà' },
        { repo: 'm', name: 'Chợ' },
        { repo: 't', name: 'Chợ Tâm' }
    ];

    constructor() {
    }
}
