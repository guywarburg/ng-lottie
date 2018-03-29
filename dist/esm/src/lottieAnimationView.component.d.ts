import { OnInit, ElementRef } from '@angular/core';
export declare class LottieAnimationViewComponent implements OnInit {
    private platformId;
    options: any;
    width: number;
    height: number;
    animCreated: any;
    lavContainer: ElementRef;
    viewWidth: string;
    viewHeight: string;
    private _options;
    private bodymovin;
    private isBrowser;
    constructor(platformId: any);
    ngOnInit(): void;
}
