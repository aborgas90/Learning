const { averageExams, isStudentPassExam } = require('../gradeCalculation');

test('it should return exact average', () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
})

test('it should handle non-number ', () => {
    const listValueOfExams = [80, 'a', '100', 80];
    expect(() => averageExams(listValueOfExams)).toThrow();
})



/* Integration test dapat dijalankan ataupun ditulis bersamaan dengan 
unit test. Sehingga kita dapat melakukan grouping dari contoh kode diatas 
menjadi sebagai berikut:
*/
describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    /**
     * Integration testing
     */
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })


    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
})

//if you want running this code(checking testing) we can do like this "npm run test"
/*After writing all the test cases, with jest we can see the code 
report that has been tested in the following way:"npm run test --coverage"*/