import { Component } from '@angular/core';
import { RepositoryModel } from '../../Models/repository.model';
import { RepositoryService } from './repository.service';

@Component({
    moduleId: module.id,
    selector: 'repository',
    templateUrl: 'repository.component.html'
})

export class RepositoryComponent {
    repository: RepositoryModel[];

    constructor(private repositoryService: RepositoryService) {

    }

    ngOnInit() {
        this.repositoryService.getList().subscribe(res => {
            this.repository = res.filter(repo => repo.Repository == 't');
            console.log(this.repository);
            console.log(this.repository[0].Name);
        });
    }
}