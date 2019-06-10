"use strict";
/*****************************************************************************************************
Execution   : cmd>tsc Cinique1.ts
purpose     : Take an inpunt in JSON file and print the doctor-patient report

@description
@file       : clinique1.ts
@overview   : Take input from json file and search for a doctor or
              patient by their name or id amd print the report of doctor-patient report.

@module     : clinique1 >this is optional if explicitly its an npm or local package
@author     : Shruti
@Version    : 1.0
@since      : 4/6/2019
*******************************************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var readlineSync = require("readline-sync");
var filestream = require('fs');
var Clinique = /** @class */ (function () {
    function Clinique(pname, pid, pno, age, dr) {
        this.pname = pname;
        this.pid = pid;
        this.pno = pno;
        this.age = age;
        this.dr = dr;
    }
    return Clinique;
}());
var CliniqueReport = /** @class */ (function (_super) {
    __extends(CliniqueReport, _super);
    function CliniqueReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @function: searchDoctor
     * @description: read data from clinique.json file
     * @param: data, data1
     */
    CliniqueReport.prototype.readFile = function () {
        try {
            var data = filestream.readFileSync('/home/user/TypeScript/clinique.json');
            var data1 = JSON.parse(data);
            // console.log(this.data1)
            return data1;
        }
        catch (err) {
            console.log("error in readFile function", err);
        }
    };
    /**
     * @function: searchDoctor
     * @description: searching for a perticular doctor is available or not
     * @param: dr, data1
     */
    CliniqueReport.prototype.searchDoctor = function (dr) {
        try {
            var data1 = this.readFile(); //calling readFile function to get data for this method
            for (var i = 0; i < data1.doctors.length; i++) {
                if (dr == data1.doctors[i].name || dr == data1.doctors[i].id || dr == data1.doctors[i].specialization) {
                    console.log(data1.doctors[i]);
                    return data1.doctors[i].name; //returning dr name stored into json file
                }
            }
        }
        catch (err) {
            console.log("error in searching doctor", err);
        }
    };
    /**
     * @function: searchPatient
     * @description: searching for a perticular patient is available or not
     * @param: pt, data1
     */
    CliniqueReport.prototype.searchPatient = function (pt) {
        try {
            var data1 = this.readFile(); //calling readFile function to get data for this method
            for (var i = 0; i < data1.patients.length; i++) {
                if (pt == data1.patients[i].name || pt == data1.patients[i].id || pt == data1.patients[i].mob) {
                    return data1.patients[i].name; //returning dr name stored into json file
                }
            }
        }
        catch (err) {
            console.log("error in searching patient", err);
        }
    };
    /**
     * @function: printReport
     * @description: displaying all data of doctors and patient from the json file.
     * @param: data1
     */
    CliniqueReport.prototype.printReport = function () {
        try {
            var data1 = this.readFile(); //calling readFile function to get data for this method
            console.log("*********************DETAILS OF DOCTORS**************************************");
            console.log('Dr. Name       ||      Dr.Id       ||      Specialization  ||   Timings     \n');
            console.log('-----------------------------------------------------------------------------');
            for (var i = 0; i < data1.doctors.length; i++) {
                console.log(data1.doctors[i].name + '   ||   ' + data1.doctors[i].id + '   ||  ' + data1.doctors[i].specialization + '   ||      ' + data1.doctors[i].availability + '\n');
            }
            console.log("*********************DETAILS OF PATIENTS*********************************");
            console.log('\n   Pt. Name   ||  Pt.Id    ||  Mobile numbers  ||  Age     \n');
            console.log('--------------------------------------------------------------------------');
            for (var i_1 = 0; i_1 < data1.patients.length; i_1++) {
                console.log('\n  ' + data1.patients[i_1].name + ' ||   ' + data1.patients[i_1].id + '   ||  ' + data1.patients[i_1].mob + '   || ' + data1.patients[i_1].age + '\n');
            }
        }
        catch (err) {
            console.log("error in print report", err);
        }
    };
    /**
     * @function: appointment
     * @description: this function is for taking appointment of perticular doctor if he is available.
     * @param: data1,clin1,pname,pid,pno,age,dr.
     */
    CliniqueReport.prototype.appointment = function (dr) {
        try {
            var data1 = this.readFile(); //calling readFile function to get data for this method
            var clin1;
            var pname = readlineSync.question('Enter your name: '); // reading user input.
            var pid = readlineSync.question('Enter your id: '); // reading user input.
            var pno = readlineSync.question('Enter your phone number: '); // reading user input.
            if (pno.length < 10 || pno.length > 10)
                throw "enter 10 digits"; // checking for integer input from user.
            var age = readlineSync.question('Enter your age: '); // reading user input.
            if (age > 100)
                throw "enter age below 100";
            for (var i = 0; i < data1.doctors.length; i++) {
                if (dr == data1.doctors[i].name || dr == data1.doctors[i].id) {
                    console.log(data1.doctors[i].name + ' is available in time ' + data1.doctors[i].availability);
                    var conf = readlineSync.question('Do you want to confirm appointment?(y/n)');
                    if (conf == "y") {
                        var obj = {
                            appointment: []
                        };
                        clin1 = new Clinique(pname, pid, pno, age, data1.doctors[i].name);
                        var file = filestream.readFileSync('/home/user/TypeScript/newClinique.json'); //reading data from json file
                        var file1 = JSON.parse(file); //parsing json data to convert from object to string
                        obj.appointment.push(clin1); // adding new data into appointment object.
                        obj.appointment.push(file1);
                        var jsn = JSON.stringify(obj); // converting string data into object to store into json file.
                        filestream.writeFileSync('/home/user/TypeScript/newClinique.json', jsn); // writing data into json file.
                        return true;
                    }
                }
            }
        }
        catch (err) {
            console.log("error in appointment", err);
        }
    };
    return CliniqueReport;
}(Clinique));
exports.CliniqueReport = CliniqueReport;
var clin = new CliniqueReport("ghj", 1011, 1222333144, 56, "Dr. Malhotra"); //clin is object of class CliniqueReport
var data = clin.readFile(); //calling function from class and stored its return cvalue in data
var jsn = JSON.stringify(data); // converting json object into string.
console.log('report: ' + jsn); // printing data.
// clin. searchDoctor(dr);
// clin.searchPatient(pt);
// clin.printReport();
// clin.appointment(dr);
//clin.printReport() //calling function from class using class object.
var ch;
do {
    console.log("**********************WELCOME******************************\n");
    console.log('1.Search for Doctor\n 2.Search for Patient \n3.Take Appointment\n4.Exit');
    ch = readlineSync.question('\nEnter your choice: '); // reading user input.
    switch (ch) {
        case '1':
            var dr = readlineSync.question('\nwhich dr you want?'); // reading user input.
            var search = clin.searchDoctor(dr); //calling function from class using class object.
            if (search) {
                console.log('\n' + search + ' is available');
            }
            else {
                console.log(search + ' Doctor is not available');
            }
            break;
        case '2':
            var pt = readlineSync.question('which patient you want to search?'); // reading user input.
            var searchpt = clin.searchPatient(pt); //calling function from class using class object.
            if (searchpt) {
                console.log(searchpt + ' patient is there');
            }
            else {
                console.log('patient is not there');
            }
            break;
        case '3':
            var count = 0;
            var ap = readlineSync.question('Whose appointment you want to take?'); // reading user input.
            var res = clin.appointment(ap); //calling function from class using class object.
            if (res == true) {
                console.log('your appointment is confirmed');
                count++;
            }
            else {
                console.log("Thank you!!");
            }
            if (count > 5) {
                console.log('You can not take appointment with ' + ap);
            }
            break;
        case '4': process.exit();
    }
} while (ch < '4');
