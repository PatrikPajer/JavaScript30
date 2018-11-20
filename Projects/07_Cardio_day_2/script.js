const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

const adult = people.some(person =>
{  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
}
);

const allAdults = people.every(person => 
  (new Date().getFullYear) - person.year >= 19);

const selection = comments.find(oneCom => oneCom.id === 823423);
console.log(selection); 

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

comments.splice(1,1);
console.log(comments);