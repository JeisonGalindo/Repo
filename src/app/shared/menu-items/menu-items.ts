import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'email',
    name: 'EMAIL',
    type: 'link',
    icon: 'basic-paperplane'
  },
  {
    state: 'media',
    name: 'MEDIA',
    type: 'sub',
    icon: 'basic-todo-txt',
    children: [
      {
        state: 'list',
        name: 'LIST'
      }]
  }];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
