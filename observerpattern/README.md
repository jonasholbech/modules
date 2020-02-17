# Usage

## `Observer``

```js
import Observer from "./Observer";
Observer.subscribe("LOGIN", () => signUpContainer.classList.add("hidden"));
Observer.subscribe("LOGIN", () => logInContainer.classList.add("hidden"));

//...
Observer.publish("DONATION");

// ...
Observer.subscribe("LOGOUT", () => {
  Observer.unsubscribe("DONATION", getAllDonations);
});
```
