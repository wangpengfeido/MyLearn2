const dom_tests = $('.test');
console.log('dom_tests:', dom_tests);

// eq返回一个新的集合
console.log('eq 0:', dom_tests.eq(0));

// []返回集合中的dom节点
console.log('[] 0:', dom_tests[0]);

// get同样也是返回dom节点。当它不传参数时，返回一个dom节点数组
console.log('get 0', dom_tests.get(0), dom_tests.get(0) === dom_tests[0])
