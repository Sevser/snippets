# event bus vue2

for emitting messages 

```
this.$eventBus.$emit(messageName, payload);
```

for subscribe
```
this.$eventBus.$on(messageName, (payload) => { /* do some work*/ });
```

for unsubscribe
```
this.$eventBus.$off(messageName, (payload) => { /* do some work*/ });
```

for one time callback
```
this.$eventBus.$once(messageName, (payload) => { /* do some work*/ });
```