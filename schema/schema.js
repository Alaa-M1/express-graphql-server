const graphql = require("graphql");
const _ = require("lodash");
const axios = require("axios");
const {
  getDepartment,
  getEmployees,
  getDepartmentEmployees,
  addEmployee,
  deleteEmployee,
  editEmployee,
} = require("../actions");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = graphql;


const DepartmentType = new GraphQLObjectType({
  name: "Department",
  // We use the closure here to solve a problem of using a variable before its definition
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    //Every department can have several employee
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(obj, args) {
        return getDepartmentEmployees(obj.id);
      },
    },
  }),
});

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    mobile: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    //Every employee can join only one department
    department: {
      type: DepartmentType,
      resolve(obj, args) {
        return getDepartment(obj.departmentId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    employee: {
      type: EmployeeType,
      args: { id: { type: GraphQLString } },
      resolve(obj, args) {
        // return _.find(employees, { id: args.id });
        return getEmployees(args.id);
      },
    },
    department: {
      type: DepartmentType,
      args: { id: { type: GraphQLString } },
      resolve(obj, args) {
        return getDepartment(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        firstName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        lastName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        address: {
          type: GraphQLString,
        },
        mobile: {
          type: GraphQLString,
        },
        age: {
          type: GraphQLInt,
        },
        //Every employee can join only one department
        departmentId: {
          type: GraphQLString,
        },
      },
      resolve(obj, args) {
        return addEmployee(args);
      },
    },
    deleteEmployee: {
      type: EmployeeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(obj, { id }) {
        return deleteEmployee(id);
      },
    },
    editEmployee: {
      type: EmployeeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        lastName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        address: {
          type: GraphQLString,
        },
        mobile: {
          type: GraphQLString,
        },
        age: {
          type: GraphQLInt,
        },
      },
      resolve(obj, args) {
        return editEmployee(args);
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
