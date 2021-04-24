<?php

namespace App\Jobs;

use App\Mail\OverdueTaskMail;
use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class TasksDeadlinesAlert implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $arr = Task::getOverduedTasks();
        $mails = $arr->pluck('email')->unique();

        foreach ($mails as $mail) {
            Storage::disk('mail_logs')->append('mail.log', date("Y-m-d H:i:s"). ' email: '.$mail);
            $message = 'success';
            $data = $arr->where('email', $mail);
            try {
                Mail::to($mail)->send(new OverdueTaskMail($data));
                foreach ($data as $item){
                    Task::find($item->task_id)->update(['is_alert'=>1]);
                }
            } catch (\Exception $exception) {
                $message = "error: " . $exception->getMessage();
            } finally {
                Storage::disk('mail_logs')->append('mail.log', $message);
            }
        }
    }
}
