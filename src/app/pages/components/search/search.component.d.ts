/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, ElementRef, AfterViewInit, ComponentFactoryResolver, ViewContainerRef, OnDestroy, OnInit } from '@angular/core';
import { NbSearchService } from './search.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Router } from '@angular/router';
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
export declare class NbSearchFieldComponent {
    static readonly TYPE_MODAL_ZOOMIN: string;
    static readonly TYPE_ROTATE_LAYOUT: string;
    static readonly TYPE_MODAL_MOVE: string;
    static readonly TYPE_CURTAIN: string;
    static readonly TYPE_COLUMN_CURTAIN: string;
    static readonly TYPE_MODAL_DROP: string;
    static readonly TYPE_MODAL_HALF: string;
    searchType: string;
    placeholder: string;
    searchClose: EventEmitter<{}>;
    search: EventEmitter<{}>;
    tabOut: EventEmitter<{}>;
    inputElement: ElementRef;
    showSearch: boolean;
    readonly modalZoomin: boolean;
    readonly rotateLayout: boolean;
    readonly modalMove: boolean;
    readonly curtain: boolean;
    readonly columnCurtain: boolean;
    readonly modalDrop: boolean;
    readonly modalHalf: boolean;
    type: any;
    closeSearch(): void;
    submitSearch(term: any): void;
}
/**
 * Beautiful full-page search control.
 *
 * @styles
 *
 * search-btn-open-fg:
 * search-btn-close-fg:
 * search-bg:
 * search-bg-secondary:
 * search-text:
 * search-info:
 * search-dash:
 * search-placeholder:
 */
export declare class NbSearchComponent implements OnInit, AfterViewInit, OnDestroy {
    private searchService;
    private componentFactoryResolver;
    private router;
    /**
     * Tags a search with some ID, can be later used in the search service
     * to determine which search component triggered the action, if multiple searches exist on the page.
     *
     * @type {string}
     */
    tag: string;
    type: any;
  /**
     * Search input placeholder
     * @type {string}
     */
    placeholder: string;
    showSearch: boolean;
    attachedSearchContainer: ViewContainerRef;
    private searchFieldComponentRef;
    private searchType;
    private activateSearchSubscription;
    private deactivateSearchSubscription;
    private routerSubscription;
    constructor(searchService: NbSearchService, componentFactoryResolver: ComponentFactoryResolver, router: Router);
    /**
     * Search design type, available types are
     * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
     * @type {string}
     */
    openSearch(): void;
    connectToSearchField(componentRef: any): void;
    createAttachedSearch(component: any): Observable<any>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
