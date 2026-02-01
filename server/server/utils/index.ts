export async function getEmployees() {
  try {
    const result = $fetch('http://localhost:3004/employees');
    return result;
  } catch (error) {
    throw error;
  }
}
