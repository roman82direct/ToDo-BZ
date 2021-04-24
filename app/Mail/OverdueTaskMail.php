<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OverdueTaskMail extends Mailable
{
    use Queueable, SerializesModels;
    public $arr_data,
           $user_name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->arr_data = $data->all();
        $this->user_name = $data->first()->user_name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("doPlans: Просроченные задачи")
                    ->view('mails.taskmail', ['user'=>$this->user_name, 'tasks'=>$this->arr_data]);
    }
}
