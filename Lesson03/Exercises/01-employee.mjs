import { C } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

class Employee {

    // --> '#' --> private field

    // cpr-number excactly 10 digits
    #personalIdentificationNumber;

    // firstname 1-30 characters. The characters can be alphabetic, spaces or a dash
    #firstname;

    // lastname 1-30 characters. The characters can be alphabetic, spaces or a dash
    #lastname;

    // One among the following: HR, Finance, IT, Sales, General Services
    #department;

    //In Danish kroner. A minimum of 20000 and a maximum of 100000
    #baseSalary;

    //  One among the following: 0 (none), 1 (primary), 2 (secondary), 3 (tertiary)
    #educationalLevel;

    // dd/MM/yyyy. At least 18 years from the present day
    #dateOfBirth;

    // dd/MM/yyyy. Equal or lower than the present day
    #dateOfEmployment;

    // Country name as a string
    #country;

    constructor (cpr, firstname, lastname, department, baseSalary, educationalLevel, dateOfBirth, dateOfEmployment, country) {
        this.cprNumber = cpr;
        this.firstname = firstname;
        this.lastname = lastname;
        this.department = department;
        this.baseSalary = baseSalary;
        this.educationalLevel = educationalLevel;
        this.dateOfBirth = dateOfBirth;
        this.dateOfEmployment = dateOfEmployment;
        this.country = country;
    }

    // static allowedRoles = ["HR", "Finance", "IT", "Sales", "General Services"];
    // static EDUCATIONAL_LEVELS = Object.freeze({0: "None", 1: "Primary", 2: "Secondary", 3: "Tertiary"});

    static DEPARTMENTS = Object.freeze({
        HR: "HR",
        FINANCE: "Finance",
        IT: "IT",
        SALES: "Sales",
        GENERAL_SERVICES: "General Services"
    });

    static EDUCATIONAL_LEVELS = Object.freeze({
        0: "None",
        1: "Primary",
        2: "Secondary",
        3: "Tertiary"
    });

    static SHIPPING_RULES = Object.freeze({
        free: ["Denmark", "Norway", "Sweden"],
        half: ["Iceland", "Finland"]
    });


    // XXXXXXXXXXXXXXXXXXXXXXXXX Getters XXXXXXXXXXXXXXXXXXXXXXXXX

    get cprNumber() {

        return this.#personalIdentificationNumber
    }

    get firstname() {

        return this.#firstname;
    }

    get lastname() {

        return this.#lastname;
    }

    get department() {

        return this.#department;
    }

    get baseSalary() {

        return `${this.#baseSalary},00 DKKR`;
    }

    get baseSalaryNumber() {

        return this.#baseSalary;
    }

    get educationalLevel() {

        return Employee.EDUCATIONAL_LEVELS[this.#educationalLevel];
    }

    get dateOfBirth() {

        return this.#dateOfBirth;
    }

    get dateOfEmployment() {

        return this.#dateOfEmployment;
    }

    get country() {

        return this.#country;
    }


    // ____________________________________________________________________
    //
    // XXXXXXXXXXXXXXXXXXXXXXXXX Setters XXXXXXXXXXXXXXXXXXXXXXXXX
    // ____________________________________________________________________

    set cprNumber(value) {
        // cpr-number excactly 10 digits

        if (!this.isTenDigits(value)) {
            return null;
        }

        this.#personalIdentificationNumber = value;
    }

    set firstname(value) {
        // firstname 1-30 characters. The characters can be alphabetic, spaces or a dash
        if (!this.isValidName(value)) {
            return null;
        }

        this.#firstname = value;
    }

    set lastname(value) {
        // lastname 1-30 characters. The characters can be alphabetic, spaces or a dash

        if (!this.isValidName(value)) {
            return null;
        }

        this.#lastname = value;
    }

    set department(value) {
        // One among the following: HR, Finance, IT, Sales, General Services
        if (!Object.values(Employee.DEPARTMENTS).includes(value)) return null;

        this.#department = value;
    }

    set baseSalary(value) {
        //In Danish kroner. A minimum of 20000 and a maximum of 100000

        if (!this.isValidBaseSalary(value)) return null;

        this.#baseSalary = value;
        
    }

    set educationalLevel(value) {
        //  One among the following: 0 (none), 1 (primary), 2 (secondary), 3 (tertiary)

        const levels = Object.keys(Employee.EDUCATIONAL_LEVELS).map(Number)
        if (!levels.includes(value)) {
            return null;
        }

        this.#educationalLevel = value;

    }

    set dateOfBirth(value) {
        // dd/MM/yyyy. At least 18 years from the present day
        
        if (!isValiddateOfBirth(value)) {
            return null
        }

        this.#dateOfBirth = value;

    }

    set dateOfEmployment(value) {
        // dd/MM/yyyy. Equal or lower than the present day

        if (!isValidEmploymentDate(value)) {
            return null;
        }

        this.#dateOfEmployment = value;

    }

    set country(value) {
        // Country name as a string

        if (typeof value !== "string") {
            return null;
        }

        this.#country = value;
    }





    // ____________________________________________________________________
    //
    // XXXXXXXXXXXXXXXXXXXXXXXXX Helper Methods XXXXXXXXXXXXXXXXXXXXXXXXX
    // ____________________________________________________________________

    // in RegEx '/d' --> Matches any digit (Arabic numeral). Equivalent to [0-9].
    isTenDigits(value) {
        return /^\d{10}$/.test(value);
    }

    isValidName(value) {
        return /^[A-Za-z -]{1,30}$/.test(value);

        // ^ → anchor to the start of the string
        // $ → anchor to the end of the string
        // Together: the entire string must be between 1 and 30 characters, containing only letters, spaces, or dashes.

    }

    isValidBaseSalary(value) {
        // A minimum of 20000 and a maximum of 100000
        
        return typeof value === "number" && value >= 20000 && value <= 100000;

    }

    dateParser(value) {
        // dd/mm/yyyy to yyyy/mm/dd for js Date object

        const [day, month, year] = value.split("/").map(Number);
        const dateParsed = new Date(year, month - 1, day);

        // Check that the date exists - js autocorrects invalid dates
        if (dateParsed.getDate() !== day || dateParsed.getMonth() !== month - 1 || dateParsed.getFullYear() !== year) {
            return null;
        }   

        return { dateParsed, day, month, year };

    }


    isValiddateOfBirth(value) {
        // dd/MM/yyyy. At least 18 years from the present day
        const parsed = this.dateParser(value);
        if (!parsed) return false;

        const { dateParsed, day, month, year } = parsed;
        const currentDate = new Date();
        

        // Check that the date is not in the future
        if (dateParsed > currentDate) return false;


        //-------- Calculate age ---------
        // first checking the year
        let age = currentDate.getFullYear() - year;

        // then checking if the birthday has happened yet this year, else subtract 1 from age
        if (currentDate.getMonth() < month - 1 || (currentDate.getMonth() === month - 1 && currentDate.getDate() < day)) {
            age--;
        }

        if (age < 18) return false;


        return true;
    }

    isValidEmploymentDate(value) {
        // dd/MM/yyyy. Equal or lower than the present day
        const parsed = this.dateParser(value);
        if (!parsed) return false;

        const { dateParsed } = parsed;
        const currentDate = new Date();


        // check that the date is not in the future
        if (dateParsed > currentDate) {
            return false;
        }

        return true;
    }






    // ____________________________________________________________________
    //
    // XXXXXXXXXXXXXXXXXXXXXXXXX Methods XXXXXXXXXXXXXXXXXXXXXXXXX
    // ____________________________________________________________________

    getSalary() {
        return this.baseSalaryNumber + (this.#educationalLevel * 1220);

    }

    getDiscount() {
        const parsed = this.dateParser(this.#dateOfEmployment);
        if (!parsed) return 0;

        const employmentDate = parsed.dateParsed;
        const today = new Date();

        // Calculate full years of employment
        let yearsOfEmployment = today.getFullYear() - employmentDate.getFullYear();
        if (today.getMonth() < employmentDate.getMonth() || 
            (today.getMonth() === employmentDate.getMonth() && today.getDate() < employmentDate.getDate())) {
            yearsOfEmployment--;
        }

        const discount = yearsOfEmployment * 0.5; // 0.5% per year
        return discount;
    }

    getShippingCosts() {
        if (Employee.SHIPPING_RULES.free.includes(this.#country)) return 0;
        if (Employee.SHIPPING_RULES.half.includes(this.#country)) return 50;
        return 100;
    }


}
