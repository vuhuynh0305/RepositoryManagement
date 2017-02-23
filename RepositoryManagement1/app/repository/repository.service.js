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
var http_1 = require('@angular/http');
// Import RxJs required methods
require('rxjs/add/operator/map');
var RepositoryService = (function () {
    function RepositoryService(http) {
        this.http = http;
        this.url = 'http://localhost:64604/api/repository';
    }
    ;
    RepositoryService.prototype.getList = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    RepositoryService.prototype.addProduct = function (value) {
        var body = JSON.stringify(value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options).map(function (res) { return res.json(); });
    };
    RepositoryService.prototype.updateProduct = function (value) {
        var body = JSON.stringify(value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.url, body, options).map(function (res) { return res.json(); });
    };
    RepositoryService.prototype.deleteProduct = function (id) {
        var delURL = this.url + "/" + id;
        return this.http.delete(delURL).map(function (res) { return res.json(); });
    };
    RepositoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RepositoryService);
    return RepositoryService;
}());
exports.RepositoryService = RepositoryService;
//# sourceMappingURL=repository.service.js.map