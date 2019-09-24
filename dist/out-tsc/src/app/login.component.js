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
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.credentials = { username: '', password: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.app.authenticate(this.credentials, function () {
            _this.router.navigateByUrl('/');
        });
        return false;
    };
    LoginComponent = __decorate([
        Component({
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [AppService, HttpClient, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map