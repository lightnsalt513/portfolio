interface MenuProps {
  location?: string,
  name?: string,
  idx?: number
}

interface MenuData {
  selected: MenuProps;
  list: MenuProps[];
}

type Callback = () => void;

export class MenuModel {
  data: MenuData = {
    selected: {},
    list: [
      {
        location: '/',
        name: 'Home',
        idx: 0
      },
      {
        location: '#about',
        name: 'About',
        idx: 1
      },
      {
        location: '#projects',
        name: 'Projects',
        idx: 2
      }
    ]
  };
  events: { [key: string]: Callback[] } = {};
  
  constructor() {
    this.changeSelected('idx', 0);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    })
  }

  getSelected(): MenuProps {
    return this.data.selected;
  }

  changeSelected<K extends keyof MenuProps>(propName: K, value: MenuProps[K]): void {
    const newMenu = this.data.list.find(menu => menu[propName] === value);
    this.data.selected = newMenu;
    this.trigger('menuChange');
  }
}