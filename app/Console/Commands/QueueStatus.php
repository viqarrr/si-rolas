<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis;

class QueueStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queue:status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Display the current queue status';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $queueName = config('queue.connections.redis.queue', 'default');
        
        $this->info('Queue Status Report');
        $this->line('==================');
        
        try {
            // Get queue size
            $size = Redis::llen("queues:{$queueName}");
            $this->line("Jobs in queue: {$size}");
            
            // Get failed jobs count
            $failedCount = \DB::table('failed_jobs')->count();
            $this->line("Failed jobs: {$failedCount}");
            
            if ($failedCount > 0) {
                $this->warn("\nRecent failed jobs:");
                $failedJobs = \DB::table('failed_jobs')
                    ->orderBy('failed_at', 'desc')
                    ->limit(5)
                    ->get(['uuid', 'queue', 'failed_at']);
                
                foreach ($failedJobs as $job) {
                    $this->line("  - {$job->uuid} on {$job->queue} at {$job->failed_at}");
                }
            }
            
        } catch (\Exception $e) {
            $this->error("Error connecting to Redis: " . $e->getMessage());
            return 1;
        }
        
        return 0;
    }
}