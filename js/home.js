console.log('Welcome to Employee Payroll App');
window.addEventListener('DOMContentLoaded', (event) =>{
    createInnerHtml();
});
//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml ="<th></th><th>Name</th><th>Gender</th>"+"<th>Department</th><th>Salary</th>"+
    "<th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
        <tr>
        <td><img class="profile" src="/assets/image1.jpg" alt=""></td>
        <td>Sajan Mhatre</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>3000000</td>
        <td> 1 Nov 2020</td>
        <td>
            <img onclick="remove(this)" src="/assets/delete.jpg" alt="delete" id="1">
            <img onclick="update(this)" src="/assets/edit.png" alt="edit" id="1">
        </td>
    </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}