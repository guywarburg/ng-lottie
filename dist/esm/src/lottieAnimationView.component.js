import { Component, Input, Inject, Output, EventEmitter, ViewChild, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var LottieAnimationViewComponent = (function () {
    function LottieAnimationViewComponent(platformId) {
        this.platformId = platformId;
        this.animCreated = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.bodymovin = require('bodymovin/build/player/bodymovin.js');
        }
    }
    LottieAnimationViewComponent.prototype.ngOnInit = function () {
        this._options = {
            container: this.lavContainer.nativeElement,
            renderer: 'svg',
            loop: this.options.loop !== false,
            autoplay: this.options.autoplay !== false,
            autoloadSegments: this.options.autoloadSegments !== false,
            animationData: this.options.animationData,
            path: this.options.path || '',
            rendererSettings: this.options.rendererSettings || {}
        };
        this.viewWidth = this.width + 'px' || '100%';
        this.viewHeight = this.height + 'px' || '100%';
        if (this.isBrowser) {
            var anim = this.bodymovin.loadAnimation(this._options);
            this.animCreated.emit(anim);
        }
    };
    return LottieAnimationViewComponent;
}());
export { LottieAnimationViewComponent };
LottieAnimationViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'lottie-animation-view',
                template: "\n        <ng-container *ngIf=\"isBrowser\">\n            <div #lavContainer\n                 [ngStyle]=\"{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}\">\n            </div>\n        </ng-container>"
            },] },
];
/** @nocollapse */
LottieAnimationViewComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
]; };
LottieAnimationViewComponent.propDecorators = {
    'options': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'animCreated': [{ type: Output },],
    'lavContainer': [{ type: ViewChild, args: ['lavContainer',] },],
};
//# sourceMappingURL=lottieAnimationView.component.js.map