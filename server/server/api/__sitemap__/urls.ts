interface Employee {
  id: string | number;
  fullname?: string;
  position?: string;
  age?: number;
  // ide jöhet a többi mező, amit az API visszaad
}

export default defineSitemapEventHandler(async () => {
  const employees = await $fetch<Employee[]>('http://localhost:3004/employees');

  return [
    { loc: '/' },
    { loc: '/form/add' },
    ...employees.map((emp) => ({ loc: `/employee/${emp.id}` })),
  ];
});
