function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    return arr1.every((num, ind) => {
        return num == arr2[ind];
    });
}

function getUsersNamesInAgeRange(users, gender) {

    const usersAgeByGender = users.map((user) => {
        if(user.gender == gender) return user.age;
    });
    return usersAgeByGender.reduce((avg, val, _, { length }) => {avg + val / length}, 0);
}