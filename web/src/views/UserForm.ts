import { User } from "../models/User"

export class UserForm {
  constructor(public parent: Element, public model: User) { }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick
    }
  }

  onSetAgeClick(): void {
    console.log('Set Age')
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      });
    }
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>Name: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <input/>
        <button>Click Me</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  }

  render(): void {
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    // templateElement.content.querySelector('button').addEventListener('click', this.onClickButton)
    this.parent.append(templateElement.content)
  }
} 