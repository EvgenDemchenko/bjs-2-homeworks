class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(NewState) {
        if(NewState < 0) {
            this._state = 0;
        } else if (NewState > 100) {
            this._state = 100;
        } else {
            this._state = NewState;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state *= 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = 'detective';
    }
}


class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        } else {
           return;
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const thisBook = this.findBookBy("name", bookName);
        if (thisBook) {
          this.books.splice(this.books.indexOf(bookName), 1);
          return thisBook;
        }
        return null;
    }
}

// const newLibrary = new Library();

// let book1 = new Book('Лев Толстой', 'Война и Мир', 1920, 1200);
// let book2 = new DetectiveBook('Джек Лондон', 'Какая-то книга', 1869, 300);
// let book3 = new FantasticBook('Стивен Кинг', 'Мгла', 1968, 450);

// newLibrary.addBook(book1);
// newLibrary.addBook(book2);
// newLibrary.addBook(book3);

// console.log(newLibrary.findBookBy('releaseDate', 1869));
// console.log(newLibrary.giveBookByName('Мгла'));
// book3.state = 25;
// console.log(newLibrary.addBook(book3));
// book3.fix();
// console.log(book3.state);
// console.log(newLibrary.addBook(book3));

// console.log(newLibrary.books);

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }
    
    addMark(mark, subject) {
        this.marks[subject] === undefined? this.marks[subject] = []:this.marks;
        if(mark < 2 || mark > 5) {
            return;
        } else {
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if(!this.marks[subject]) {
            return null;
        } else {
            return this.marks[subject].reduce((acc, item) => acc += item, 0) / this.marks[subject].length;
        }
    }

    getAverage() {
        let averageNum = 0;
        let subjectSumm = 0;

        for(let key of Object.keys(this.marks)) {
            averageNum += this.getAverageBySubject(key);
            subjectSumm++;
        }
        return averageNum / subjectSumm;
    }
}

// let vasya = new Student();

// vasya.addMark(3, 'math');
// vasya.addMark(5, 'math');
// vasya.addMark(5, 'math');
// vasya.addMark(4, 'math');
// vasya.addMark(5, 'history');
// vasya.addMark(5, 'history');
// vasya.addMark(4, 'history');

// console.log(vasya);
// console.log(vasya.getAverage());