import * as tslib_1 from "tslib";
import { Component, NgZone, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
var provider = new OpenStreetMapProvider();
export var AutocompleteType;
(function (AutocompleteType) {
    AutocompleteType["CITY"] = "city";
    AutocompleteType["NEIGHBORHOOD"] = "living_street, village, neighbourhood, administrative, bus_stop, house, street, way";
})(AutocompleteType || (AutocompleteType = {}));
var AutocompleteInputComponent = /** @class */ (function () {
    function AutocompleteInputComponent(zone, eRef) {
        this.zone = zone;
        this.eRef = eRef;
        this.placeholder = "Search for a place...";
        this.static = false;
        this.onSearchResult = new EventEmitter();
        this.places = [];
        this.input = '';
        this.output = '';
        this.isSearchboxOpened = false;
    }
    Object.defineProperty(AutocompleteInputComponent.prototype, "type", {
        get: function () { return this._type; },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutocompleteInputComponent.prototype, "region", {
        get: function () { return this._region; },
        set: function (region) {
            this._region = region;
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteInputComponent.prototype.clickout = function (event) {
        this.isSearchboxOpened = this.eRef.nativeElement.contains(event.target);
        if (!this.isSearchboxOpened) {
            this.places = [];
            this.places.length = 0;
        }
    };
    AutocompleteInputComponent.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.isSearchboxOpened) {
            clearTimeout(this.searchCall);
            this.searchCall = setTimeout(function () {
                provider.search({
                    query: _this.input + ' ' + (_this.region ? _this.region.split(',')[0] : '')
                })
                    .then(function (results) {
                    _this.zone.run(function () {
                        _this.places = _this.uniq(results); //.filter( result => this.isRelevant(result)))
                    });
                });
            }, 300);
        }
    };
    // isRelevant( result ){
    //   return true || this.type.indexOf(result.raw.type) !== -1 ||  this.type.indexOf(result.raw.osm_type) !== -1;
    // }
    AutocompleteInputComponent.prototype.regionsMatch = function (result) {
        if (this.region)
            return this.region.split(", ").every(function (elem) { return result.label.indexOf(elem) > -1; });
        else
            return true;
    };
    AutocompleteInputComponent.prototype.uniq = function (a) {
        var seen = {};
        var out = [];
        var len = a.length;
        var j = 0;
        for (var i = 0; i < len; i++) {
            var item = a[i];
            var name = item.label.split(',')[0];
            if (seen[name] !== 1) {
                seen[name] = 1;
                out[j++] = item;
            }
        }
        return out;
    };
    AutocompleteInputComponent.prototype.onSerachResultTap = function (item) {
        this.places = [];
        this.places.length = 0;
        this.isSearchboxOpened = false;
        this.onSearchResult.emit(item);
        if (!this.static) {
            this.output = item.label;
        }
        this.input = item.label;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AutocompleteInputComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AutocompleteInputComponent.prototype, "static", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], AutocompleteInputComponent.prototype, "type", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], AutocompleteInputComponent.prototype, "region", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AutocompleteInputComponent.prototype, "onSearchResult", void 0);
    tslib_1.__decorate([
        HostListener('document:click', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], AutocompleteInputComponent.prototype, "clickout", null);
    AutocompleteInputComponent = tslib_1.__decorate([
        Component({
            selector: 'app-autocomplete-input',
            styleUrls: ['./autocomplete-input.component.scss'],
            templateUrl: './autocomplete-input.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [NgZone, ElementRef])
    ], AutocompleteInputComponent);
    return AutocompleteInputComponent;
}());
export { AutocompleteInputComponent };
//# sourceMappingURL=autocomplete-input.component.js.map