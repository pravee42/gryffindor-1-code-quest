// /lib/questData.js
export const quests = [
  {
    id: 1,
    title: 'Find the Missing Number',
    description: 'You are given an array containing n distinct numbers taken from the range 0 to n. One number is missing. Your task is to find the missing number using code only',
    question: `Find the missing number in the list: \n[189, 5, 134, 70, 152, 179, 146, 119, 53, 168, 62, 190, 88, 177, 191, 126, 95, 6, 170, 35, 181, 141, 167, 185, 76, 55, 105, 133, 180, 165, 120, 155, 89, 12, 94, 57, 63, 112, 121, 37, 156, 40, 124, 143, 86, 122, 162, 32, 188, 145, 163, 113, 23, 15, 68, 52, 47, 130, 193, 135, 97, 19, 178, 59, 110, 150, 101, 175, 132, 117, 164, 85, 125, 34, 199, 46, 183, 140, 44, 0, 171, 90, 64, 98, 139, 8, 147, 7, 107, 131, 137, 71, 43, 123, 17, 92, 22, 51, 161, 50, 74, 87, 28, 196, 9, 2, 41, 111, 91, 184, 65, 72, 69, 136, 118, 4, 81, 78, 49, 84, 79, 61, 148, 149, 195, 25, 187, 198, 104, 45, 103, 3, 24, 109, 39, 176, 83, 166, 75, 172, 194, 186, 169, 197, 38, 114, 99, 31, 58, 21, 160, 33, 142, 108, 80, 14, 1, 151, 82, 174, 96, 48, 106, 154, 67, 129, 13, 30, 54, 100, 11, 73, 158, 157, 26, 127, 182, 192, 138, 77, 10, 115, 102, 93, 116, 42, 173, 159, 20, 29, 60, 153, 18, 66, 144, 56, 16, 128, 36]`,
    correctAnswer: '27',
    explanation: 'The Only Number Missing is "27"',
  },
  {
    id: 2,
    title: 'Caesar Cipher Shift',
    description:
      'A Caesar Cipher is a simple encryption technique where each letter in the text is shifted by a fixed number of places in the alphabet. Your task is to decode the given text by shifting letters back.',
    question: `Caesar Cipher Shift – Decode "Ymjwj ns xywnsl" with a left shift of 5`,
    correctAnswer: 'Think of secret',
    explanation: `The Caesar Cipher with a left shift of 5 means each letter moves backward by 5 places:
Y → T, m → h, j → i, w → n, j → i → "Think"
n → i, s → n → "in"
x → s, y → t, w → r, n → i, s → c, l → e → "secret"`,
  },
  {
    id: 3,
    title: 'Euclid’s Division',
    description:
      'Compute the Highest Common Factor (HCF) of two given positive integers.',
    question: `If the Highest Common Factor of 210 and 55 is expressible in the form 55x - 325 x, find x.`,
    correctAnswer: '6',
    explanation: `Using Euclid’s Division Algorithm, let us find the HCF of given numbers
210 = × 55 3 4 + 5
55 = × 45 1 1 + 0
45 = × 10 4 5 +
10 = ×5 2 + 0
The remainder is zero.
So, the last divisor 5 is the Highest Common Factor (HCF) of 210 and 55.
HCF is expressible in the form 55 325 5 x − =
⇒ 55x = 330
x = 6`,
  },
  {
    id: 4,
    title: 'Sum of the Terms',
    description: 'Sum of First N Natural Numbers and Odd Numbers',
    question:
      'Find the Sum of First 19898 Natural Numbers then find the difference with the first 333 Odd Numbers',
    correctAnswer: '-197864262',
    explanation: '',
  },
  {
    id: 5,
    title: 'Find the Permutation (With Repetition).',
    description:
      'Find the number of ways to arrange A, B, C in a row with repetition.',
    question:
      'How many ways can you arrange A, B, C in a row if repetition is allowed?',
    correctAnswer: '27',
    explanation: '',
  },
];
