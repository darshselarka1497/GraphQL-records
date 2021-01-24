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
        IN_OFFICE
        REMOTE
        HYBRID
    }

    type Query{
        getJob(id: ID): Job
    }

    input JobInput{
        id: ID
        jobName: String!
        category: String
        salary: Int
        level: String
        email: String!
        location: Location
        supervisors: [supervisorInput]!
    }

    input supervisorInput{
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation{
        createJob(input: JobInput): Job
    }
`);

export default schema;