/* Taruh kode yang berpeluang menimbulkan eror di dalam blok try. Apabila terjadi eror di dalam blok kode try, 
maka ia akan ditangkap dan ditangani oleh blok kode catch. Sementara, 
jika tidak terjadi eror pada kode, maka blok catch akan diabaikan.*/

// try {
//     // kode
//   } catch (error) {
//     // error handling
//   }

//examples
// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
//   } catch (error) {
//     console.log("Terjadi error!");  // (4)
//   }

/*Object error memiliki beberapa properti utama di dalamnya, yaitu:

name : Nama error yang terjadi.
message : Pesan tentang detail error.
stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error. */
// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//   }

/* Selain try & catch ada juga finally yang berfungsi apabila ada error code tetap dijalankan */
try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
  } catch (error) {
    console.log("Baris ini diabaikan");
  } finally {
    console.log("Akan tetap dieksekusi");
  }
