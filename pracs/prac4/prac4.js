let student1 = new Object();
student1.name = 'Мария';
student1.surname = "Иванова"
student1.year = '3';
student1.fullName = function(){
    return this.name + " " + this.surname;
}

let student2 = {
    name: 'Иван',
    surname: 'Марьин',
    year: '1',

    graduationYear(){
        let date = new Date();
        if(date.getMonth()<6)
            return date.getFullYear() + 4 - this.year;
        return date.getFullYear() + 5 - this.year;
    }
}
alert(student1.fullName());
alert("Ожидаемый год выпуска: " + student2.graduationYear());

function Student(name, surname, age, year, cafedra, budget, goodExams)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.year = year;
    this.cafedra = cafedra;
    this.budget = budget;
    this.goodExams = goodExams;

    this.fullName = function(){
        return this.name + " " + this.surname;
    }
    this.graduationYear = function(){
        let date = new Date();
        if(date.getMonth()<6)
            return date.getFullYear() + 4 - this.year;
        return date.getFullYear() + 5 - this.year;
    }
    this.isAdult = function(){
        if(this.age >= 18)
            return true;
        return false;
    }
    this.getsScholarship = function(){
        if(budget&&goodExams)
            return true;
        return false;
    }
}


let newStudent = new Student("Дарья","Васнецова",21,4,"МКМ",true,false);
alert(newStudent.fullName() + " " + newStudent.graduationYear() + " ожидаемого года выпуска, совершеннолетняя: " + newStudent.isAdult() + 
    ", получает стипендию: " + newStudent.getsScholarship());
