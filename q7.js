class CustomerSupportAgent {
    constructor(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }

    displayInfo() {
        console.log("Name:", this.name);
        console.log("Employee ID:", this.employeeId);
        console.log("Department:", this.department);
        console.log("Experience:", this.experience, "years");
    }
}

const agent = new CustomerSupportAgent("Asha Patel", 101, "Customer Support", 3);
agent.displayInfo();