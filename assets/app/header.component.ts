import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    	<header class="row">
    		<nav class="col-md-8 col-md-offset-2">
            	<ul class="nav nav-pills">
                	<!--Pelo atributo routerLinkActive associa-se o estilo CSS-->
                	<li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                </ul>
            </nav>
        </header>	    
    `
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}