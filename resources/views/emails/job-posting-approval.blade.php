<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <title>Job Posting Approved</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: #ffffff;
      padding: 40px 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
    }

    .success-icon {
      font-size: 48px;
      margin-bottom: 10px;
    }

    .content {
      padding: 40px 30px;
    }

    .content h2 {
      color: #3b82f6;
      font-size: 22px;
      margin-top: 0;
    }

    .job-box {
      background: #eff6ff;
      border-left: 4px solid #3b82f6;
      padding: 20px;
      margin: 25px 0;
      border-radius: 4px;
    }

    .job-box h3 {
      margin-top: 0;
      color: #1e40af;
      font-size: 20px;
    }

    .job-box p {
      margin: 8px 0;
      font-size: 15px;
    }

    .job-box strong {
      color: #1e3a8a;
    }

    .button {
      display: inline-block;
      padding: 14px 32px;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      margin: 10px 5px;
      transition: transform 0.2s;
    }

    .button:hover {
      transform: translateY(-2px);
    }

    .button-secondary {
      background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
    }

    .stats {
      display: flex;
      justify-content: space-around;
      margin: 25px 0;
      padding: 20px;
      background: #f9fafb;
      border-radius: 4px;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 24px;
      font-weight: 700;
      color: #3b82f6;
      margin: 5px 0;
    }

    .stat-label {
      font-size: 13px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .job-details {
      border: 1px solid #e5e7eb;
      border-radius: 4px;
      padding: 15px;
      margin: 20px 0;
      background: #f9fafb;
    }

    .job-details table {
      width: 100%;
      border-collapse: collapse;
    }

    .job-details td {
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }

    .job-details td:first-child {
      font-weight: 600;
      color: #4b5563;
      width: 35%;
    }

    .job-details tr:last-child td {
      border-bottom: none;
    }

    .tips {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }

    .tips h3 {
      margin-top: 0;
      color: #92400e;
      font-size: 16px;
    }

    .tips ul {
      margin: 10px 0;
      padding-left: 20px;
    }

    .tips li {
      margin: 5px 0;
      color: #78350f;
    }

    .footer {
      background: #f8f9fa;
      padding: 30px;
      text-align: center;
      color: #6c757d;
      font-size: 14px;
      border-top: 1px solid #dee2e6;
    }

    .footer p {
      margin: 5px 0;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <div class="success-icon">🎉</div>
      <h1>Job Posting Approved!</h1>
    </div>

    <div class="content">
      <h2>Great News, {{ $company->name }}!</h2>

      <p>Your job posting has been approved and is now live on our job portal. Students and alumni can now view and
        apply for this position.</p>

      <div class="job-box">
        <h3>{{ $jobPosting->title }}</h3>
        <p><strong>Job Type:</strong>
          @switch($jobPosting->job_type)
            @case('full_time')
              Full Time
            @break

            @case('part_time')
              Part Time
            @break

            @case('internship')
              Internship
            @break

            @case('contract')
              Contract
            @break

            @case('freelance')
              Freelance
            @break
          @endswitch
        </p>
        <p><strong>Work Location:</strong>
          @switch($jobPosting->work_location)
            @case('onsite')
              On-site
            @break

            @case('remote')
              Remote
            @break

            @case('hybrid')
              Hybrid
            @break
          @endswitch
          @if ($jobPosting->location)
            • {{ $jobPosting->location }}
          @endif
        </p>
        <p><strong>Application Deadline:</strong> {{ \Carbon\Carbon::parse($jobPosting->deadline)->format('F d, Y') }}
        </p>
      </div>

      <div class="stats">
        <div class="stat-item">
          <div class="stat-number">{{ $jobPosting->positions_available }}</div>
          <div class="stat-label">Position{{ $jobPosting->positions_available > 1 ? 's' : '' }} Available</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ \Carbon\Carbon::parse($jobPosting->deadline)->diffInDays(now()) }}</div>
          <div class="stat-label">Days Until Deadline</div>
        </div>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <a
          href="{{ $jobUrl }}"
          class="button"
        >View Public Listing</a>
        @if ($dashboardUrl)
          <a
            href="{{ $dashboardUrl }}"
            class="button button-secondary"
          >Go to Dashboard</a>
        @endif
      </div>

      <div class="job-details">
        <table>
          <tr>
            <td>Experience Level:</td>
            <td>
              @switch($jobPosting->experience_level)
                @case('entry')
                  Entry Level
                @break

                @case('mid')
                  Mid Level
                @break

                @case('senior')
                  Senior Level
                @break

                @case('lead')
                  Lead/Manager
                @break
              @endswitch
            </td>
          </tr>
          @if ($jobPosting->salary_range)
            <tr>
              <td>Salary Range:</td>
              <td>{{ $jobPosting->salary_range }}</td>
            </tr>
          @endif
          <tr>
            <td>Application Method:</td>
            <td>{{ $jobPosting->apply_method === 'link' ? 'External Link' : 'Email' }}</td>
          </tr>
          @if ($jobPosting->skills_required && count($jobPosting->skills_required) > 0)
            <tr>
              <td>Required Skills:</td>
              <td>{{ implode(', ', $jobPosting->skills_required) }}</td>
            </tr>
          @endif
        </table>
      </div>

      <div class="tips">
        <h3>💡 Tips to Attract Top Candidates:</h3>
        <ul>
          <li>Share the job posting on your company's social media</li>
          <li>Respond promptly to applicant inquiries</li>
          <li>Keep your company profile updated with latest information</li>
          <li>Consider promoting the posting through additional channels</li>
          <li>Monitor the deadline and extend if needed</li>
        </ul>
      </div>

      @if ($dashboardUrl)
        <p>From your dashboard, you can:</p>
        <ul>
          <li>✅ Track views and engagement on your job posting</li>
          <li>✅ Edit job details if needed</li>
          <li>✅ Deactivate the posting once filled</li>
          <li>✅ Post additional job opportunities</li>
          <li>✅ Manage your company profile</li>
        </ul>
      @endif

      <p>Thank you for partnering with us to provide opportunities for our students and alumni. We're excited to help
        you find the perfect candidate!</p>

      <p>Best regards,<br><strong>The Job Portal Team</strong></p>
    </div>

    <div class="footer">
      <p><strong>Need Assistance?</strong></p>
      <p>Contact us at: <a href="mailto:support@example.com">support@example.com</a></p>
      <p>&copy; {{ date('Y') }} Job Portal. All rights reserved.</p>
    </div>
  </div>
</body>

</html>
