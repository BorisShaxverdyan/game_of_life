// fastest = 25

let XRMinus = x - radius < 0 ? 0 : x - radius;
let XRPlus = x + radius > matrix[0].length - 1 ? matrix[0].length - 1 : x + radius;
let YRMinus = y - radius < 0 ? 0 : y - radius;
let YRPlus = y + radius > matrix.length - 1 ? matrix.length - 1 : y + radius;

let count = 0;

for (let i = YRMinus; i <= YRPlus; i++) {
	for (let j = XRMinus; j <= XRPlus; j++) {
		count++;
		if (i === y && j === x) continue;

		result.push([j, i]);
	}
}

// middle = 37

let XRMinus = x - radius;
let XRPlus = x + radius;
let YRMinus = y - radius;
let YRPlus = y + radius;

let count = 0;

for (let i = YRMinus; i <= YRPlus; i++) {
    for (let j = XRMinus; j <= XRPlus; j++) {
        count++;
        if(i === y && j === x) continue;
        if(i < 0 || i >= matrix.length) break;

        if(j < 0) {
            XRMinus++;
            continue;
        }

        if(j >= matrix[0].length) {
            XRPlus--;
            continue;
        }
        
        result.push([j, i]);
    }
}

// slowest = 61
let XRMinus = x - radius;
let XRPlus = x + radius;
let YRMinus = y - radius;
let YRPlus = y + radius;

let count = 0;

for (let i = YRMinus; i <= YRPlus; i++) {
    for (let j = XRMinus; j <= XRPlus; j++) {
        count++;
        if(i === y && j === x) continue;
        if(i < 0 || i >= matrix.length) break;
        if(j < 0 || j >= matrix[0].length)  {
            continue;
        }

        
        result.push([j, i]);
    }
}