(function (window, document, undefined) {
    window.onload = run;

    function run() {

        var taskList = [];

        var taskStatus = {
            inprogress: 'inprogress',
            done: 'done'
        };

        function Task(id, name, status) {
            this.id = id;
            this.name = name;
            this.status = status;
        }

        function newTaskElement(task) {

            var listElement = document.getElementById('inprogress-list');
            var taskElement = document.createElement('li');
            var textElement = document.createTextNode(task.name);

            taskElement.setAttribute('id', task.id);
            taskElement.appendChild(textElement);
            listElement.appendChild(taskElement);
        }

        function newTask(event) {
            var taskEntryElement = document.getElementById("task-entry");

            if (taskEntryElement.value != "") {

                var id = 'item-' + taskList.length;
                var task = new Task(id, taskEntryElement.value, taskStatus.inprogress);
                taskList.push(task);
                newTaskElement(task);
                taskEntryElement.value = '';
            }
        }

        function markTaskDone(event) {

            var taskElement = event.target;
            var id = taskElement.id;

            var taskIndex = taskList.findIndex(function (task) { return task.id === id });
            taskList[taskIndex].status = taskStatus.done;

            taskElement.remove();
            document.getElementById("done-list").appendChild(taskElement);
        }

        function newTaskEntry(event) {
            if (event.keyCode === 13) {
                document.getElementById('new-task').click();
            }
        }

        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

        function resetTaskLists(event) {
            var doneList = document.getElementById("done-list");
            var inProgressList = document.getElementById("inprogress-list");

            removeAllChildNodes(doneList);
            removeAllChildNodes(inProgressList);

            taskList = [];
            location.reload();
        }

        document.getElementById('new-task').onclick = newTask;
        document.getElementById("inprogress-list").onclick = markTaskDone;
        document.getElementById("task-entry").onkeydown = newTaskEntry;
        document.getElementById("reset-lists").onkeydown = resetTaskLists;
        document.getElementById("reset-lists").onclick = resetTaskLists;

    }

})(window, document, undefined);
