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
console.log('Album Added to Collection:', addToCollection('Certified Lover Boy', 'Drake', 2021));
console.log('Album Added to Collection:', addToCollection('Eternal Atake', 'Lil Uzi Vert', 2020));
console.log('Album Added to Collection:', addToCollection('ATLiens', 'Outkast', 1996));
console.log('Album Added to Collection:', addToCollection('Legends Never Die', 'Juice WRLD', 2020));
console.log('Album Added to Collection:', addToCollection('Luv Is Rage', 'Lil Uzi Vert', 2015));
console.log(collection);
