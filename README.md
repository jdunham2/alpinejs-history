# alpinejs-history

This is a simple $magic plugin to get and update the URL search params when alpineJS data changes.

Note: this is an extremely simplified version of this plugin that was originally created by Caleb (the creator of AlpineJS) which he removed from the project while he continues developing it. It uses the same API as the original so should be swap and play when he re-adds history to the AlpineJS plugins.

## Usage
```js
// $history magic will initialize to the url search param if present
// defaults to the value passed to it (null)
<div x-data="{ cf_store = $history(null) }">

  // Changing the state in the app automatically updates the URL
  // Click will change url to ?cf_store=new+value
  <button @click="cf_store = 'new value'">Update</button> 

</div>
```

