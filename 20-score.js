/* 20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F */


const checkGrade = score => {
    if(score >= 80 && score < 100)
        return("Grade is A");
    else if(score >= 70 && score < 89)
        return("Grade is B");
    else if(score >= 60 && score < 69)
        return("Grade is C");
    else if(score >= 50 && score < 59)
        return("Grade is D");
    else if(score >= 0 && score < 49)
        return("Grade is F");
}
console.log(checkGrade(75))