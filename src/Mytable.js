import Table from 'react-bootstrap/Table';
function Mytable()
{
    return(
      <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th  colSpan={12}>about</th>
        </tr>
        <tr>
          <td>sr no.</td>
          <td>about</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td colSpan={12}>500+Students Trained</td>
           
        </tr>
        <tr>
          <td>2.</td>
          <td colSpan={12}>10+Courses</td>
        </tr>
        <tr>
          <td>3.</td>
          <td colSpan={12}>5+Years Experience</td>
        </tr>
          <tr>
          <td>4.</td>
          <td colSpan={12}>50+Projects Completed</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}
export default Mytable;