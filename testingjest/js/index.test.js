// test('deskripsi dari testcase kamu', () => {
//     expect(perintah).matcher('nilai yang diekspektasikan');
// });
 
// contoh
test('dua tambah dua adalah empat', () => {
    expect(2+2).toBe(4);
});


test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });


//1.If you want to check the value of an object, use toEqual:
//2.In this code, expect(2 + 2) returns an "expectation" object. 
//You typically won't do much with these expectation objects except 
//call matchers on them. In this code, .toBe(4) is the matcher. 

