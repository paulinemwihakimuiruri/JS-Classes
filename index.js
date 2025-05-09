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
    return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toogleFeature = function (flag){
    this.isEnabled = flag;
}

const newFeature = new FeatureToggle("rollBack",true,["betaTesters","admins"]);

const roles = ["guests","betaTesters","admins","user"];

roles.forEach(role =>{
    if(newFeature.canAccess(role)){
        console.log(`The ${role} has been granted access to ${newFeature.featureName}`);
        
    }else{
        console.log(`The ${role} has been denied access to ${newFeature.featureName}`);
        
    }
});

newFeature.toogleFeature(false);
console.log(`Feature ${newFeature.featureName} is now ${newFeature.isEnabled ? "enabled" : "disabled"}`);


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

TimeLog.prototype.weeklyHoursWorked = function(weekStartDate){
    const start = new Date(weekStartDate)
    const end = new Date (start)
    end.setDate(start.getDate() + 6);

    const weeklyLogs = this.filterLogsByDate(start, end);
    const totalWeeklyHours = weeklyLogs.reduce((sum, log) => sum + log.hoursWorked, 0);
    if(totalWeeklyHours>40){
        console.log(`${this.freelancerName} exceeded 40 hours this week`);
        return true;
        
    }
    else{
        console.log(`${this.freelancerName} is within weekly hour limits`);
        return false;
        
    };

};

const logs = [
    {date:'2025-01-01', hoursWorked:8},
    {date:'2025-01-02', hoursWorked:7},
    {date:'2025-01-03', hoursWorked:6},
    {date:'2025-01-04', hoursWorked:9},
    {date:'2025-01-05', hoursWorked:8},
]
const project = {name:"UI/UXDESIGN", hourlyRate: 50};
const freelancerLog = new TimeLog ("James",project,logs);
console.log("Total earnings:", freelancerLog.totalEarnings);
console.log("Logs this week:", freelancerLog.filterLogsByDate("2025-01-01","2025-01-05"));
freelancerLog.weeklyHoursWorked('2025-01-02')






// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string),
//  performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

