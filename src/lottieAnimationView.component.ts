import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
declare let require: any;

@Component({
    selector: 'lottie-animation-view',
    template: `<div #lavContainer 
                    [ngStyle]="{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}">    
               </div>`
})

export class LottieAnimationViewComponent implements OnInit {
    @Input() options: any;
    @Input() width: number;
    @Input() height: number;

    @Output() animCreated: any = new EventEmitter();

    @ViewChild('lavContainer') lavContainer: ElementRef;

    public viewWidth: string;
    public viewHeight: string;
    private _options: any;
    
    constructor(@Inject(PLATFORM_ID) private platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        if (this.isBrowser) { 
            const bodymovin: any = require('bodymovin/build/player/bodymovin.js');
        }
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
            let anim: any = bodymovin.loadAnimation(this._options);
            this.animCreated.emit(anim);
        }
    }
}
