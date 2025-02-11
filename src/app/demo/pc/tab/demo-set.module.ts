import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TabsBasicDemoModule} from './basic/demo.module';
import {TabsDestroyDemoModule} from "./destroy-tab/demo.module";
import {TabsHideTabDemoModule} from "./hide-tab/demo.module";
import {TabsWithNgForDemoModule} from "./with-ngfor/demo.module";
import {TabsShowTabDemoModule} from "./show-tab/demo.module";
import {DynamicTabDemoModule} from "./api/demo.module";
import {TabsWithInputDemoModule} from "./with-input/demo.module";

import {JigsawTabsDemoComponent} from "./basic/demo.component";
import {JigsawTabsWithInputComponent} from "./with-input/demo.component";
import {JigsawTabsWithNgForComponent} from "./with-ngfor/demo.component";
import {JigsawHideTabComponent} from "./hide-tab/demo.component";
import {JigsawShowTabComponent} from "./show-tab/demo.component";
import {JigsawDestoryTabComponent} from "./destroy-tab/demo.component";
import {DynamicTabDemoComponent} from "./api/demo.component";
import {TabsUpdateTitleDemoComponent} from "./update-title/demo.component";
import {TabsUpdateTitleDemoModule} from "./update-title/demo.module";
import {TabsEditableDemoComponent} from "./editable/demo.component";
import {TabsEditableDemoModule} from "./editable/demo.module";
import {TabHeadlessDemoComponent} from "./headless/demo.component";
import {TabHeadlessDemoModule} from "./headless/demo.module";
import {TabsTypeDemoComponent} from "./type/demo.component";
import {TabsTypeDemoModule} from "./type/demo.module";
import {TabsTitleRendererDemoModule} from "./title-renderer/demo.module";
import {TabsTitleRendererComponent} from "./title-renderer/demo.component";
import { TabsBackgroundDemoComponent } from './background/demo.component';
import { TabsBackgroundDemoModule } from './background/demo.module';

export const routerConfig = [
    {
        path: 'api', component: DynamicTabDemoComponent,
        children: [
            {
                path: 'tab-page', loadChildren: () => import('./api/tabContent/tab-content.module').then(m => m.TabContentModule)
            }
        ]
    },
    {
        path: 'basic', component: JigsawTabsDemoComponent
    },
    {
        path: 'with-input', component: JigsawTabsWithInputComponent
    },
    {
        path: 'with-ngfor', component: JigsawTabsWithNgForComponent
    },
    {
        path: 'hide-tab', component: JigsawHideTabComponent
    },
    {
        path: 'show-tab', component: JigsawShowTabComponent
    },
    {
        path: 'destroy-tab', component: JigsawDestoryTabComponent
    },
    {
        path: 'update-title', component: TabsUpdateTitleDemoComponent
    },
    {
        path: 'editable', component: TabsEditableDemoComponent
    },
    {
        path: 'headless', component: TabHeadlessDemoComponent
    },
    {
        path: 'type', component: TabsTypeDemoComponent
    },
    {
        path: 'title-renderer', component: TabsTitleRendererComponent
    },
    {
        path: 'background', component: TabsBackgroundDemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig),
        TabsBasicDemoModule, TabsDestroyDemoModule, TabsHideTabDemoModule, TabsShowTabDemoModule,
        DynamicTabDemoModule, TabsWithInputDemoModule, TabsWithNgForDemoModule, TabsUpdateTitleDemoModule,
        TabsEditableDemoModule, TabHeadlessDemoModule, TabsTypeDemoModule, TabsTitleRendererDemoModule, TabsBackgroundDemoModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsDemoModule {
}
