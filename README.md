
## Polymer Singleton Pattern

Two examples of a Singleton pattern in Polymer. I use this pattern to create 'data' singletons that can be used throughout an application and expose that data as a singleton.


### The automated method

This method is showcased in `polymer-consumer-a` and `polymer-singleton-a`. It integrates with Polymer's binding system directly for maximum convenience. However, it only works when binding/exposing an object, and it breaks when you ever overwrite that object or any non-leaf nested property inside that object. For example, say your exposed property `{{user}}` looks like this:

```json
{ 
    "name": "bob",
    "address": {
        "street": "Highway Lane",
        "number": 24
    }
}
```

You can only ever assign values to `user.name`, `user.address.street`, or `user.address.number`. Trying to assign `user.address = {street: "Downtown ave.", number: 10}` or even `user = { ... }` will break the bindings.

This method is the most convenient and lightweight, but more error prone.

### The imperative method

This method is showcased in `polymer-consumer-b` and `polymer-singleton-b`. It works by simply exposing certain properties to be observed, but doesn't allow for two-way binding. You cannot bind data into the singleton, you can only bind data out of it. If you want to update any data you need to explicitly call a function to update that data. Compared to the above method it requires more code, but it is very robust and flexible.

I personally prefer this method over the first. My data singletons tend to have more logic to them, so a more imperative system where I have more control over what happens when is more convenient. For example, a `<data-user>` element could implement a `login()` method that will internally fire an API call to a backend, and update the exposed `{{user}}` binding when that call succeeds/fails. Your login page/element can use the `<data-user>` element to handle the login logic, and other pages can use the element to show the user's profile and whatnot.


### Run the examples

```bash
npm install
bower install
npm run dev
```
