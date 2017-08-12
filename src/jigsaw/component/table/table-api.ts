import {EventEmitter, Input, Output, TemplateRef, Type} from "@angular/core";
import {TableData} from "../../core/data/table-data";
import {SortAs, SortOrder} from "../../core/data/component-data";

export class TableCellRenderer {
    public dispatchChangeEvent(value: string|number|TableHeadChangeEvent): void{
        this.cellDataChange.emit(value)
    }

    @Input() tableData: TableData;
    @Input() cellData: any;
    @Input() row: number;
    @Input() column: number;

    @Output() cellDataChange: EventEmitter<string|number|TableHeadChangeEvent> = new EventEmitter<string|number|TableHeadChangeEvent>();
}

export type ColumnDefine = {
    target: TableColumnTarget,
    visible?: boolean,
    width?: string,
    header?: TableHeader,
    cell?: TableCell,
    group?: boolean
}

export type AdditionalColumnDefine = {
    pos?: number,
    field?: string|number,
    visible?: boolean,
    width?: string,
    header?: TableHeader,
    cell?: TableCell,
    group?: boolean
}

export type TableDataChangeEvent = {
    field: string|number,
    row: number|number[],
    column: number,
    rawColumn: number,
    cellData: string|number,
    oldCellData: string|number
}

export type TableHeadChangeEvent = {
    rows: number[],
    cellData: string|number,
    oldCellData: string|number
}

export type TableColumnTarget = number|string|number[]|string[]|TableColumnTargetFunc;

export type TableColumnTargetFunc = (field: string, index: number) => boolean;

export type TableHeader = {
    text?: string,
    renderer?: Type<TableCellRenderer>|TemplateRef<any>,
    class?: string,
    sortable?: boolean,
    sortAs?: SortAs,
    defaultSortOrder?: SortOrder
}

export type TableCell = {
    renderer?: Type<TableCellRenderer>|TemplateRef<any>,
    class?: string,
    editable?: boolean,
    editorRenderer?: Type<TableCellRenderer>
}

export class TableHeadSetting {
    cellData: string | number;
    width: string | number;
    visible: boolean;
    renderer: Type<TableCellRenderer> | TemplateRef<any>;
    class: string;
    sortable: boolean;
    sortAs: SortAs;
    defaultSortOrder: SortOrder;
    field: number;
}

export class TableCellSetting {
    cellData: string | number;
    width: string | number;
    visible: boolean;
    renderer: Type<TableCellRenderer> | TemplateRef<any>;
    class: string;
    editable: boolean;
    editorRenderer: Type<TableCellRenderer> | TemplateRef<any>;
    group: boolean;
    field: number;
    rowSpan: number;
}

export type SortChangeEvent = {
    sortAs: SortAs,
    order: SortOrder,
    field: number
}
export type RemoveTdListener = {
    removeTdListener: Function,
    row: number,
    column: number
}
