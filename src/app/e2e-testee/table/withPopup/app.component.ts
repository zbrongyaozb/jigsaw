import {Component, Renderer2, ViewContainerRef} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TableData} from "jigsaw/core/data/table-data";
import {PopupService, PopupDisposer, PopupInfo} from "jigsaw/service/popup.service";


@Component({
  templateUrl: './app.component.html',
    styleUrls : ['./app.component.scss']
})

export class TableDataWithPopupDemoComponent {

     _popupInfo: PopupInfo;
     _disposer: PopupDisposer;

    tableData: TableData;
    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2,
                private _popupService: PopupService,
                http: HttpClient) {
        this.tableData = new TableData();
        this.tableData.http = http;
        this.tableData.fromAjax('mock-data/table/data.json');
    }
    popupTemplate(tp){
        this._popupInfo = this._popupService.popup(tp);
        this._disposer = () => {this._popupInfo.dispose()}
    }

}

