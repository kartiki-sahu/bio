import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ComponentsComponent } from './components.component';
import { WaterfallAnimationComponent } from './waterfall-animation/waterfall-animation.component';
import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from 'app/shared/progress-bar/progress-bar.component';
import { ProjectJourneyComponent } from './project-journey/project-journey.component';
import { TechnicalJourneyComponent } from './technical-journey/technical-journey.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        AboutComponent,
        WaterfallAnimationComponent,
        SkillsComponent,
        ProgressBarComponent,
        ProjectJourneyComponent,
        TechnicalJourneyComponent
    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
