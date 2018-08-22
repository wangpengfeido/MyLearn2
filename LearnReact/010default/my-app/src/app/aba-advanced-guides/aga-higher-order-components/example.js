export function getUserAgeById({userId}) {
    return {
        id: userId,
        name: '张三',
        age: 23,
    }
}

export function getUserGenderById({userId}) {
    return {
        id: userId,
        name: '张三',
        gender: '男'
    }
}

export function getUsers() {
    return [{
        id: 1,
        name: '张三'
    }, {
        id: 2,
        name: '李四'
    }]
}


