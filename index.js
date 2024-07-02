document.addEventListener('alpine:init', () => {
    Alpine.magic('history', (el, { interceptor }) => {
        return interceptor((initialValue, getter, setter, path, key) => {
            let lookupKey = path;
            
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
    
            let initial = params.has(lookupKey)
                ? params.get(lookupKey)
                : initialValue
            
            // console.log(initial, initialValue);
    
            setter(initial)
    
            Alpine.effect(() => {
                let value = getter()
                const url = new URL(window.location.href);
                const params = new URLSearchParams(url.search);
                params.set(lookupKey, value)
                window.history.replaceState({}, '', `${location.pathname}?${params}`);
                // console.log('new value for', lookupKey, params.get(lookupKey));
                // console.log(window.location.href)
    
                setter(value)
            })
    
            return initial
        }, func => {
            func.alwaysShow = () => { alwaysShow = true; return func }
            func.usePush = () => { usePush = true; return func }
            func.as = key => { alias = key; return func }
        })
    })
})
