const {averageExams, isStudentPassExam} = require('../gradeCalculations')

// test("It should return exact avarage", () => {
//     const listValuesOfExams = [80, 100, 100, 80]
//     expect(averageExams(listValuesOfExams)).toEqual(90)
// })

// test('It should handle non-numbers', () => {
//     const listValuesOfExams = [80, 'a', '100', 80]
//     expect(() => averageExams(listValuesOfExams)).toThrow()
// })

describe('Grade calculations', () => {

    test('It should return exact average', () => {
        const listValuesOfExams = [80, 100, 100, 80]
        expect(averageExams(listValuesOfExams)).toEqual(90)
    })

    test('It should return exam passed status', () => {
        const listValuesOfExams = [80, 100, 100, 80]
        expect(isStudentPassExam(listValuesOfExams, 'Yudistira')).toEqual(true)
    })

    test('It should return exam failed status', () => {
        const listValuesOfExams = [50, 40, 70, 80]
        expect(isStudentPassExam(listValuesOfExams, 'Yudistira')).toEqual(false)
    })
})