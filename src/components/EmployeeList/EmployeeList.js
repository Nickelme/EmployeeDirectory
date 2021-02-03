import React, { useEffect, useState, useMemo } from "react";
import API from "../../utils/API";
import "./style.css"
import { useTable } from "react-table";


function EmployeeList(props) {

    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        API.getEmployees().then(users => {
            console.log(users);
            setEmployees(users);
        });
    }, []);

    var filteredEmployees = employees.filter((employee) => {
        return (employee.name.first.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0 || employee.name.last.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0);
    });

    var sortedEmployees = filteredEmployees.sort((a,b)=>{
        if (props.sortBy != "lnNomral"){
            return a.name.last.toLowerCase() < b.name.last.toLowerCase();
        }else{
            return b.name.last.toLowerCase() < a.name.last.toLowerCase();
        }
    })

    return (
        <div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
                <tbody>
                    {sortedEmployees.map(employee => {
                        return (
                            <tr>
                                <td>
                                    <img src={employee.picture.medium}></img>
                                </td>
                                <td>
                                    {employee.name.first}
                                </td>
                                <td>
                                    {employee.name.last}
                                </td>
                                <td>
                                    {employee.cell}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;