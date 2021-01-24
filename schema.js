import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Job{
        id: ID
        jobName: String
        category: String
        salary: Int
        level: String
        email: String
        location: Location
        supervisors: [supervisor]
    } 
    type supervisor{
        firstName: String
        lastName: String
        experience: Int
    }

    enum Location{
        inOffice
        remote
        hybrid
    }

    type Query{
        getJob(id: ID): Job
    }
`);

export default schema;