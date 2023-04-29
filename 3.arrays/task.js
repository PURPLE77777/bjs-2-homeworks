function compareArrays(arr1, arr2) {
	if (arr1.length != arr2.length) return false;
	return arr1.every((num, ind) => {
		return num == arr2[ind];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	const usersAgesByGender = users
		.filter(user => {
			return user.gender == gender;
		})
		.map(user => {
			return user.age;
		});

	return usersAgesByGender.reduce((avg, val, _, { length }) => {
		return avg + val / length;
	}, 0);
}
