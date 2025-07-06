export default {
  deleteEmployee: async () => {
    const rowIndex = EmployeeTable.triggeredRow.rowIndex;

    if (rowIndex !== undefined) {
      await delete_employee.run({ rowIndex: rowIndex });
      showAlert("Employee deleted successfully!", "success");
      get_all_employees.run(); // Refresh table
    } else {
      showAlert("No row selected!", "error");
    }
  }
}
