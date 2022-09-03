//JS-объект
const result = {
	list: []
};

//XML-парсер
const parser = new DOMParser();

//XML
const studentList = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

//Парсинг XML
const students = parser.parseFromString(studentList, "text/xml");
const studentsNodes = students.querySelectorAll("student");

studentsNodes.forEach((element) => {
	const student = new Set();
	const firstName = element.querySelector("first");
	const secondName = element.querySelector("second");
	const age = element.querySelector("age");
	const prof = element.querySelector("prof");
	const name = element.querySelector("name");
	const lang = name.getAttribute("lang");
	student.name = `${firstName.textContent} ${secondName.textContent}`;
	student.age = + age.textContent;
	student.prof = prof.textContent;
	student.lang = lang;
	result.list.push(student);
});

console.log(result);
