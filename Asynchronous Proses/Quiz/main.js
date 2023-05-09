// function getProvinces(isOffline) {

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {

//       const countryId = [

//         { id: "id-jk", name: "Jakarta" },

//         { id: "id-bt", name: "Banten" },

//         { id: "id-jr", name: "Jawa Barat" },

//       ];

//       if (countryId === "id") {

//         return;

//       }

//       if (isOffline) {

//         reject(new Error("Country not found"));

//         return;

//       }

//       resolve(countryId);

//     }, 1000);

//   });

// }

// getProvinces(true)

//   .then((countryId) => console.log(countryId))

//   .catch((err) => console.log(err.message));

// module.exports = { getProvinces: getProvinces };

const { promisify } = require('util');

function getProvinces(countryId, callback) {

  setTimeout(() => {

    if (countryId === 'id') {

      callback(null, [

        { id: 'id-jk', name: 'Jakarta' },

        { id: 'id-bt', name: 'Banten' },

        { id: 'id-jr', name: 'Jawa Barat' },

      ]);

      return;

    }



    callback(new Error('Country not found'), null);

  }, 1000);

}

const getProvincesPromise = promisify(getProvinces);



getProvincesPromise('id')

.then((provinces)=>console.log(provinces))

.catch((error)=>console.log(error.message));



module.exports={getProvinces:getProvincesPromise};