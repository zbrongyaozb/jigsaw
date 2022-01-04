import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JigsawListModule, JigsawMenuModule, JigsawButtonBarModule, JigsawNumericInputModule, JigsawHeaderModule, JigsawBreadcrumbModule, JigsawFishBoneModule, JigsawButtonModule, JigsawSelectModule, JigsawTagModule, JigsawInputModule, JigsawAutoCompleteInputModule, JigsawCheckBoxModule, JigsawRadioModule, JigsawRadioLiteModule, JigsawListLiteModule, JigsawLoadingModule, JigsawCollapseModule, JigsawTileLiteModule, JigsawTileSelectModule } from "jigsaw/public_api";
import { JigsawDemoDescriptionModule } from "app/demo-description/demo-description";
import { ThemeBuildInThemeDemoComponent } from "./demo.component";

@NgModule({
    imports: [
        CommonModule, JigsawDemoDescriptionModule,
        JigsawHeaderModule,
        JigsawButtonModule,
        JigsawSelectModule,
        JigsawTagModule,
        JigsawInputModule,
        JigsawNumericInputModule,
        JigsawAutoCompleteInputModule,
        JigsawBreadcrumbModule,
        JigsawCheckBoxModule,
        JigsawRadioModule,
        JigsawRadioLiteModule,
        JigsawListModule,
        JigsawListLiteModule,
        JigsawLoadingModule,
        JigsawCollapseModule,
        JigsawTileLiteModule,
        JigsawTileSelectModule
    ],
    declarations: [ThemeBuildInThemeDemoComponent],
    exports: [ThemeBuildInThemeDemoComponent]
})
export class ThemeBuildInThemeDemoModule {
}
