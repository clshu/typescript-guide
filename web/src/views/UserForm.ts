export class UserForm {
  constructor(public parent: Element) { }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onH1Hover
    }
  }

  onButtonClick(): void {
    console.log('Hello Click')
  }

  onH1Hover(): void {
    console.log('Hovering H1')
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
        <input/>
        <button>Click me</button>
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