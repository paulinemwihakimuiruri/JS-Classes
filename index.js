// You are building a feature rollout system for a startup where a FeatureToggle constructor 
// function has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access 
// attempts using if-else and switch statements for different roles.

function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
    
}

FeatureToggle.prototype.canAccess = function(userRole){
    if(this.isEnabled && this.userGroupAccess.includes(userRole)){
        return true;
    }else{
        return false;
    }  
};

FeatureToggle.prototype.toogleFeature = function (flag){
    if(this.isEnabled === flag){
        console.log("Feature is enabled");
        
    }else{
        console.log("Feature disabled");
    }
}

function giveAccess(roles) {
    roles.forEach(role => {
        switch (role) {
            case "guests":
                console.log(`The ${role} has been denied access to ${newFeature.featureName}`);
                break;
            case "betaTesters":
                console.log(`The ${role} has been granted access to ${newFeature.featureName}`);
                break;
            case "admins":
                console.log(`The ${role} has been granted access to ${newFeature.featureName}`);
                break;
             case "user":
                console.log(`The ${role} has been denied access to ${newFeature.featureName}`);
                 break;
            default:
                console.log("Role not supported");
                break;
        }
    });
};
const newFeature = new FeatureToggle("rollBack",true,["betaTesters","admins"]);

console.log(newFeature);
const roles = ["guests","betaTesters","admins","user"];
giveAccess(roles);




// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string)
// , projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype
//  methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName,projectDetails,logs){
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}

TimeLog.prototype.totalEarnings = function () {
    const rate = this.projectDetails.hourlyRate;
    const totalHours = this.logs.reduce((sum,log) => sum + log.hoursWorked, 0);
    return totalHours * rate;

};

TimeLog.prototype.filterLogsByDate = function(startDate, endDate){
    const start = new Date(startDate);
    const end = new Date (endDate);
    return this.logs.filter(log => {
        const logDate = new Date(log.date);
        return logDate >= start && logDate <=end;
    });
};

TimeLog.prototype.weeklyHoursWorked = function(){
    if (this.logs.hoursWorked * 7 > 40){
        return 'Weekly hours exceeded'
    }else{
        return 'Weekly hours not exceeded'
    }

};

const logs = [
    {date:'2025-01-01', hoursWorked:8},
    {date:'2025-01-02', hoursWorked:7},
    {date:'2025-01-03', hoursWorked:6},
    {date:'2025-01-04', hoursWorked:9},
    {date:'2025-01-05', hoursWorked:8},
]
const project = {name:"UI/UXDESIGN", hourlyRate: 50};
console.log(project);

const freelancerLog = new TimeLog ("James",project,logs);
console.log('Total earnings:',freelancerLog.totalEarnings());
console.log(freelancerLog.filterLogsByDate('2025-01-03','2025-01-05'));
console.log(freelancerLog.weeklyHoursWorked());


// You are developing a startup’s order management system where an Order constructor function should 
// contain customer (object with name and email), items (array of objects with productName, quantity,
//  and unitPrice), and status (string), then implement prototype methods to compute total cost, update
//  order status based on payment, and categorize order urgency using switch and conditional statements.

function Order (customer,items,status){
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.totalCost = function(){
    return this.items.reduce((sum, item) => {
        return sum + item.quantity * item.unitPrice;
    },0);
};

Order.prototype.updateOrderStatus = function(amountPaid){
    const total = this.totalCost();
    if(amountPaid >= total){
        this.status = "paid"
    }else if (amountPaid > 0){
        this.status = "Not fully paid"
    }else{
        this.status = "Not paid"
    }
};
Order.prototype.orderUrgency = function(){
    let urgency;

    switch(this.status){
        case "Not paid":
            urgency = "High";
            break;
        case "Not fully paid":
            urgency = "Medium";
            break;
        case "Paid":
            urgency = "Low";
            break;
    }
    return urgency;
};

const customer = {
    name: "Daniel", email: "danikhadija@gmail.com"
};
console.log(customer);

const items = [{
    productName: "vans", quantity: 10, unitPrice: 200
},
{productName: "Handbag", quantity: 5, unitPrice: 500},
{productName: "Laptops", quantity: 15, unitPrice: 15500}
];
console.log(items);


const order = new Order(customer, items, "pending");
console.log("Total cost of items is:", order.totalCost());
order.updateOrderStatus(600);
console.log("Status after partial payment:", order.status);
console.log("Order urgency:",order.orderUrgency());


// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string),
//  performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

class Employee{
    constructor (id, name, performanceMetrics, feedback){
        this.id = id;
        this.name = name;
        this.performanceMetrics = performanceMetrics;
        this.feedback = feedback;
    }
}
Employee.prototype.averageScore = function(){
    const scores = Object.values(this.performanceMetrics);
    const total = scores.reduce((sum, score) => sum + score, 0);
        return total/scores.length;   
};

Employee.prototype.perfomanceLevel = function(){
    const average = this.averageScore();

    if(average >= 4.5){
        return "Excellent";
    }else if(average >= 3.5){
        return "Great";
    }else if (average >= 2.5){
        return "Good";
    }
    else {
        return "Need for improvement"
    }
};

Employee.prototype.addFeedback = function(newFeedback){
    if(newFeedback && newFeedback.length >3){
        this.feedback.push(newFeedback);
    }

};

const performance = {
    communication: 4,
    efficiency: 3,
    reliability: 5
};

const employee = new Employee('001',"Daniel",performance,["Responsible"])
console.log(employee);

console.log("Average score for employee is:", employee.averageScore());
console.log("Employees perfomance level is:", employee.perfomanceLevel());
employee.addFeedback("Hardworking employee");
console.log("Updated feedback:",employee.feedback);

// Build a simple e-learning system where a Course class has properties: title (string),
//  instructor (object with name and expertise), and students (array of objects with name
//  and completionStatus), then add prototype methods to return names of students who completed 
// the course, count enrolled students by expertise area, and use control flow to output different 
// messages for instructors with more or less than 5 students.

class Course{
    constructor(title,instructor,students){
        this.title = title;
        this.instructor = instructor;
        this.students = students;
    }
};

Course.prototype.courseCompleted = function (){
    return this.students.filter(student => student.completionStatus).map(student => student.name);

};
Course.prototype.enrolledByExpertise = function (){
    return this.students.length
};
Course.prototype.instructorMessage = function(){
    if(this.students.length < 5){
        return `${this.instructor.name} has less than 5 students enrolled`
    }else{
        return`${this.instructor.name} has more than 5 students enrolled`
    }
}
const course = new Course("Machine Learning",{name: "Daniel", expertise: "Machine Learning Trainor"},[
    {name: "Lucy Muhia", completionStatus: true},
    {name: "Brian Kamau", completionStatus: false},
    {name: "Ann Wambui", completionStatus: true},
    {name: "Francis Njoroge", completionStatus: true},
    {name: "Esther Wambui", completionStatus: false},

]);
console.log("Completed students:", course.courseCompleted());
console.log("Total enrolled students are:", course.enrolledByExpertise());
console.log("The instructor message is:", course.instructorMessage());


