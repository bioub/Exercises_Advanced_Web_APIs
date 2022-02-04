# Exercises

## WebSockets

Install the `ws` package : `npm i ws`

In `backend/index.js` create a WebSocket server on port `9000`.

In `frontend/index.js` connect to this WebSocket server

When the user clicks on the `<div class="my-card">` element, emit a message through the WebSocket in this format : `{ "type": "card-increment", "cardId": 4 }` where 4 is the id of the card clicked.

In `backend/index.js` broadcast this message to other clients like this example (only if the message type is `"card-increment"`) :

https://github.com/websockets/ws#server-broadcast

In `frontend/index.js` listen to the message event of the WebSocket and increment the corresponding card likes (only if the message type is `"card-increment"`)

Bonus : In `backend/index.js` store the new increment count in `db.json` with the `fs` or `fs-extra` module.

## Web Components

In `frontend/index.js` we will refactor `createMyCard` to a web component

The custom element should be named `my-card`

Create a Shadow DOM and pass the content of `createMyCard` to it

Values coming from the backend could be passed as attributes :

```html
<my-card card-id="1" title="JavaScript" src="javascript-logo.svg" likes="10"></my-card>
```

Values coming from the backend could be passed as properties :

```js
const myCardEl = document.createElement('my-card');
myCardEl.cardId = 1;
myCardEl.title = 'JavaScript';
myCardEl.src = 'javascript-logo.svg';
myCardEl.likes = 10;
```

So make sure that attributes are in sync with the corresponding properties

Inside the component, id and likes should be treated as numbers so make the convertion if needed.

Move the CSS from `frontend/index.html` to the ShadowDOM

Listen to the click from the outside of the Component and update the corresponding properties/attributes