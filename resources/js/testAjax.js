jQuery(document).ready(function($){

    jQuery('#btn-get').click(function () {
        jQuery('#myForm').trigger("reset");
        jQuery('#formModal').modal('show');
    });

    $("#btn-request").click(function (e) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content') // Обязательно для передачи!!!
            }
        });
        e.preventDefault();
        var is_checked = jQuery('#favorites').prop("checked") ? 1 : 0
        var predefined = $('#predefined').val()
        var methods = [
            'GET',
            'POST',
            'PUT',
            'DELETE'
        ];
        var formData = {
            // user_id: jQuery('#user_id').val(),
            // name: jQuery('#list_name').val(),
            // pattern_id: jQuery('#pattern_id').val(),
            // predefined: predefined,

            task_id: jQuery('#task_id').val(),
            // name: jQuery('#task_name').val(),
            // description: jQuery('#task_description').val(),
            list_id: jQuery('#list_id').val(),
            // term_id: jQuery('#term_id').val(),
            // repeat_id: jQuery('#repeat_id').val(),
            // cronTime: jQuery('#cron').val(),
            // favorites: is_checked,
            dicRemind_id: $('#dicRemind_id').val(),
            remind_id: 10,
        };
        $.ajax({
            type: methods[0],
            // url: '/api/tasks/',
            // url: '/api/tasks/' + formData.task_id,
            // url: '/api/tasks/list/' + formData.list_id,
            // url: '/api/lists/predefined/' + predefined,
            url: '/api/lists/'+formData.list_id,
            // url: '/api/reminds/task/270',
            // url: 'api/reminddics',

            data: formData,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                jQuery('#formModal').modal('hide')
            },
            error: function () {
                jQuery('#formModal').modal('hide')
            }
        });
    });
    $("#btn-close").click(function (){
        jQuery('#formModal').modal('hide')
    });
});
