﻿import { Component } from '@angular/core';
import { RepositoryModel } from '../../models/repository.model';
import { RepositoryService } from './repository.service';
import { Params, ActivatedRoute } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'repository',
    templateUrl: 'repository.component.html'
})

export class RepositoryComponent {
    public repository: RepositoryModel[];

    constructor(
        private repositoryService: RepositoryService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        //this.route.params.subscribe(params => {
        //    let repository = 't';
        //    this.repositoryService.getList().subscribe(res => {
        //        this.repository = res.filter(repo => repo.Repository == repository);
        //    });
        //})
        let repository = 't';
        this.repositoryService.getList().subscribe(res => {
            this.repository = res.filter(repo => repo.Repository == repository);
        });
    }
}