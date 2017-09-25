import { h, init } from 'snabbdom';
import attributes from 'snabbdom/modules/attributes';

const patch = init([
    attributes
]);

const container = document.getElementById("ltacademy");

function renderStudent(student) {
    return h('div.student', {}, [
        h('img', { attrs: {src: `img/${student.avatar}` }}),
        h('div.student-props', {}, [
            h('div.student-props-name', {}, student.name),
            h('div.student-props-notes', {}, `Notes: ${student.notes.join(", ")}`)
        ])
    ]);
}

function renderAcademy(students) {
    return h('div.students', {}, [
        h('h2', {}, "LTA'cademy"),
        ...(students.length > 0
            ? students.map(renderStudent)
            : [h('div', {}, "Aucun étudiant")])
    ]);
}

export default function (students) {
    const newNode = document.createElement("div");
    container.appendChild(newNode)
   
    const vdom = renderAcademy(students);

    patch(newNode, vdom);
}