"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var repository_service_1 = require('./repository.service');
var router_1 = require('@angular/router');
var RepositoryComponent = (function () {
    function RepositoryComponent(repositoryService, route) {
        this.repositoryService = repositoryService;
        this.route = route;
    }
    RepositoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.route.params.subscribe(params => {
        //    let repository = 't';
        //    this.repositoryService.getList().subscribe(res => {
        //        this.repository = res.filter(repo => repo.Repository == repository);
        //    });
        //})
        var repository = 't';
        this.repositoryService.getList().subscribe(function (res) {
            _this.repository = res.filter(function (repo) { return repo.Repository == repository; });
        });
    };
    RepositoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'repository',
            templateUrl: 'repository.component.html'
        }), 
        __metadata('design:paramtypes', [repository_service_1.RepositoryService, router_1.ActivatedRoute])
    ], RepositoryComponent);
    return RepositoryComponent;
}());
exports.RepositoryComponent = RepositoryComponent;
//# sourceMappingURL=repository.component.js.map