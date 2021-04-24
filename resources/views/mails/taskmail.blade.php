<div class="col-sm-8">
    <p>Привет, {{ $user }}!</p>
    <br>
    <span>У Вас есть просроченные задачи:</span><br>
    @foreach($tasks as $task)
        <h3>Задача: {{ $task->task_name }}</h3>
        <i>Описание: {{ $task->description }}</i>
        <p>Срок выполнения задачи: {{ $task->deadline }}</p>
        <hr>
    @endforeach
    <br>
    <p>С уважением, Команда doPlans</p>
</div>
