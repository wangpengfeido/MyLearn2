// 不使用element参数，返回该元素在父元素中的位置
console.log('index:', $('.test:nth-child(2)').index());

// 使用element参数，返回element在集合中的位置
console.log('use element:', $('.test').index('.test:nth-child(2)'));


