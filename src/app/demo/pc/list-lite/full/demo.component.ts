import {Component} from "@angular/core";
import {ArrayCollection, GroupOptionValue, JigsawListLite} from "jigsaw/public_api";

@Component({
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class ListLiteFullDemoComponent {
    goodsStrList=['bicycle','camera','car','football','book','puzzle-piece'];

    goodsList: GroupOptionValue[] = [
        {
            icon: 'iconfont iconfont-e187',
            name: 'bicycle',
            desc: 'A bicycle, also called a cycle or bike, is a human-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other.'
        },
        JigsawListLite.SEPARATOR,
        {
            icon: 'iconfont iconfont-e2e7',
            name: 'camera',
            desc: 'A camera is an optical instrument for recording or capturing images, which may be stored locally, transmitted to another location, or both.'
        },
        {
            icon: 'iconfont iconfont-e18a',
            name: 'car',
            desc: 'A car (or automobile) is a wheeled motor vehicle used for transportation.',
            disabled: true
        },
        {
            icon: 'iconfont iconfont-e534',
            name: 'football',
            desc: 'Football is a family of team sports that involve, to varying degrees, kicking a ball with the foot to score a goal. '
        },
        JigsawListLite.SEPARATOR,
        {
            icon: 'iconfont iconfont-e565',
            name: 'book',
            desc: 'A book is a set of sheets of paper, parchment, or similar materials that are fastened together to hinge at one side.'
        },
        {
            icon: 'iconfont iconfont-e6ca',
            name: 'puzzle-piece',
            desc: 'A puzzle is a game, problem, or toy that tests a person\'s ingenuity or knowledge.'
        },
    ];

    selectedItems1: string;

    handleSelect(selectedItems) {
        this.selectedItems1 = selectedItems.map(item => item.name).toString()
    }

    selectedItems2: string;

    handleSelect2(selectedItems) {
        this.selectedItems2 = selectedItems.map(item => item.name).toString()
    }

    selectedItems3 = [
        {
            icon: 'iconfont iconfont-bicycle',
            name: 'bicycle',
            desc: 'A bicycle, also called a cycle or bike, is a human-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other.'
        },
        {
            icon: 'iconfont iconfont-book',
            name: 'book',
            desc: 'A book is a set of sheets of paper, parchment, or similar materials that are fastened together to hinge at one side.'
        },
    ];

    selectedItemsStr3: string = this.selectedItems3.map(item => item.name).toString();

    handleSelect3(selectedItems) {
        this.selectedItemsStr3 = selectedItems.map(item => item.name).toString()
    }

    selectedItems4: string;

    handleSelect4(selectedItems) {
        this.selectedItems4 = selectedItems.map(item => item.name).toString()
    }

    constructor() {
        this.goodsList5 = [...this.goodsList];
        [1, 2, 3, 4, 5, 6].forEach((item, index) => {
            this.goodsList5.push({
                icon: 'iconfont iconfont-bicycle',
                name: 'bicycle' + index,
                desc: 'A bicycle, also called a cycle or bike, is a human-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other.'
            })
        });
    }

    goodsList5;
    selectedItems5;

    handleSelect5(selectedItems) {
        this.selectedItems5 = selectedItems.map(item => item.name).toString()
    }

    selectedItems6 = new ArrayCollection([
        {
            icon: 'iconfont iconfont-book',
            name: 'book',
            desc: 'A book is a set of sheets of paper, parchment, or similar materials that are fastened together to hinge at one side.'
        },
    ]);

    selectedItems7;

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
}
