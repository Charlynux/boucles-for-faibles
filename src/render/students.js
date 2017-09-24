import { h, init } from 'snabbdom';
import attributes from 'snabbdom/modules/attributes';

console.log(attributes)
const patch = init([
    attributes
]);

const container = document.getElementById("ltacademy");

function renderStudent(student) {
    return h('div.student', {}, [
        h('img', { attrs: {src: `img/${student.avatar}` }}),
        h('div.student-props', {}, [
            h('div.student-props-name', {}, student.name),
            h('div.student-props-notes', {}, `Notes: ${student.notes.join(", ")}`),
            h('div.student-props-average', {}, `Moyenne: ${student.average}`)
        ])
    ]);
}

function renderStudents(students) {
    return h('div.students', {}, [
        h('h2', {}, "LTA'cademy"),
        ...students.map(renderStudent)
    ]);
}

export default function (students) {
    const newNode = document.createElement("div");
    container.appendChild(newNode)
   
    const vdom = renderStudents(students);

    patch(newNode, vdom);
}