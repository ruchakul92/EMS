var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":47,"id":34,"methods":[{"el":25,"sc":2,"sl":23},{"el":29,"sc":2,"sl":27},{"el":33,"sc":2,"sl":31},{"el":37,"sc":2,"sl":35},{"el":41,"sc":2,"sl":39},{"el":45,"sc":2,"sl":43}],"name":"EmployeeCommand","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":27},{"sl":35},{"sl":43}],"name":"findById","pass":true,"statements":[{"sl":28},{"sl":36},{"sl":44}]},"test_3":{"methods":[{"sl":23},{"sl":27},{"sl":31},{"sl":35},{"sl":39},{"sl":43}],"name":"testAddEmployee","pass":true,"statements":[{"sl":24},{"sl":28},{"sl":32},{"sl":36},{"sl":40},{"sl":44}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [3], [3], [], [], [3, 0], [3, 0], [], [], [3], [3], [], [], [3, 0], [3, 0], [], [], [3], [3], [], [], [3, 0], [3, 0], [], [], []]
