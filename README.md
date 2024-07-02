# alpinejs-history

This is a simple $magic plugin to get and update the URL search params when alpineJS data changes.

Note: this is an extremely simplified version of this plugin that was originally created by Caleb (the creator of AlpineJS) which he removed from the project while he continues developing it. It uses the same API as the original so should be swap and play when he re-adds history to the AlpineJS plugins.

## Installation
```html
<!-- Alpine Plugin (before Alpine) -->
<script src="https://cdn.jsdelivr.net/gh/jdunham2/alpinejs-history@1.x.x/index.min.js"></script>

<!-- Core Alpine -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```


## Usage
```html
<!--  $history magic will initialize to the url search param if present
      defaults to the value passed to it (value) -->

<div x-data="{ cf_store: $history('value') }">

  <!--  Changing the state in the app automatically updates the URL
        Click will change url to ?cf_store=new+value -->
  <button @click="cf_store = 'new value'">Update</button>
  <span 
        x-text="cf_store" 
        x-effect="console.log({ cf_store, url: window.location.href })">
  </span>

</div>
```

