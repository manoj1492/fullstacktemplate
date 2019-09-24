var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
var AppComponent = /** @class */ (function () {
    function AppComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.app.authenticate(undefined, undefined);
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.http.post('logout', {}).pipe(finalize(function () {
            _this.app.authenticated = false;
            _this.router.navigateByUrl('/login');
        })).subscribe();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [AppService, HttpClient, Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map