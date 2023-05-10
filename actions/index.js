const axiosInstance = require("../utils/axiosInstance/axiosInstance.ts");

const getEmployees = async (employeeId) => {
  return await axiosInstance({
    method: "get",
    url: `employees/${employeeId}`,
  }).then((response) => response.data);
};
const getDepartment = async (departmentId) => {
  const response = await axiosInstance({
    method: "get",
    url: `departments/${departmentId}`,
  });
  return response.data;
};

const getDepartmentEmployees = async (departmentId) => {
  const { data } = await axiosInstance.get(`department/${departmentId}/employees`);
  return data;
};

const addEmployee = async (employeeInfo) => {
  const { firstName, lastName, address, mobile, age } = employeeInfo;
  return await axiosInstance
    .post(`employees`, { firstName, lastName, address, mobile, age })
    .then((response) => response.data);
};

const deleteEmployee = async (employeeId) => {
  return await axiosInstance
    .delete(`employees/${employeeId}`)
    .then((response) => response.data);
};
const editEmployee = async ({id: employeeId,...employeeInfo}) => {
  return await axiosInstance
    .patch(`employees/${employeeId}`,employeeInfo)
    .then((response) => response.data);
};
module.exports = {
  getEmployees,
  getDepartment,
  getDepartmentEmployees,
  addEmployee,
  deleteEmployee,
  editEmployee
};
