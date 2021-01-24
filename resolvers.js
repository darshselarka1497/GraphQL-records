import {nanoid} from 'nanoid';

class Job{
    constructor(id,{
        jobName, category, salary, level, email, location, supervisors
    }){
        this.id = id
        this.jobName = jobName
        this.category = category
        this.salary = salary
        this.level = level
        this.email = email
        this.location = location
        this.supervisors = supervisors
    }
}

const jobHolder = {};

const resolvers = {
    getJob: ({id})  => {
        return new Job(id, jobHolder[id]);
    },
    createJob: ({input}) => {
        let id = nanoid();
        jobHolder[id] = input;
        return new Job(id, input);
    }
}

export default resolvers;