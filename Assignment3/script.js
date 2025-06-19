//Create an array of states in india.Remove all the names starting with vowels from the list

let states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

let filteredStates = states.filter(state => !["A", "E", "I", "O", "U"].includes(state[0]));
console.log(filteredStates);


// Q2: Reverse word order in a string
let str = "I love my India";
let reversedStr = str.split(" ").reverse().join(" ");
console.log(reversedStr); // Outputs: "India my love I"



// Q3: Modify string india using splice
let stringArr = "INDIA".split('');
stringArr.splice(3, 0, "O", "N", "E", "S");
let newString = stringArr.join('');
console.log(newString);


// Q4: Count vowels and consonants in a string
function countVowelsAndConsonants(str) {
    let vowels = "AEIOUaeiou";
    let consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
    let vowelCount = 0, consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

// Example string
let exampleString = "I am second year student and learnging webtech";
console.log(countVowelsAndConsonants(exampleString)); //{ vowels: 14, consonants: 25 }


// Q5: Replace wrong word with correct word using string.replace
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

// Example usage
let sentence = "I love coding in Pyahton";
let correctedSentence = correctfn(sentence, "Pyahton", "Python");
console.log(correctedSentence); // Output: "I love coding in Python"


// Q6: Filter numbers greater than 5  inputArr = [1,2,3,9,10,7,5,4,3]
let inputArr = [1,2,3,9,10,7,5,4,3];
let filteredArr = inputArr.filter(num => num > 5);
console.log(filteredArr); // Outputs: [9, 10, 7]



// Q7: Calculate average scores for each student. Use array.map and array.reduce 
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

let studentAverages = students.map(student => {
    let average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average };
});

console.log(studentAverages);




// Q8: Find repeated sum of digits until single digit
function repeatedSum(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

console.log(repeatedSum(456)); // Output: 6



// Q9: Count number of words in a paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("This is a sample paragraph with multiple words.")); // Output: 7



// Q10: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); // Output- olleH



// Q11: Calculate average scores for students.Use array and object methods.
let studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let studentAvg = Object.fromEntries(
    Object.entries(studentsData).map(([student, subjects]) => {
        let subjectValues = Object.values(subjects);
        let average = subjectValues.reduce((sum, score) => sum + score, 0) / subjectValues.length;
        return [student, { average }];
    })
);

console.log(studentAvg);