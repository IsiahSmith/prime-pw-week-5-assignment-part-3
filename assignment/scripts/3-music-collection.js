console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}

console.log('Album Added to Collection:', addToCollection('The Melodic Blue', 'Baby Keem', 2021));
console.log(collection);
