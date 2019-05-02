const faker = require('faker');
const fs = require('fs');

// generates 1M data entries
console.time('finished data generation in');
const generateData = () => {
  let dataArr = [];
  for (let i = 0; i < 1000000; i++) {
    let entry = {};
    entry.albumName = `${faker.commerce.color()}`;
    entry.artist = `${faker.name.firstName()}`;
    entry.albumArt = `${faker.image.avatar()}`;
    entry.tags = `${faker.random.word()}`;
    entry.description = faker.lorem.sentence(8);
    dataArr.push(entry);
  }
  return dataArr;
};

// writes 10 .csv files containing 1M data entries each

for (let i = 0; i < 10; i++) {
  const data = generateData();
  const header = Object.keys(data[0]);
  let csv = data.map(row =>
    header.map(fieldName => JSON.stringify(row[fieldName])).join(','));
  csv.unshift(header.join(','));
  csv = csv.join('\r\n');

  fs.writeFileSync(`data${i}.csv`, csv, (err) => {
    if (err) { console.log(err); }
    else { console.log('data saved'); }
  });
};

console.timeEnd('finished data generation in');
