import {Component, Renderer2, ViewContainerRef} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageableTableData} from "jigsaw/core/data/table-data";
import {AdditionalColumnDefine, ColumnDefine, TableValueGenerators} from "jigsaw/component/table/table-typings";
import {SortAs, SortOrder} from "jigsaw/core/data/component-data";

@Component({
    templateUrl: './app.component.html'
})
export class TableAddIDWithPagingComponent {
    pageable: PageableTableData;

    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2, http: HttpClient) {
        this.pageable = new PageableTableData(http, {
            url: 'http://localhost:4200/mock-data/array-collection/paging-data.json',
            params: {aa: 11, bb: 22}
        });
        this.pageable.onAjaxComplete(() => {
            console.log(this.pageable);
        });
        this.pageable.fromAjax();
    }

    getCurrentPage() {
        this.pageable.fromAjax();
    }

    getPageSize() {
        this.pageable.fromAjax();
    }

    _columns: ColumnDefine[] = [{
        target: 'id',
        header: {
            sortable: true,
            sortAs: SortAs.number,
            defaultSortOrder: SortOrder.asc,
        }
    }];

    _additionalColumns: AdditionalColumnDefine[] = [{
        pos: 0,
        header: {
            text: '#'
        },
        cell: {
            data: TableValueGenerators.rowIndexGenerator
        }
    }]
}
