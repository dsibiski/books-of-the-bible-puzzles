const BOOKS_OF_THE_BIBLE = [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    'Samuel',
    'Kings',
    'Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalms',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    'Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    'Thessalonians',
    'Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    'Peter',
    'John',
    'Jude',
    'Revelation',
];

const PUZZLE =
    'I once made a remark about the hidden books of the Bible. A certain luke, kept people looking so hard for facts, and for others, it was a revelation. Some were in a jam, especially since the names of the books were not capitalized. But the truth finally struck home to numbers of our readers. To others it was a job. We want it to be a most fascinating little moment for you. Yes, there will be some really easy ones to spot. Others may require judges to help find them. I will quickly admit it usually takes the preacher to find one of them, and there will be loud lamentations when it is found. A little lady says she brews a cup of tea so she can concentrate better. See how you will compete. Relax now, for there really are sixteen books of the Bible in this paragraph.';

const PUZZLE_2 =
    'This is a most remarkable puzzle. It was found by a gentleman in an airplane seat pocket, on a flight from Los Angeles to Honolulu, keeping him occupied for hours. He enjoyed it so much, he passed it on to some friends. One friend from Illinois worked on this while fishing from his john boat. Another friend studied it while playing his banjo. Elaine Taylor, a columnist friend, was so intrigued by it she mentioned it in her weekly newspaper column. Another friend judges the job of solving this puzzle so involving, she brews a cup of tea to help her nerves. There will be some names that are really easy to spot. That\'s a fact. Some people, however, will soon find themselves in a jam, especially since the book names are not necessarily capitalized. Truthfully, from answers we get, we are forced to admit it usually takes a minister or a scholar to see some of them at the worst. Research has shown that something in our genes is responsible for the difficulty we have in seeing the books in this paragraph. During a recent fund raising event, which featured this puzzle, the Alpha Delta Phi lemonade booth set a new record. The local paper, The Chronicle, surveyed over 200 patrons who reported that this puzzle was one of the most difficult they had ever seen. As Daniel Humana humbly puts it, "The books are all right here in plain view hidden from sight." Those able to find all of them will hear great lamentations from those who have to be shown. One revelation that may help is that books like Timothy and Samuel may occur without their numbers. Also, keep in mind, that punctuation and spaces in the middle are normal. A chipper attitude will help you compete really well against those who claim to know the answers. Remember, there is no need for a mad exodus; there really are 30 books of the Bible lurking somewhere in this paragraph waiting to be found.';

const PUZZLES = [PUZZLE, PUZZLE_2];

const solve = puzzle => {
    const simplifiedPuzzle = puzzle.replace(/ |\.|,|"|'/g, '').toLowerCase();

    let found = [];

    BOOKS_OF_THE_BIBLE.forEach(book => {
        if (simplifiedPuzzle.includes(book.toLowerCase())) {
            found.push(book);
        }
    });

    found = [...new Set(found)];

    return found;
};

(async function() {
    PUZZLES.forEach((puzzle, index) => {
        const foundBooks = solve(puzzle);

        console.log('==========');
        console.log('Puzzle #', index + 1);
        console.log('==========');

        foundBooks.forEach(book => {
            console.log(book);
        });

        console.log('==========');
        console.log('Total: ', foundBooks.length);
        console.log('==========');
        console.log('');
    });

    process.exit();
})();
