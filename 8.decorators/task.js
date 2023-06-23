//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find((item) => item.hash === hash); 
        if (objectInCache) {
            console.log("Из кэша: " + objectInCache.value); 
            return "Из кэша: " + objectInCache.value;
        }
  
        let value = func(...args);
        cache.push({hash, value});
        if (cache.length > 5) { 
           cache.shift();
        }
        console.log("Вычисляем: " + value);
        return "Вычисляем: " + value;  
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;

    function wrapper(...args) {
        wrapper.allCount += 1; 
        if(!timeoutId) {
            wrapper.count += 1;
            func(...args);
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            wrapper.count += 1;
            func.apply(this, [...args]);
        }, delay);
    }
    
    wrapper.allCount = 0;
    func.allCount = wrapper.allCount;
    wrapper.count = 0;
    func.count = wrapper.count;

    return wrapper;
}
